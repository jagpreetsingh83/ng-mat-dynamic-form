export interface FieldConfig {
  name?: string;
  xtype: string;
  vtype: string;
  label?: string;
  value?: any;
  validations?: Validator[];
}

export interface Validator {
  name: string;
  validator: any;
  message: string;
}
