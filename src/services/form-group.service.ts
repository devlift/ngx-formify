import {Injectable} from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {FormControlExtended, FormDecoratorData} from '../models/form-control-extended.model';

@Injectable()
export class FormGroupService {
	public build( model: any ) {
		let form: FormGroup = new FormGroup( {} );

		let instance: any;
		if( model ) {
			instance = new model();
		}

		if( instance ) {
			let data: FormDecoratorData[] = [];
			let haveNoOrder = true;
			for( const key in instance ) {
				let d = (<any>instance)[key + "-form-metadata"];
				if( d ) {
					data.push( d );
					if( d.order ) {
						haveNoOrder = false;
					}
				}
			}
			
			if( !haveNoOrder ) {
				data = data.sort( (a, b) => ( a.order !== undefined ? a.order : Number.MAX_VALUE ) - ( b.order !== undefined ? b.order : Number.MAX_VALUE ) );
			}

			data.forEach( (datum: FormDecoratorData) => {
				let control = new FormControlExtended();
				
				control.setValue( datum.defaultValue || '' );
				control.setValidators( datum.validators || [] );

				control.placeholder = datum.placeholder || '';
				control.controlType = datum.type;
				control.options = datum.options;
				
				form.addControl( datum.name, control );
			} );
		}

		return form;
	}
}