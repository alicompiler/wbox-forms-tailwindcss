import {FormFactory} from "wbox-forms/dist/Factory/FormFactory";
import {Button, FieldProps, FieldTypeMap, Form, FormConfiguration} from "wbox-forms";
import {ClassName, ClassNameBuilder, DefaultClassNameBuilder} from "../Utils/ClassNameBuilder";
import {fieldsMap} from "./FieldsMap";
import React, {Fragment, useCallback} from "react";
import {useTheme} from "../Theme/ThemeContext";
import {SimpleFieldWrapper} from "./Components/SimpleFieldWrapper";

type FieldConfig = FieldProps & { label: string, labelClassName?: ClassName };

type ButtonConfig = {
    text: string;
    className?: ClassName;
    position?: "start" | "end" | "center" | "fullwidth"
}
type ExtraConfig = {
    classNameBuilder?: ClassNameBuilder;
    button: ButtonConfig;
    order? : string[];
}

export class TableLayoutFormFactory implements FormFactory<FormConfiguration<FieldTypeMap, FieldConfig, ExtraConfig>> {


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

    /*
        fields  = username,password,email,code
        order   = password,code,email,username


        check all items in order are legit
        append all missing items in order to the end
     */

    protected renderFields(configuration: FormConfiguration<FieldTypeMap, FieldConfig, ExtraConfig>): React.ReactElement | React.ReactElement[] {
        const fields = configuration.fieldConfig;
        const keys = this.getKeysInOrder(Object.keys(fields) , configuration.extraOptions?.order);
        return keys.map((key, index) => {
            const fieldProps = fields[key].fieldConfig;
            const type = fields[key].type;
            const classNameBuilder: ClassNameBuilder = configuration.extraOptions?.classNameBuilder ?? new DefaultClassNameBuilder();
            const theme = useTheme();
            const labelClassName = classNameBuilder.build(fieldProps.labelClassName, theme.label);
            const isLastField = index === keys.length - 1;
            return <Fragment key={index}>
                <SimpleFieldWrapper field={this.getFieldElement(type, fieldProps)}
                                    labelClassName={labelClassName}
                                    label={fieldProps.label}/>
                {
                    !isLastField && <hr />
                }
            </Fragment>;
        });
    }

    protected getKeysInOrder(keys : string[] , order?:string[]) : string[] {
        if(!order){
            return keys;
        }
        const result : string[] = [];
        for (const item of order) {
            if (result.includes(item)){
                throw new Error(`duplicated entry in order array(${item})`);
            }
            if (!keys.includes(item)) {
                throw new Error(`not found field(${item}), but exist in order array`);
            }
            result.push(item);
        }
        for (const item of keys) {
            if (result.includes(item)){
                continue;
            }
            result.push(item);
        }
        return result;
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
                const buttonClassName = classNameBuilder.build(configuration.extraOptions!.button.className, theme.button);
                const additionalClassName = position === "fullwidth" ? "w-full" : "";
                return <button onClick={onClick} className={`${buttonClassName} ${additionalClassName}`}>
                    {configuration.extraOptions!.button.text}
                </button>
            }}/>
        </div>;
    }

}