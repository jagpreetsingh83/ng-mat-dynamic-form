import { Component, Inject } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FieldConfig } from 'projects/ngx-mat-dynamic-form/src/lib/models/models';

@Component({
  selector: 'app-dialog-data-example-dialog',
  template: `
    <pre>{{ data | json }}</pre>
  `
})
export class FormDataDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  fields: FieldConfig[] = [
    {
      name: 'name',
      label: 'Username',
      xtype: 'input',
      vtype: 'text',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Username is required'
        },
        {
          name: 'pattern',
          validator: Validators.pattern('^[a-zA-Z]+$'),
          message: 'Only alphabets are allowed'
        }
      ]
    },
    {
      name: 'age',
      label: 'Age',
      xtype: 'input',
      vtype: 'number',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Age is required'
        }
      ]
    },
    {
      xtype: 'button',
      vtype: 'primary',
      label: 'Save'
    }
  ];

  submit(data) {
    this.dialog.open(FormDataDialogComponent, {
      data: data
    });
  }
}
