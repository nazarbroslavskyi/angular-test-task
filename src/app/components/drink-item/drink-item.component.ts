import { Component, OnInit, Input } from '@angular/core';
import { DrinkItem } from 'src/app/models/drinkItem';

@Component({
  selector: 'app-drink-item',
  templateUrl: './drink-item.component.html',
  styleUrls: ['./drink-item.component.scss']
})
export class DrinkItemComponent implements OnInit {
  @Input() itemContent: DrinkItem;
  constructor() { }

  ngOnInit() {}

}
