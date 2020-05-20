import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FilterComponent } from './components/filter/filter.component';
import { ContentComponent } from './components/content/content.component';
import { DrinkItemComponent } from './components/drink-item/drink-item.component';
import { MainComponent } from './pages/main/main.component';
import { CheckboxItemComponent } from './components/checkbox-item/checkbox-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    ContentComponent,
    DrinkItemComponent,
    MainComponent,
    CheckboxItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
