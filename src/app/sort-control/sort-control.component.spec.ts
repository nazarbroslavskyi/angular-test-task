import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortControlComponent } from './sort-control.component';

describe('SortControlComponent', () => {
  let component: SortControlComponent;
  let fixture: ComponentFixture<SortControlComponent>;

  beforeEach(() => {
    component = new SortControlComponent(null)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
