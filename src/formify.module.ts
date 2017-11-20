import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormControlComponent } from './components/form-control/form-control.component';
import { FormComponent } from './components/form/form.component';
import { FormGroupService } from './services/form-group.service';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [
		FormControlComponent,
		FormComponent
	],
	providers: [
		FormGroupService
	],
	exports: [
		FormControlComponent,
		FormComponent
	]
})
export class FormifyModule { }
