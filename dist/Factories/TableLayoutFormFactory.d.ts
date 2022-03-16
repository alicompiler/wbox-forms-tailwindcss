import { FieldProps, FieldTypeMap, FormConfiguration } from "wbox-forms";
import { ClassName } from "../Utils/ClassNameBuilder";
import React from "react";
import { ExtraOptionsBase, FormFactoryBase } from "./FormFactoryBase";
declare type FieldConfig = FieldProps & {
    label: string;
    labelClassName?: ClassName;
};
export declare type LabelAlignment = "center" | "end" | "start";
export interface TableLayoutExtraOptions extends ExtraOptionsBase {
    order?: string[];
    showDivider?: boolean;
    spaceWidth?: number;
    labelAlignment?: LabelAlignment;
    labelWidth: number;
}
export declare class TableLayoutFormFactory extends FormFactoryBase<TableLayoutExtraOptions> {
    protected renderField(name: string, field: React.ReactElement, fieldConfig: FieldConfig, configuration: FormConfiguration<FieldTypeMap, FieldConfig, TableLayoutExtraOptions>, index: number, fieldsCount: number): React.ReactElement;
}
export {};
