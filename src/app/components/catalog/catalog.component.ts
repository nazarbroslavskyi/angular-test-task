import { DrinkCatalog } from './../../models/drink';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  @Input() catalogOfDrinks: DrinkCatalog;

  constructor() {}

  ngOnInit() {
    console.log(this.catalogOfDrinks);
  }
}
