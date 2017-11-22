import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControlExtended } from '../../models/form-control-extended.model';
import { FileExtended } from '../../models/file-extended.model';

@Component({
	selector: 'formify-control',
	templateUrl: './form-control.component.html',
	moduleId: module.id
})
export class FormControlComponent {
	@Input() formControl: FormControlExtended;
	@Input() controlClass: string = "";
	@Input() controlInnerClass: string = "";

	@Output() onFileSelected = new EventEmitter<FileExtended[]>();

	constructor() {}

	fileSelected( files: FileList ) {
		let f: FileExtended[] = [];
		let count = 0;

		for( let i = 0; i < files.length; i++ ) {
			let file = files[i];

			let newFile: FileExtended = {
				lastModifiedDate: file.lastModifiedDate,
				name: file.name,
				size: file.size,
				type: file.type
			};

			const fr = new FileReader();
			fr.addEventListener( 'load', () => {
				newFile.data = <ArrayBuffer>fr.result;
				f.push( newFile );
				count++;

				if( count == files.length ) {
					this.onFileSelected.emit( f );
				}
			} );
			fr.readAsArrayBuffer( file );
		};
	}
}
