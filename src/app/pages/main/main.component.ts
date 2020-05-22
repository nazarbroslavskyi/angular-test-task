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

  filterList: any;

  constructor(private catalog: CatalogService) { }

  ngOnInit() {}

  fetchCatalogList(catalogList, catalogIndex) {
    console.log(catalogList);
    const params = new HttpParams().set('c', catalogList[catalogIndex]);
    this.catalog.fetchCatalog('filter.php', params).pipe(
      map(data => {
       if (data) {
         return data;
       } else {
        return throwError('This is an error!');
       }
      }),
      catchError(err => {
        console.log(err);
        return EMPTY;
      })
    )
    .subscribe((data: any) => {
      this.initialCatalogIndex++;
      this.catalogList.push({
        title: params.get('c'),
        data: data.drinks
      });
    });
  }


  fetchCatalogtData(catalogList) {
    this.filterList = catalogList;
    this.catalogList = [];
    this.initialCatalogIndex = 0;
    this.fetchCatalogList(catalogList, this.initialCatalogIndex); // initial load of data
  }

  loadNextData() {
    if (!(this.filterList.length === this.initialCatalogIndex)) {
      this.fetchCatalogList(this.filterList, this.initialCatalogIndex);
    }
  }
}
