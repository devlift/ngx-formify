import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import FormControlExtended from '../models/form-control-extended.model';
import FormDecoratorData from '../models/form-decorator-data.model';
var FormGroupService = /** @class */ (function () {
    function FormGroupService() {
    }
    FormGroupService.prototype.build = function (model) {
        var form = new FormGroup({});
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
    return FormGroupService;
}());
export { FormGroupService };
//# sourceMappingURL=form-group.service.js.map