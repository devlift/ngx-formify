import { Component, Input, Output, EventEmitter } from '@angular/core';
import FormControlExtended from '../../models/form-control-extended.model';
import FileExtended from '../../models/file-extended.model';
var FormControlComponent = /** @class */ (function () {
    function FormControlComponent() {
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
        ;
    };
    return FormControlComponent;
}());
export { FormControlComponent };
//# sourceMappingURL=form-control.component.js.map