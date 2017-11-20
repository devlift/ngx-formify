import { Component, Input } from '@angular/core';
import { FormControlExtended } from '../../models/form-control-extended.model';

@Component({
	selector: 'formify-control',
	templateUrl: './form-control.component.html',
	moduleId: module.id
})
export class FormControlComponent {
	@Input() formControl: FormControlExtended;

	constructor() {}
}
