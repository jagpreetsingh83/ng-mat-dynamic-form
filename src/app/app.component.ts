import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from '@df/models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
          message: 'Name Required'
        },
        {
          name: 'pattern',
          validator: Validators.pattern('^[a-zA-Z]+$'),
          message: 'Accepts only text'
        }
      ]
    }
  ];
}
