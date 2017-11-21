export interface FileExtended {
	lastModifiedDate: Date;
	name: string;
	size: number;
	type: string;
	data?: ArrayBuffer;
}