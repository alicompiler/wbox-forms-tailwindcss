import {Button, FieldProps, FieldTypeMap, Form, FormConfiguration} from "wbox-forms";
import React, {useCallback} from "react";
import {SimpleFieldWrapper} from "./Components/SimpleFieldWrapper";
import {ClassName, ClassNameBuilder, DefaultClassNameBuilder} from "../Utils/ClassNameBuilder";
import {useTheme} from "../Theme/ThemeContext";
import {FormFactory} from "wbox-forms/dist/Factory/FormFactory";
import {fieldsMap} from "./FieldsMap";

type FieldConfig = FieldProps & { label: string, labelClassName?: ClassName };

type ButtonConfig = {
    text: string;
    className?: ClassName;
    position?: "start" | "end" | "center" | "fullwidth"
}
type ExtraConfig = {
    classNameBuilder?: ClassNameBuilder;
    button: ButtonConfig;
}

export class SimpleFormFactory implements FormFactory<FormConfiguration<FieldTypeMap, FieldConfig, ExtraConfig>> {

    protected readonly fieldTypeMap: FieldTypeMap;

    public constructor() {
        this.fieldTypeMap = fieldsMap;
    }


    create(configuration: FormConfiguration<FieldTypeMap, FieldConfig, ExtraConfig>): React.ReactElement {
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

    protected renderFields(configuration: FormConfiguration<FieldTypeMap, FieldConfig, ExtraConfig>): React.ReactElement | React.ReactElement[] {
        const fields = configuration.fieldConfig;
        const keys = Object.keys(fields);
        return keys.map(key => {
            const fieldProps = fields[key].fieldConfig;
            const type = fields[key].type;
            const classNameBuilder: ClassNameBuilder = configuration.extraOptions?.classNameBuilder ?? new DefaultClassNameBuilder();
            const theme = useTheme();
            const labelClassName = classNameBuilder.build(fieldProps.labelClassName, theme.label);
            return <SimpleFieldWrapper field={this.getFieldElement(type, fieldProps)}
                                       labelClassName={labelClassName}
                                       label={fieldProps.label}/>;
        });
    }

    protected getFieldElement(type: keyof FieldTypeMap, fieldProps: FieldConfig) {
        const FieldComponent = this.fieldTypeMap[type];
        return <FieldComponent key={fieldProps.name} {...fieldProps} />;
    }

    protected renderButton(configuration: FormConfiguration<FieldTypeMap, FieldConfig, ExtraConfig>): any {
        const defaultPosition = "end";
        const position = configuration.extraOptions?.button.position ?? defaultPosition;
        const justify = position !== "fullwidth" ? `justify-${position}` : '';
        return <div className={`flex p-2 ${justify}`}>
            <Button render={serviceFactory => {
                const onClick = useCallback(async e => {
                    e.preventDefault();
                    const submit = serviceFactory.createSubmitService();
                    await submit.submit();
                }, [serviceFactory]);
                const classNameBuilder = configuration.extraOptions?.classNameBuilder ?? new DefaultClassNameBuilder();
                const theme = useTheme();
                const buttonClassName = classNameBuilder.build(configuration.extraOptions!.button.className , theme.button);
                const additionalClassName = position === "fullwidth" ? "w-full" : "";
                return <button onClick={onClick} className={`${buttonClassName} ${additionalClassName}`}>
                    {configuration.extraOptions!.button.text}
                </button>
            }}/>
        </div>;
    }
}