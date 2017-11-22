import { ValidatorFn } from '@angular/forms';
import { FormControlType } from '../enums/form-control.enum';
;
export var FormControl = function (type, options) {
    var o = options || {};
    return function (target, property) {
        Object.defineProperties(target, (_a = {},
            _a[property + "-form-metadata"] = {
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
            },
            _a));
        var _a;
    };
};
//# sourceMappingURL=form-control.decorator.js.map