import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { DrinkItemComponent } from './components/drink-item/drink-item.component';
import { MainComponent } from './pages/main/main.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { ComboboxComponent } from './combobox/combobox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    DrinkItemComponent,
    MainComponent,
    CatalogComponent,
    InfiniteScrollComponent,
    ComboboxComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
