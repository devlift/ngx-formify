import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import FormControlExtended from '../../models/form-control-extended.model';
import FileExtended from '../../models/file-extended.model';
import FileEmission from '../../models/file-emission.model';
var FormComponent = /** @class */ (function () {
    function FormComponent() {
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
    return FormComponent;
}());
export { FormComponent };
//# sourceMappingURL=form.component.js.map