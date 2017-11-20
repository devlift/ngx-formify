import { FormControlComponent } from './components/form-control/form-control.component';
import { FormControl } from './decorators/form-control.decorator';
import { FormSelectControl } from './decorators/form-select-control.decorator';
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

	@FormControl(FormControlType.TextArea, "Enter comments here...", [], 'default value')
	public comment: string = "";
	
	@FormSelectControl([
		{label: 'Banana', data: 1},
		{label: 'Apple', data: 2},
		{label: 'Orange', data: 3}
	], 3)
	public fruit: number = 3;
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
		expect( el.querySelectorAll( 'formify-control' ).length ).toBeGreaterThan( 0 );
	} );

	it( 'should have one form control named date', () => {
		fixture.detectChanges();
		expect( Object.keys( comp.formGroup.controls ) ).toEqual( ['date', 'comment', 'fruit'] );
		expect( el.querySelectorAll( 'formify-control' ).length ).toEqual( 3 );
	} );

	it( 'should have an input form control', () => {
		fixture.detectChanges();

		let control = el.querySelectorAll( 'input' )
		expect( control.length ).toBeGreaterThan( 0 );
	} );

	it( 'should have an input form control with placeholder', () => {
		fixture.detectChanges();

		let control = el.querySelectorAll( 'input' )
		expect( control.length ).toBeGreaterThan( 0 );

		expect( control[0].type ).toEqual( 'text' );
		expect( control[0].placeholder ).toEqual( 'An Input' );
	} );

	it( 'should have a textarea form control with initial value', () => {
		fixture.detectChanges();

		let control = el.querySelectorAll( 'textarea' );
		expect( control.length ).toBeGreaterThan( 0 );

		expect( control[0].value ).toEqual( 'default value' );
	} );

	it( 'should have a select form control', () => {
		fixture.detectChanges();

		let control = el.querySelectorAll( 'select' )
		expect( control.length ).toBeGreaterThan( 0 );
	} );

	it( 'should apply changes successfully', () => {
		fixture.detectChanges();

		comp.formGroup.setValue( {
			date: 'hello',
			comment: 'a comment',
			fruit: 2
		} );

		fixture.detectChanges();

		expect( comp.formGroup.get( 'date' ).value ).toEqual( 'hello' );
		expect( comp.formGroup.get( 'comment' ).value ).toEqual( 'a comment' );
		expect( comp.formGroup.get( 'fruit' ).value ).toEqual( 2 );
	} );

	it( 'should respond to changes', () => {
		fixture.detectChanges();

		comp.formGroup.setValue( {
			date: 'hello',
			comment: 'a comment',
			fruit: 2
		} );

		fixture.detectChanges();

		expect( el.querySelectorAll( 'input' )[0].value ).toEqual( 'hello' );
		expect( el.querySelectorAll( 'textarea' )[0].value ).toEqual( 'a comment' );
		expect( parseInt( el.querySelectorAll( 'select' )[0].value ) ).toEqual( 2 );
	} );
});