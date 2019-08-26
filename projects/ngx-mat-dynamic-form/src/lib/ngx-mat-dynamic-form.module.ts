import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { MaterialModule } from './material.module';
import { NgxMatDynamicFormComponent } from './ngx-mat-dynamic-form.component';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';

const components = [InputComponent, ButtonComponent];

@NgModule({
  declarations: [
    NgxMatDynamicFormComponent,
    DynamicFieldDirective,
    InputComponent,
    ButtonComponent,
    NumbersOnlyDirective
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
