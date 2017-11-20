import { FormControlComponent } from './components/form-control/form-control.component';
import { FormControl } from './decorators/form-control.decorator';
import { FormComponent } from './components/form/form.component';
import { FormGroupService } from './services/form-group.service';
import { FormControlType } from './enums/form-control.enum';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { async } from '@angular/core/testing';

import 'jasmine';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';

class TestModel {
	@FormControl(FormControlType.Input, "An Input")
	public date: string = "";
}

describe( 'formify', () => {
	let fixture: ComponentFixture<FormComponent>;
	let comp: FormComponent;
	let de: DebugElement;
	let el: HTMLElement;

	let fg = new FormGroupService();

	TestBed.initTestEnvironment( BrowserDynamicTestingModule, platformBrowserDynamicTesting() );

	beforeEach((done) => {
		TestBed
		.configureTestingModule( {
			imports: [
				CommonModule,
				FormsModule,
				ReactiveFormsModule
			],
			declarations: [ FormComponent, FormControlComponent ]
		} )
		.compileComponents()
		.then( () => {
			fixture = TestBed.createComponent( FormComponent );

			comp = fixture.componentInstance;
			comp.formGroup = fg.build( TestModel );

			de = fixture.debugElement.query( By.css( '.formify' ) );
			el = de.nativeElement;

			done();
		} );
	});

	it( 'should create a form control component', () => {
		expect( comp ).toBeDefined();
	} );
	
	it( 'should have a form control', () => {
		fixture.detectChanges();
		expect( el.firstChild ).toBeDefined();
	} );
});