import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMatDynamicFormModule } from 'projects/ngx-mat-dynamic-form/src/public_api';

import { AppComponent, FormDataDialogComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, FormDataDialogComponent],
  imports: [BrowserModule, NgxMatDynamicFormModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FormDataDialogComponent]
})
export class AppModule {}
