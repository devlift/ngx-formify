import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlExtended } from '../../models/form-control-extended.model';

@Component({
	selector: 'formify',
	templateUrl: './form.component.html',
	moduleId: module.id
})
export class FormComponent implements OnChanges, OnInit {
	@Input() formGroup: FormGroup;
	private keys: string[] = [];
	
	constructor() {}

	ngOnInit() {
		this.keys = Object.keys( this.formGroup.controls );
	}

	ngOnChanges(changes: any) {
		this.keys = Object.keys( this.formGroup.controls );
		console.log( changes );
	}
}
