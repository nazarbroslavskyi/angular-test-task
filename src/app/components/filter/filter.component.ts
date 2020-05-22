import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { FilterService } from 'src/app/services/filter/filter.service';
import { DrinkCategory, DrinksCategoryList } from 'src/app/models/drinkCategory';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() applyFilter = new EventEmitter();
  isLoading = true;
  // @Output() initial = new EventEmitter();
  public searchDrinksForm: FormGroup;
  public submitted = false;
  items: FormArray;
  ordersData: Array<DrinkCategory>;
  selectedOrderIds: any;

  constructor(private filter: FilterService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  public applySearch() {}

  initForm() {
    this.searchDrinksForm = this.formBuilder.group({
      orders: new FormArray([])
    });
    this.getCategoryList();
  }

  private addCheckboxes() {
    this.ordersData.forEach((o, i) => {
      const control = new FormControl(true); // if first item set to true, else false
      (this.searchDrinksForm.controls.orders as FormArray).push(control);
    });
  }

  submit() {
    this.selectedOrderIds = this.searchDrinksForm.value.orders
      .map((v, i) => (v ? this.ordersData[i].strCategory : null))
      .filter(v => v !== null);
    console.log(this.selectedOrderIds);
    console.log(this.searchDrinksForm.value);
    this.applyFilter.emit(this.selectedOrderIds);
  }

  getControls() {
    // console.log(this.searchDrinksForm.get('orders'));
    return (this.searchDrinksForm.get('orders') as FormArray).controls;
  }

  private getCategoryList() {
    const params = new HttpParams().set('c', 'list');
    this.filter.fetchFilterItems<DrinksCategoryList>('list.php', params).pipe(
        catchError(err => {
          this.isLoading = false;
          return EMPTY;
        })
    )
    .subscribe((data: DrinksCategoryList) => {
      console.log(data);
      this.ordersData = data.drinks;
      this.addCheckboxes();
      const initialCheckedCheckboxes = this.ordersData.map(elem => elem.strCategory);
      console.log(initialCheckedCheckboxes);
      this.isLoading = false;
      this.applyFilter.emit(initialCheckedCheckboxes);
    });
  }

  public checkIfCheckBoxChecked() {
    this.selectedOrderIds = this.searchDrinksForm.value.orders
    .map((v, i) => (v ? this.ordersData[i].strCategory : null))
    .filter(v => v !== null);
  }
}
