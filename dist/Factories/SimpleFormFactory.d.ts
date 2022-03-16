import { FieldProps, FieldTypeMap, FormConfiguration } from "wbox-forms";
import React from "react";
import { ClassName } from "../Utils/ClassNameBuilder";
import { ExtraOptionsBase, FormFactoryBase } from "./FormFactoryBase";
declare type FieldConfig = FieldProps & {
    label: string;
    labelClassName?: ClassName;
};
export declare class SimpleFormFactory extends FormFactoryBase<ExtraOptionsBase> {
    protected renderField(name: string, field: React.ReactElement, fieldConfig: FieldConfig, configuration: FormConfiguration<FieldTypeMap, FieldConfig, ExtraOptionsBase>): React.ReactElement;
}
export {};
