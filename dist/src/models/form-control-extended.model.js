var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { FormControl } from '@angular/forms';
import { FormControlType } from '../enums/form-control.enum';
import SelectOption from './select-option.model';
var FormControlExtended = /** @class */ (function (_super) {
    __extends(FormControlExtended, _super);
    function FormControlExtended() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FormControlExtended;
}(FormControl));
export default FormControlExtended;
//# sourceMappingURL=form-control-extended.model.js.map