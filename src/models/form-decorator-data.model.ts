import {ValidatorFn} from '@angular/forms';
import {FormControlType} from '../enums/form-control.enum';
import SelectOption from './select-option.model';

export default interface FormDecoratorData {
	name: string;
	type: FormControlType;
	order: number;
	placeholder?: string;
	validators?: ValidatorFn | ValidatorFn[];
	defaultValue?: any;
	options?: SelectOption[];
}