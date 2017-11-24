import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormControlComponent } from './src/components/form-control/form-control.component';
import { FormComponent } from './src/components/form/form.component';
import { FormGroupService } from './src/services/form-group.service';

// Components
export * from './src/components/form-control/form-control.component';
export * from './src/components/form/form.component';

// Services
export * from './src/services/form-group.service';

// Decorators
export * from './src/decorators/form-control.decorator';
export * from './src/decorators/form-select-control.decorator';
export * from './src/decorators/form-file-control.decorator';

// Types
export * from './src/enums/form-control.enum';

// Models
export * from './src/models/file-extended.model';
export * from './src/models/file-emission.model';
export * from './src/models/select-option.model';
export * from './src/models/form-decorator-data.model';
export * from './src/models/form-control-extended.model';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
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
export class FormifyModule { }
