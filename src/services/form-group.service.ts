import {Injectable} from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {FormControlExtended} from '../models/form-control-extended.model';

@Injectable()
export class FormGroupService {
	public build( model: any ) {
		let form: FormGroup = new FormGroup( {} );

		let instance: any;
		if( model ) {
			instance = new model();
		}

		if( instance ) {
			for( const key in instance ) {
				if( (<any>instance)[key + "-form-metadata"] ) {
					const data: any = (<any>instance)[key + "-form-metadata"];
					let control = new FormControlExtended();
					
					control.setValue( data.defaultValue || '' );
					control.setValidators( data.validators || [] );

					control.placeholder = data.placeholder || '';
					control.controlType = data.type;
					control.options = data.options;
					
					form.addControl( key, control );
				}
			}
		}

		return form;
	}
}