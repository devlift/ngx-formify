import {FormControl} from '@angular/forms';
import {FormControlType} from '../enums/form-control.enum';

export class SelectOption {
	label: string;
	data: any;
}

export class FormControlExtended extends FormControl {
	public controlType: FormControlType;
	public placeholder?: string;
	public options?: SelectOption[];
}
