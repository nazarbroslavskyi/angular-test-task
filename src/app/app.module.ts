import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { DrinkItemComponent } from './components/drink-item/drink-item.component';
import { MainComponent } from './pages/main/main.component';
import { CheckboxItemComponent } from './components/checkbox-item/checkbox-item.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    DrinkItemComponent,
    MainComponent,
    CheckboxItemComponent,
    CatalogComponent,
    InfiniteScrollComponent
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
