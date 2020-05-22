import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
} from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { FilterService } from 'src/app/services/filter/filter.service';
import {
  DrinkCategory,
  DrinksCategoryList
} from 'src/app/models/drinkCategory';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() applyFilter = new EventEmitter();
  public isLoading = true;
  public searchDrinksForm: FormGroup;
  public submitted = false;
  public items: FormArray;
  public ordersData: Array<DrinkCategory>;
  public selectedOrderIds: any;

  constructor(
    private filter: FilterService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initForm();
  }

  public initForm(): void {
    this.searchDrinksForm = this.formBuilder.group({
      orders: new FormArray([])
    });
    this.getCategoryList();
  }

  public submit() {
    this.selectedOrderIds = this.searchDrinksForm.value.orders
      .map((v, i) => (v ? this.ordersData[i].strCategory : null))
      .filter(v => v !== null);
    this.applyFilter.emit(this.selectedOrderIds);
  }

  public getControls() {
    return (this.searchDrinksForm.get('orders') as FormArray).controls;
  }

  public checkIfCheckBoxChecked(): void {
    this.selectedOrderIds = this.searchDrinksForm.value.orders
      .map((v, i) => (v ? this.ordersData[i].strCategory : null))
      .filter(v => v !== null);
  }

  private getCategoryList(): void {
    const params = new HttpParams().set('c', 'list');
    this.filter
      .fetchFilterItems<DrinksCategoryList>('list.php', params)
      .pipe(
        catchError(err => {
          this.isLoading = false;
          return EMPTY;
        })
      )
      .subscribe((data: DrinksCategoryList) => {
        this.ordersData = data.drinks;
        this.addCheckboxes();
        const initialCheckedCheckboxes = this.ordersData.map(
          elem => elem.strCategory
        );
        this.isLoading = false;
        this.applyFilter.emit(initialCheckedCheckboxes);
      });
  }

  private addCheckboxes(): void {
    this.ordersData.forEach((o, i) => {
      const control = new FormControl(true);
      (this.searchDrinksForm.controls.orders as FormArray).push(control);
    });
  }
}
