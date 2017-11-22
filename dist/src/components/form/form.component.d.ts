import { EventEmitter, OnInit, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import FileExtended from '../../models/file-extended.model';
import FileEmission from '../../models/file-emission.model';
export declare class FormComponent implements OnChanges, OnInit {
    formGroup: FormGroup;
    formClass: string;
    controlClass: string;
    controlInnerClass: string;
    onFileSelected: EventEmitter<FileEmission>;
    keys: string[];
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    fileSelected(files: FileExtended[], formControlName: string): void;
}
