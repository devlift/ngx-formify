import { ValidatorFn } from '@angular/forms';
import { FormControlType } from '../enums/form-control.enum';

export interface FormFileDecoratorOptions {
	order?: number;
};

export const FormFileControl = (options?: FormFileDecoratorOptions) => {
	let o: FormFileDecoratorOptions = options || {};

	return (target: Object, property: string) => {
		Object.defineProperties(target, {
			[property + "-form-metadata"]: {
				value: {
					name: property,
					type: FormControlType.File,
					order: o.order
				},
				enumerable: false,
				configurable: false
			}
		} );
	};
};
