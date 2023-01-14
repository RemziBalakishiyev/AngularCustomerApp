import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestObsComponent } from './test-obs/test-obs.component';
import { TestSubjectComponent } from './test-subject/test-subject.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryComponent } from './country/country.component';
@NgModule({
  declarations: [
    AppComponent,
    TestObsComponent,
    TestSubjectComponent,
    ProductComponent,
    CountryComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
