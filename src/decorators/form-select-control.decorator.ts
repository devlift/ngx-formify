import { ValidatorFn } from '@angular/forms';
import { FormControlType } from '../enums/form-control.enum';
import { SelectOption } from '../models/form-control-extended.model';

export interface FormSelectDecoratorOptions {
	order?: number;
	validators?: ValidatorFn[];
	defaultValue?: any;
};

export const FormSelectControl = (type: FormControlType.Select | FormControlType.Radio, values: SelectOption[], options?: FormSelectDecoratorOptions) => {
	return (target: Object, property: string) => {
		const o: FormSelectDecoratorOptions = options || {};

		Object.defineProperties(target, {
			[property + "-form-metadata"]: {
				value: {
					name: property,
					type: type,
					order: o.order,
					validators: o.validators,
					defaultValue: o.defaultValue,
					options: values
				},
				enumerable: false,
				configurable: false
			}
		} );
	};
};
