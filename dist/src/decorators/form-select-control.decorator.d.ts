import { ValidatorFn } from '@angular/forms';
import { FormControlType } from '../enums/form-control.enum';
import SelectOption from '../models/select-option.model';
export interface FormSelectDecoratorOptions {
    order?: number;
    validators?: ValidatorFn[];
    defaultValue?: any;
}
export declare const FormSelectControl: (type: FormControlType.Select | FormControlType.Radio, values: SelectOption[], options?: FormSelectDecoratorOptions | undefined) => (target: Object, property: string) => void;
