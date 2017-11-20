import { Validators } from '@angular/forms';
import { FormControlType } from '../enums/form-control.enum';

export const FormControl = (type: FormControlType, placeholder?: string, validators?: Validators[], defaultValue?: string) => {
	return (target: Object, property: string) => {
		Object.defineProperties(target, {
			[property + "-form-metadata"]: {
				value: {
					type: type,
					placeholder: placeholder,
					validators: validators,
					defaultValue: defaultValue
				},
				enumerable: false,
				configurable: false
			}
		} );
	};
};
