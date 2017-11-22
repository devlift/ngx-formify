import { ValidatorFn } from '@angular/forms';
import { FormControlType } from '../enums/form-control.enum';
;
export var FormFileControl = function (options) {
    var o = options || {};
    return function (target, property) {
        Object.defineProperties(target, (_a = {},
            _a[property + "-form-metadata"] = {
                value: {
                    name: property,
                    type: FormControlType.File,
                    order: o.order
                },
                enumerable: false,
                configurable: false
            },
            _a));
        var _a;
    };
};
//# sourceMappingURL=form-file-control.decorator.js.map