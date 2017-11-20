import {FormControl} from '@angular/forms';
import {FormControlType} from '../enums/form-control.enum';

export class FormControlExtended extends FormControl {
	public controlType: FormControlType;
	public placeholder: string;
}
