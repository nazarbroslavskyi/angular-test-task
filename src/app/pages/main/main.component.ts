import { catchError, map } from 'rxjs/operators';
import { Component, OnInit, HostListener } from '@angular/core';
import { CatalogService } from 'src/app/services/catalog/catalog.service';
import { HttpParams } from '@angular/common/http';
import { EMPTY, throwError } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public catalogList = [];
  public initialCatalogIndex = 0;
  public filterList = [];
  public endOfList: boolean;
  public error = false;
  loadNextData: any = () => {};

  constructor(private catalog: CatalogService) { }

  ngOnInit() {}

  public fetchCatalogList(catalogList, catalogIndex) {
    this.error = false;
    this.endOfList = false;
    const params = new HttpParams().set('c', catalogList[catalogIndex]);
    this.catalog.fetchCatalog('filter.php', params).pipe(
      catchError(err => {
        console.log(err);
        this.error = true;
        return EMPTY;
      })
    )
    .subscribe((data: any) => {
      this.loadNextData = this.loadNextDataFunction;
      if (data == null) {
        this.error = true;
      } else {
        if (data.drinks.length) {
          this.catalogList.push({
            title: params.get('c'),
            data: data.drinks
          });
        }
      }
    });
  }

  fetchCatalogtData(catalogList) {
    this.endOfList = false;
    this.filterList = catalogList;
    this.catalogList = [];
    this.initialCatalogIndex = 0;
    this.fetchCatalogList(catalogList, this.initialCatalogIndex); // initial load of data
  }

  public loadNextDataFunction() {
    this.initialCatalogIndex++;
    console.log(this.filterList);
    console.log(this.initialCatalogIndex);
    if ((this.filterList.length !== this.initialCatalogIndex)) {
      this.fetchCatalogList(this.filterList, this.initialCatalogIndex);
    } else {
      this.endOfList = true;
    }
  }
}
