import { FormGroup } from '@angular/forms';

import { FieldConfig } from '../models/models';

export class BaseComponent {
  field: FieldConfig;
  group: FormGroup;
}
