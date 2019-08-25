import { Component, Input, OnInit } from '@angular/core';

import { FieldConfig } from './models/models';

@Component({
  selector: 'lib-ngx-mat-dynamic-form',
  templateUrl: './ngx-mat-dynamic-form.component.html',
  styleUrls: ['./ngx-mat-dynamic-form.component.scss']
})
export class NgxMatDynamicFormComponent implements OnInit {
  @Input() fields: FieldConfig[] = [];

  constructor() {}

  ngOnInit() {}
}
