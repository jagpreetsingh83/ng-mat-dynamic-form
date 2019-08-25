import { Component, OnInit } from '@angular/core';

import { FieldConfig } from '../../models/models';

@Component({
  selector: 'lib-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {
  field: FieldConfig;

  constructor() {}

  ngOnInit() {}
}
