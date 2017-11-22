import { ValidatorFn } from '@angular/forms';
import { FormControlType } from '../enums/form-control.enum';
import SelectOption from '../models/select-option.model';
;
export var FormSelectControl = function (type, values, options) {
    return function (target, property) {
        var o = options || {};
        Object.defineProperties(target, (_a = {},
            _a[property + "-form-metadata"] = {
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
            },
            _a));
        var _a;
    };
};
//# sourceMappingURL=form-select-control.decorator.js.map