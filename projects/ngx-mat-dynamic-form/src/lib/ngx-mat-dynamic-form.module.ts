import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonComponent } from './components/button/button.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { MaterialModule } from './material.module';
import { NgxMatDynamicFormComponent } from './ngx-mat-dynamic-form.component';

const components = [InputTextComponent, ButtonComponent];

@NgModule({
  declarations: [
    NgxMatDynamicFormComponent,
    DynamicFieldDirective,
    InputTextComponent,
    ButtonComponent
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
