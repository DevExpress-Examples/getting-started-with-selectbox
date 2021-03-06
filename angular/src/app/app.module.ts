import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxSelectBoxModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
