import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InputTextComponent } from './components/input-text/input-text.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { MaterialModule } from './material.module';
import { NgxMatDynamicFormComponent } from './ngx-mat-dynamic-form.component';

const components = [InputTextComponent];

@NgModule({
  declarations: [
    NgxMatDynamicFormComponent,
    DynamicFieldDirective,
    InputTextComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [NgxMatDynamicFormComponent],
  entryComponents: [...components]
})
export class NgxMatDynamicFormModule {}
