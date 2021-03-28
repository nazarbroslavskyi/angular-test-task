import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-test';
  logs = [];

  label = "some radio label"


  filters = [
    { value: '1', label: 'Name: A - Z' },
    { value: '2', label: 'Name: Z - A' },
    { value: '3', label: 'Quantity: Low to Hight' },
    { value: '4', label: 'Quantity: Hight to Low' },
    { value: '5', label: 'Removal Date: Earliest' },
    { value: '6', label: 'Removal Date: Latest' },
  ];

  options=[
    {"code":"1","label":"Yellow"},
    {"code":"2","label":"Blue"},
    {"code":"3","label":"Green"},
    {"code":"4","label":"Black"},
    {"code":"5","label":"Red"},
    {"code":"6","label":"Purple"},
    {"code":"7","label":"Pink"},
  ]


  form: FormGroup;
  onComboboxClick($event) {

    this.logs.push('FOCUSIN log --------')
  }

  onComoboxFocusOut($event) {
    this.logs.push('FOCUSOUT')
  }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null)
    })
  }

sort: FormGroup;
  // constructor() {

  // }


  constructor(private FormBuilder: FormBuilder) {
    this.sort = this.FormBuilder.group({
      sortOption: ['2'],
    });

    this.sort.valueChanges.subscribe((value) => console.log('-------', value))
  }
}
