# ngx-formify

Decorator-driven form creation for Angular.

This package is under heavy development and should be considered non-functional.

# Usage

## `@FormControl`

`@FormControl(type: FormControlType.Input | FormControlType.TextArea | FormControlType.Checkbox | FormControlType.Password, options?: FormControlDecoratorOptions)`

Make the decorator's target a form control.

- `type`: Type of form control
- `options`: Options for rendering the field
	- `order?: number`: Order in form group. If none of the members of the class have this, the form is laid out in the order of member declarations.
	- `placeholder?: string`: The form's placeholder, or label in the case of `FormControlType.Checkbox`.
	- `validators?: ValidatorFn[]`: Array of validators for field
	- `defaultValue?: any`: The default value for the field

## `@FormSelectControl`

`@FormSelectControl(type: FormControlType.Select | FormControlType.Radio, values: SelectOption[], options: FormSelectDecoratorOptions)`

Same as `@FormControl`, but with multiple predefined options.

- `type`: Type of form select control
- `values`: Possible values for select control. A SelectOption is an object with keys `value` and `label` defined.
- `options`: Options for rendering the field
	- `order?: number`: Order in form group, as above.
	- `validators?: ValidatorFn[]`: Array of validators for the field
	- `defaultValue?: any`: Default value for select control.

## `FormGroupService`

Service to create FormGroup from a class. The FormGroup's keys are the names of the properties annotated with `@FormControl` or `@FormSelectControl`.

Usage: `FormGroupService.build( class ): FormGroup`

## `formify`

Directive to render a generated FormGroup.

Usage: `<formify [formGroup]="form" [formClass]="class" [controlClass]="class" [controlInnerClass]="class"></formify>`

- `formGroup`: FormGroup to render
- `formClass`: Class for outermost tag
- `controlClass`: Class for control (`input`, `textarea` etc) container
- `controlInnerClass`: Class for control itself

# Example

```
class TestForm {
	@FormControl(FormControlType.Input, {order: 1, placeholder: 'Enter a name'})
	public name: string = "";

	@FormSelectControl(FormControlType.Select, [{ label: 'Option 1', value: 1 }, { label: 'Option 2', value: 2 }], {order: 2, defaultValue: 1})
	public option: number = 1;
}

...

const fgService = new FormGroupService();
const fg = fgService.build( TestForm );

// fg is a FormGroup with two entries for each of the 

...

<formify [formGroup]="fg"></formify>

// Should render two inputs - one an input text entry, one a select dropdown with two options
```

# Contributing

1. `npm test`
2. `npm run-script build`
3. Copy `package.dist.json` to `dist/package.json`, copy `README.md` to `dist/README.md`
