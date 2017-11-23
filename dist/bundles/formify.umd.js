(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
	(factory((global['ngx-formify'] = {}),global.ng.core,global.ng.forms,global.ng.common));
}(this, (function (exports,core,forms,common) { 'use strict';

function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var FormControlComponent = /** @class */ (function () {
    function FormControlComponent() {
        this.controlClass = "";
        this.controlInnerClass = "";
        this.onFileSelected = new core.EventEmitter();
    }
    FormControlComponent.prototype.fileSelected = function (files) {
        var _this = this;
        var f = [];
        var count = 0;
        var _loop_1 = function (i) {
            var file = files[i];
            var newFile = {
                lastModifiedDate: file.lastModifiedDate,
                name: file.name,
                size: file.size,
                type: file.type
            };
            var fr = new FileReader();
            fr.addEventListener('load', function () {
                newFile.data = fr.result;
                f.push(newFile);
                count++;
                if (count == files.length) {
                    _this.onFileSelected.emit(f);
                }
            });
            fr.readAsArrayBuffer(file);
        };
        for (var i = 0; i < files.length; i++) {
            _loop_1(i);
        }
        
    };
    __decorate([
        core.Input()
    ], FormControlComponent.prototype, "formControl", void 0);
    __decorate([
        core.Input()
    ], FormControlComponent.prototype, "controlClass", void 0);
    __decorate([
        core.Input()
    ], FormControlComponent.prototype, "controlInnerClass", void 0);
    __decorate([
        core.Output()
    ], FormControlComponent.prototype, "onFileSelected", void 0);
    FormControlComponent = __decorate([
        core.Component({
            selector: 'formify-control',
            template: "<div class=\"formify-input\" [class]=\"controlClass\" [ngSwitch]=\"formControl.controlType\">\n\t<input [class]=\"controlInnerClass\" *ngSwitchCase=\"'Input'\" [placeholder]=\"formControl.placeholder\" [formControl]=\"formControl\" type=\"text\" />\n\t<textarea [class]=\"controlInnerClass\" *ngSwitchCase=\"'TextArea'\" [placeholder]=\"formControl.placeholder\" [formControl]=\"formControl\"></textarea>\n\t<select [class]=\"controlInnerClass\" *ngSwitchCase=\"'Select'\" [formControl]=\"formControl\">\n\t\t<option *ngFor=\"let option of formControl.options\" [value]=\"option.data\">{{option.label}}</option>\n\t</select>\n\t<div *ngSwitchCase=\"'Radio'\">\n\t\t<div *ngFor=\"let option of formControl.options\" class=\"formify-radio-line\">\n\t\t\t<input [class]=\"controlInnerClass\" [value]=\"option.data\" [formControl]=\"formControl\" type=\"radio\" /><span class=\"formify-radio-label\">{{option.label}}</span>\n\t\t</div>\n\t</div>\n\t<div class=\"formify-checkbox-line\" *ngSwitchCase=\"'Checkbox'\">\n\t\t<input [class]=\"controlInnerClass\" [formControl]=\"formControl\" type=\"checkbox\" /><span class=\"formify-checkbox-label\">{{formControl.placeholder}}</span>\n\t</div>\n\t<input [class]=\"controlInnerClass\" *ngSwitchCase=\"'Password'\" [placeholder]=\"formControl.placeholder\" [formControl]=\"formControl\" type=\"password\" />\n\t<input [class]=\"controlInnerClass\" *ngSwitchCase=\"'File'\" [formControl]=\"formControl\" type=\"file\" (change)=\"fileSelected( $event.target.files )\" />\n</div>",
        })
    ], FormControlComponent);
    return FormControlComponent;
}());

var FormComponent = /** @class */ (function () {
    function FormComponent() {
        this.formClass = "";
        this.controlClass = "";
        this.controlInnerClass = "";
        this.onFileSelected = new core.EventEmitter();
        this.keys = [];
    }
    FormComponent.prototype.ngOnInit = function () {
        this.keys = Object.keys(this.formGroup.controls);
    };
    FormComponent.prototype.ngOnChanges = function (changes) {
        this.keys = Object.keys(this.formGroup.controls);
        console.log(changes);
    };
    FormComponent.prototype.fileSelected = function (files, formControlName) {
        this.onFileSelected.emit({ files: files, formControlName: formControlName });
    };
    __decorate([
        core.Input()
    ], FormComponent.prototype, "formGroup", void 0);
    __decorate([
        core.Input()
    ], FormComponent.prototype, "formClass", void 0);
    __decorate([
        core.Input()
    ], FormComponent.prototype, "controlClass", void 0);
    __decorate([
        core.Input()
    ], FormComponent.prototype, "controlInnerClass", void 0);
    __decorate([
        core.Output()
    ], FormComponent.prototype, "onFileSelected", void 0);
    FormComponent = __decorate([
        core.Component({
            selector: 'formify',
            template: "<div class=\"formify\" [class]=\"formClass\">\n\t<formify-control *ngFor=\"let control of keys\" [formControl]=\"formGroup.controls[control]\" [controlClass]=\"controlClass\" [controlInnerClass]=\"controlInnerClass\" (onFileSelected)=\"fileSelected( $event, control )\" ngDefaultControl></formify-control>\n</div>\n",
        })
    ], FormComponent);
    return FormComponent;
}());

var FormControlExtended = /** @class */ (function (_super) {
    __extends(FormControlExtended, _super);
    function FormControlExtended() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FormControlExtended;
}(forms.FormControl));

var FormGroupService = /** @class */ (function () {
    function FormGroupService() {
    }
    FormGroupService.prototype.build = function (model) {
        var form = new forms.FormGroup({});
        var instance;
        if (model) {
            instance = new model();
        }
        if (instance) {
            var data = [];
            var haveNoOrder = true;
            for (var key in instance) {
                var d = instance[key + "-form-metadata"];
                if (d) {
                    data.push(d);
                    if (d.order) {
                        haveNoOrder = false;
                    }
                }
            }
            if (!haveNoOrder) {
                data = data.sort(function (a, b) { return (a.order !== undefined ? a.order : Number.MAX_VALUE) - (b.order !== undefined ? b.order : Number.MAX_VALUE); });
            }
            data.forEach(function (datum) {
                var control = new FormControlExtended();
                control.setValue(datum.defaultValue || '');
                control.setValidators(datum.validators || []);
                control.placeholder = datum.placeholder || '';
                control.controlType = datum.type;
                control.options = datum.options;
                form.addControl(datum.name, control);
            });
        }
        return form;
    };
    FormGroupService = __decorate([
        core.Injectable()
    ], FormGroupService);
    return FormGroupService;
}());

var FormifyModule = /** @class */ (function () {
    function FormifyModule() {
    }
    FormifyModule = __decorate([
        core.NgModule({
            imports: [
                common.CommonModule,
                forms.FormsModule,
                forms.ReactiveFormsModule
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
    ], FormifyModule);
    return FormifyModule;
}());

var FormControl$1 = function (type, options) {
    var o = options || {};
    return function (target, property) {
        Object.defineProperties(target, (_a = {}, _a[property + "-form-metadata"] = {
                value: {
                    name: property,
                    type: type,
                    order: o.order,
                    placeholder: o.placeholder,
                    validators: o.validators,
                    defaultValue: o.defaultValue
                },
                enumerable: false,
                configurable: false
            }, _a));
        var _a;
    };
};

var FormSelectControl = function (type, values, options) {
    return function (target, property) {
        var o = options || {};
        Object.defineProperties(target, (_a = {}, _a[property + "-form-metadata"] = {
                value: {
                    name: property,
                    type: type,
                    order: o.order,
                    validators: o.validators,
                    defaultValue: o.defaultValue,
                    options: values
                },
                enumerable: false,
                configurable: false
            }, _a));
        var _a;
    };
};

(function (FormControlType) {
    FormControlType["Input"] = "Input";
    FormControlType["TextArea"] = "TextArea";
    FormControlType["Select"] = "Select";
    FormControlType["Radio"] = "Radio";
    FormControlType["Checkbox"] = "Checkbox";
    FormControlType["Password"] = "Password";
    FormControlType["File"] = "File";
})(exports.FormControlType || (exports.FormControlType = {}));

var FormFileControl = function (options) {
    var o = options || {};
    return function (target, property) {
        Object.defineProperties(target, (_a = {}, _a[property + "-form-metadata"] = {
                value: {
                    name: property,
                    type: exports.FormControlType.File,
                    order: o.order
                },
                enumerable: false,
                configurable: false
            }, _a));
        var _a;
    };
};

/// <reference path="./node_modules/@types/node/index.d.ts" />

exports.FormifyModule = FormifyModule;
exports.FormControlComponent = FormControlComponent;
exports.FormComponent = FormComponent;
exports.FormGroupService = FormGroupService;
exports.FormControl = FormControl$1;
exports.FormSelectControl = FormSelectControl;
exports.FormFileControl = FormFileControl;

Object.defineProperty(exports, '__esModule', { value: true });

})));
