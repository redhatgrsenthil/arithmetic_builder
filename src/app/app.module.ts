import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArithmeticQueryBuilderComponent } from './arithmetic-query-builder/arithmetic-query-builder.component';
import { QueryBuilderComponent } from './arithmetic-query-builder/query-builder/query-builder.component';


@NgModule({
  declarations: [
    AppComponent,
    ArithmeticQueryBuilderComponent,
    QueryBuilderComponent
  ],
  imports: [
    BrowserModule,    
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
