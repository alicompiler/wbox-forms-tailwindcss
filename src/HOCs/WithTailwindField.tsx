import {FieldProps, withField} from "wbox-forms";
import React from "react";
import {ClassName, ClassNameBuilder, DefaultClassNameBuilder} from "../Utils/ClassNameBuilder";
import {Theme} from "../Theme/Theme";
import {useTheme} from "../Theme/ThemeContext";
import {WithFieldProps} from "wbox-forms/dist/Field/HOCs";
import {defaultInitializeFunc} from "wbox-forms/dist/Field/Helpers";

export interface WithTailwindFieldProps {
    tailwindOptions: TailwindFieldOptions;
}

export interface WrappedFieldProps {
    className?: ClassName;
    inputProps?: any;
}

interface TailwindFieldOptions {
    classNameBuilder: ClassNameBuilder;
    theme: Theme;
    inputProps: any;
    placeholder?: string;
    dataTestId: string;
    type: string;
}

export function getFieldTestId(name: string) {
    return `wbox-field-${name}`;
}

export function withTailwindField<TProps extends FieldProps & WithFieldProps>(
    Component: React.ComponentType<TProps & WithTailwindFieldProps>,
    type: string = "text",
    defaultProps: Partial<FieldProps> = {},
    classNameBuilder: ClassNameBuilder = new DefaultClassNameBuilder(),
) {
    type ReceivedProps = Omit<TProps, keyof WithTailwindFieldProps> & WrappedFieldProps;
    const FieldComponent = (props: ReceivedProps) => {
        const theme = useTheme();
        const options: TailwindFieldOptions = {
            dataTestId: getFieldTestId(props.name),
            inputProps: props.inputProps ?? {},
            theme: theme as any,
            classNameBuilder: classNameBuilder,
            type: type
        };
        return <Component {...(props as TProps)} tailwindOptions={options}/>
    }
    return withField(FieldComponent, defaultInitializeFunc, defaultProps);
}