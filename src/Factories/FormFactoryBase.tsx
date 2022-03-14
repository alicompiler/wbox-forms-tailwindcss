import {FormFactory} from "wbox-forms/dist/Factory/FormFactory";
import {FieldProps, FieldTypeMap, Form, FormConfiguration} from "wbox-forms";
import {ClassName, ClassNameBuilder} from "../Utils/ClassNameBuilder";
import {fieldsMap} from "./FieldsMap";
import React, {Fragment, ReactElement} from "react";
import {ButtonPosition, LayoutButton} from "./Components/LayoutButton";

export type FieldConfig = FieldProps & { label: string, labelClassName?: ClassName };

export interface ButtonOptions {
    text: string;
    position?: ButtonPosition;
    className?: ClassName;
}

export interface ExtraOptionsBase {
    button: ButtonOptions;
    classNameBuilder?: ClassNameBuilder;
}

export abstract class FormFactoryBase<TExtraOptions extends ExtraOptionsBase> implements FormFactory<FormConfiguration<FieldTypeMap, FieldConfig, TExtraOptions>> {

    protected readonly fieldTypeMap: FieldTypeMap;

    public constructor() {
        this.fieldTypeMap = fieldsMap;
    }


    create(configuration: FormConfiguration<FieldTypeMap, FieldConfig, TExtraOptions>): React.ReactElement {
        const formProps = configuration.formConfig;
        return <Form {...formProps}>
            {
                this.renderFields(configuration)
            }
            {
                this.renderButton(configuration)
            }
        </Form>;
    }


    protected renderFields(configuration: FormConfiguration<FieldTypeMap, FieldConfig, TExtraOptions>): React.ReactElement | React.ReactElement[] {
        const fields = configuration.fieldConfig;
        const keys = Object.keys(fields);
        return keys.map((key, index) => {
            const fieldConfig = fields[key].fieldConfig;
            const type = fields[key].type;
            const field = this.getFieldElement(type, fieldConfig);
            return <Fragment key={index}>
                {
                    this.renderField(key, field, fieldConfig, configuration, index, keys.length)
                }
            </Fragment>;
        });
    }

    protected abstract renderField(name: string, field: ReactElement, fieldConfig: FieldConfig, configuration: FormConfiguration<FieldTypeMap, FieldConfig, TExtraOptions>, index: number, fieldsCount: number): ReactElement;

    protected getFieldElement(type: keyof FieldTypeMap, fieldProps: FieldConfig) {
        const FieldComponent = this.fieldTypeMap[type];
        return <FieldComponent key={fieldProps.name} {...fieldProps} />;
    }

    protected renderButton(configuration: FormConfiguration<FieldTypeMap, FieldConfig, TExtraOptions>): any {
        return <LayoutButton position={configuration.extraOptions!.button.position}
                             text={configuration.extraOptions!.button.text}
                             className={configuration.extraOptions!.button.className}
                             classNameBuilder={configuration.extraOptions!.classNameBuilder}/>
    }

}