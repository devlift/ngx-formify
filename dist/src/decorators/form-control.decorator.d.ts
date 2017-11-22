import { ValidatorFn } from '@angular/forms';
import { FormControlType } from '../enums/form-control.enum';
export interface FormControlDecoratorOptions {
    order?: number;
    placeholder?: string;
    validators?: ValidatorFn[];
    defaultValue?: any;
}
export declare const FormControl: (type: FormControlType.Input | FormControlType.TextArea | FormControlType.Checkbox | FormControlType.Password, options?: FormControlDecoratorOptions | undefined) => (target: Object, property: string) => void;
