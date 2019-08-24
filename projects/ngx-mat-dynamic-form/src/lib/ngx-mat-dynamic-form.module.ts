import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InputTextComponent } from './components/input-text/input-text.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { NgxMatDynamicFormComponent } from './ngx-mat-dynamic-form.component';

const components = [InputTextComponent];

@NgModule({
  declarations: [
    NgxMatDynamicFormComponent,
    DynamicFieldDirective,
    InputTextComponent
  ],
  imports: [CommonModule],
  exports: [NgxMatDynamicFormComponent],
  entryComponents: [...components]
})
export class NgxMatDynamicFormModule {}
