import { EventEmitter } from '@angular/core';
import FormControlExtended from '../../models/form-control-extended.model';
import FileExtended from '../../models/file-extended.model';
export declare class FormControlComponent {
    formControl: FormControlExtended;
    controlClass: string;
    controlInnerClass: string;
    onFileSelected: EventEmitter<FileExtended[]>;
    constructor();
    fileSelected(files: FileList): void;
}
