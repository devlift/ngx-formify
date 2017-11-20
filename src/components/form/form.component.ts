import { Component, Input, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlExtended } from '../../models/form-control-extended.model';

@Component({
	selector: 'formify',
	templateUrl: './form.component.html',
	moduleId: module.id
})
export class FormComponent implements OnChanges {
	@Input() formGroup: FormGroup;
	private keys: string[] = [];
	
	constructor() {}

	ngOnChanges() {
		this.keys = Object.keys( this.formGroup.controls );
	}
}
