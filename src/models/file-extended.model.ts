export default interface FileExtended {
	lastModifiedDate: Date;
	name: string;
	size: number;
	type: string;
	data?: ArrayBuffer;
}