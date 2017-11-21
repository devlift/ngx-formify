import { ValidatorFn } from '@angular/forms';
import { FormControlType } from '../enums/form-control.enum';

export interface FormControlDecoratorOptions {
	order?: number;
	placeholder?: string;
	validators?: ValidatorFn[];
	defaultValue?: any;
};

export const FormControl = (type: FormControlType.Input | FormControlType.TextArea | FormControlType.Checkbox | FormControlType.Password, options?: FormControlDecoratorOptions) => {
	let o: FormControlDecoratorOptions = options || {};

	return (target: Object, property: string) => {
		Object.defineProperties(target, {
			[property + "-form-metadata"]: {
				value: {
					name: property,
					type: type,
					order: o.order,
					placeholder: o.placeholder,
					validators: o.validators,
					defaultValue: o.defaultValue
				},
				enumerable: false,
				configurable: false
			}
		} );
	};
};
