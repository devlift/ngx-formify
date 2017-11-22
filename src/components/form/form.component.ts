import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControlExtended } from '../../models/form-control-extended.model';
import { FileExtended } from '../../models/file-extended.model';

export interface FileEmission {
	files: FileExtended[];
	formControlName: string;
}

@Component({
	selector: 'formify',
	templateUrl: './form.component.html',
	moduleId: module.id
})
export class FormComponent implements OnChanges, OnInit {
	@Input() formGroup: FormGroup;
	@Input() formClass: string = "";
	@Input() controlClass: string = "";
	@Input() controlInnerClass: string = "";
	
	@Output() onFileSelected = new EventEmitter<FileEmission>();

	private keys: string[] = [];
	
	constructor() {}

	ngOnInit() {
		this.keys = Object.keys( this.formGroup.controls );
	}

	ngOnChanges(changes: any) {
		this.keys = Object.keys( this.formGroup.controls );
		console.log( changes );
	}

	fileSelected( files: FileExtended[], formControlName: string ) {
		this.onFileSelected.emit( { files: files, formControlName: formControlName } );
	}
}
