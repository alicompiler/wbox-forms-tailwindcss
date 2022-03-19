import { FormFactory } from "wbox-forms/dist/Factory/FormFactory";
import { FieldProps, FieldTypeMap, FormConfiguration } from "wbox-forms";
import { ClassName, ClassNameBuilder } from "../Utils/ClassNameBuilder";
import React, { ReactElement } from "react";
import { ButtonPosition } from "./Components/LayoutButton";
export declare type FieldConfig = FieldProps & {
    label: string;
    labelClassName?: ClassName;
};
export interface ExtraOptionsBase {
    button: ButtonOptions;
    classNameBuilder?: ClassNameBuilder;
}
export interface ButtonOptions {
    text: string;
    position?: ButtonPosition;
    className?: ClassName;
}
export declare abstract class FormFactoryBase<TExtraOptions extends ExtraOptionsBase> implements FormFactory<FormConfiguration<FieldConfig, TExtraOptions>> {
    protected readonly fieldTypeMap: FieldTypeMap;
    constructor();
    create(configuration: FormConfiguration<FieldConfig, TExtraOptions>): React.ReactElement;
    protected renderFields(configuration: FormConfiguration<FieldConfig, TExtraOptions>): React.ReactElement | React.ReactElement[];
    protected abstract renderField(name: string, field: ReactElement, fieldConfig: FieldConfig, configuration: FormConfiguration<FieldConfig, TExtraOptions>, index: number, fieldsCount: number): ReactElement;
    protected getFieldElement(type: keyof FieldTypeMap, fieldProps: FieldConfig): JSX.Element;
    protected renderButton(configuration: FormConfiguration<FieldConfig, TExtraOptions>): any;
}
