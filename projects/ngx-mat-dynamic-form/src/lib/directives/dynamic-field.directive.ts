import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FieldConfig } from '@df/models/models';

import { InputTextComponent } from '../components/input-text/input-text.component';

const componentMapper = {
  'input-text': InputTextComponent
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

  private componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[`${this.field.xtype}-${this.field.vtype}`]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
  }
}
