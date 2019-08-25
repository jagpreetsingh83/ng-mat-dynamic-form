import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMatDynamicFormModule } from 'ngx-mat-dynamic-form';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxMatDynamicFormModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
