import { FormControlComponent } from './components/form-control/form-control.component';
import { FormControl } from './decorators/form-control.decorator';
import { FormSelectControl } from './decorators/form-select-control.decorator';
import { FormFileControl } from './decorators/form-file-control.decorator';
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
	@FormControl(FormControlType.Input, {
		order: 3,
		placeholder: "An Input"
	})
	public date: string = "";

	@FormControl(FormControlType.TextArea, {
		order: 1,
		placeholder: "Enter comments here...", 
		defaultValue: 'default value'
	})
	public comment: string = "";
	
	@FormSelectControl(FormControlType.Select, [
		{label: 'Banana', data: 1},
		{label: 'Apple', data: 2},
		{label: 'Orange', data: 3}
	], {
		order: 2,
		defaultValue: 3
	} )
	public fruit: number = 3;
	
	@FormSelectControl(FormControlType.Radio, [
		{label: 'A', data: 1},
		{label: 'B', data: 2},
		{label: 'C', data: 3},
		{label: 'D', data: 4}
	], {
		order: 0,
		defaultValue: 2
	} )
	public grade: number = 2;
	
	@FormControl(FormControlType.Checkbox, {
		order: 4,
		placeholder: "A checkbox to my left",
		defaultValue: true
	} )
	public left: boolean = true;
	
	@FormControl(FormControlType.Password, {
		order: 5,
		placeholder: "Don't show anyone!"
	} )
	public pass: string = "";
	
	@FormFileControl({
		order: 6
	} )
	public file: ArrayBuffer = new ArrayBuffer(0);
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

	it( 'should have the correct number of form controls', () => {
		fixture.detectChanges();
		expect( el.querySelectorAll( 'formify-control' ).length ).toEqual( 7 );
	} );

	it( 'should have the correct order of form controls', () => {
		fixture.detectChanges();
		expect( Object.keys( comp.formGroup.controls ) ).toEqual( ['grade', 'comment', 'fruit', 'date', 'left', 'pass', 'file'] );
	} );

	it( 'should have an input form control', () => {
		fixture.detectChanges();

		let control = el.querySelectorAll( 'input' )
		expect( control.length ).toBeGreaterThan( 0 );
	} );

	it( 'should have an input form control with placeholder', () => {
		fixture.detectChanges();

		let control = el.querySelectorAll( 'input[type=text]' )
		expect( control.length ).toBeGreaterThan( 0 );

		expect( (<HTMLInputElement>control[0]).placeholder ).toEqual( 'An Input' );
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

	it( 'should have a radio form control', () => {
		fixture.detectChanges();

		let control = el.querySelectorAll( 'input[type=radio]' )
		expect( control.length ).toBeGreaterThan( 0 );
	} );

	it( 'should have a checkbox form control', () => {
		fixture.detectChanges();

		let control = el.querySelectorAll( 'input[type=checkbox]' )
		expect( control.length ).toBeGreaterThan( 0 );
	} );

	it( 'should have a password form control with placeholder', () => {
		fixture.detectChanges();

		let control = el.querySelectorAll( 'input[type=password]' )
		expect( control.length ).toBeGreaterThan( 0 );

		expect( (<HTMLInputElement>control[0]).placeholder ).toEqual( "Don't show anyone!" );
	} );

	it( 'should have a file form control', () => {
		fixture.detectChanges();

		let control = el.querySelectorAll( 'input[type=file]' )
		expect( control.length ).toBeGreaterThan( 0 );
	} );

	it( 'should apply changes successfully', () => {
		fixture.detectChanges();

		comp.formGroup.setValue( {
			date: 'hello',
			comment: 'a comment',
			fruit: 2,
			grade: 4,
			left: false,
			pass: 'test123',
			file: ''
		} );

		fixture.detectChanges();

		expect( comp.formGroup.get( 'date' ).value ).toEqual( 'hello' );
		expect( comp.formGroup.get( 'comment' ).value ).toEqual( 'a comment' );
		expect( comp.formGroup.get( 'fruit' ).value ).toEqual( 2 );
		expect( comp.formGroup.get( 'grade' ).value ).toEqual( 4 );
		expect( comp.formGroup.get( 'left' ).value ).toEqual( false );
		expect( comp.formGroup.get( 'pass' ).value ).toEqual( 'test123' );
		// todo: file
	} );

	it( 'should respond to changes', () => {
		fixture.detectChanges();

		comp.formGroup.setValue( {
			date: 'hello',
			comment: 'a comment',
			fruit: 2,
			grade: 1,
			left: false,
			pass: 'abcd123',
			file: ''
		} );

		fixture.detectChanges();

		expect( (<HTMLInputElement>el.querySelectorAll( 'input[type=text]' )[0]).value ).toEqual( 'hello' );
		expect( el.querySelectorAll( 'textarea' )[0].value ).toEqual( 'a comment' );
		expect( parseInt( el.querySelectorAll( 'select' )[0].value ) ).toEqual( 2 );
		expect( (<HTMLInputElement>el.querySelectorAll( 'input[type=radio]' )[0]).value ).toEqual( 'on' );
		expect( (<HTMLInputElement>el.querySelectorAll( 'input[type=checkbox]' )[0]).checked ).toEqual( false );
		expect( (<HTMLInputElement>el.querySelectorAll( 'input[type=password]' )[0]).value ).toEqual( 'abcd123' );
		// todo: file
	} );
});