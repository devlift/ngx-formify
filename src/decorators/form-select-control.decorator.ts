import { Validators } from '@angular/forms';
import { FormControlType } from '../enums/form-control.enum';
import { SelectOption } from '../models/form-control-extended.model';

export const FormSelectControl = (options: SelectOption[], defaultValue?: string, validators?: Validators[]) => {
	return (target: Object, property: string) => {
		Object.defineProperties(target, {
			[property + "-form-metadata"]: {
				value: {
					type: FormControlType.Select,
					validators: validators,
					defaultValue: defaultValue,
					options: options
				},
				enumerable: false,
				configurable: false
			}
		} );
	};
};
