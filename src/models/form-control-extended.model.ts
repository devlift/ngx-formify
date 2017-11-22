import {FormControl} from '@angular/forms';
import {FormControlType} from '../enums/form-control.enum';
import SelectOption from './select-option.model';

export default class FormControlExtended extends FormControl {
	public controlType: FormControlType;
	public placeholder?: string;
	public options?: SelectOption[];
}
