import { Directive, Input, OnInit } from '@angular/core';
import { FieldConfig } from '@df/models/models';

const componentMapper = {
  // input: InputComponent,
  // button: ButtonComponent,
  // select: SelectComponent,
  // date: DateComponent,
  // radiobutton: RadiobuttonComponent,
  // checkbox: CheckboxComponent
};

@Directive({
  selector: '[libDynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() field: FieldConfig;

  constructor() {}

  ngOnInit() {
    console.log(this.field);
  }
}
