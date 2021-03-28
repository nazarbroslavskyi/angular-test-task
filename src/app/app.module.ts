import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { DrinkItemComponent } from './components/drink-item/drink-item.component';
import { MainComponent } from './pages/main/main.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { ComboboxComponent } from './combobox/combobox.component';
import { AmwRadioOptionComponent } from './amw-radio-option/amw-radio-option.component';
import { SortControlComponent } from './sort-control/sort-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    DrinkItemComponent,
    MainComponent,
    CatalogComponent,
    InfiniteScrollComponent,
    ComboboxComponent,
    AmwRadioOptionComponent,
    SortControlComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  exports: [ ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
