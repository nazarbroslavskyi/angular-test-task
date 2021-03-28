import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmwRadioOptionComponent } from './amw-radio-option.component';

describe('AmwRadioOptionComponent', () => {
  let component: AmwRadioOptionComponent;
  let fixture: ComponentFixture<AmwRadioOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmwRadioOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmwRadioOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
