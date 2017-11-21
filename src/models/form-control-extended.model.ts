import {FormControl, Validator, ValidatorFn} from '@angular/forms';
import {FormControlType} from '../enums/form-control.enum';

export interface SelectOption {
	label: string;
	data: any;
}

export class FormControlExtended extends FormControl {
	public controlType: FormControlType;
	public placeholder?: string;
	public options?: SelectOption[];
}

export interface FormDecoratorData {
	name: string;
	type: FormControlType;
	order: number;
	placeholder?: string;
	validators?: ValidatorFn | ValidatorFn[];
	defaultValue?: any;
	options?: SelectOption[];
}