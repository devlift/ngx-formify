export interface FormFileDecoratorOptions {
    order?: number;
}
export declare const FormFileControl: (options?: FormFileDecoratorOptions | undefined) => (target: Object, property: string) => void;
