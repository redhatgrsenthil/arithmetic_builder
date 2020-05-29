import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArithmeticQueryBuilderComponent } from './arithmetic-query-builder/arithmetic-query-builder.component';
import { QueryBuilderComponent } from './arithmetic-query-builder/query-builder/query-builder.component';
import { ReOrderItemComponent } from './re-order-item/re-order-item.component';
import { AlertComponent } from './shared/cui/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    ArithmeticQueryBuilderComponent,
    QueryBuilderComponent,
    ReOrderItemComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,    
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
