import React from "react";
import { ClassName, ClassNameBuilder } from "../Utils/ClassNameBuilder";
import { Theme } from "../Theme/Theme";
import { WithFieldProps } from "wbox-forms/dist/Field/HOCs";
import { FieldProps } from "wbox-forms";
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
export declare function getFieldTestId(name: string): string;
export declare function withTailwindField<TProps extends FieldProps & WithFieldProps>(Component: React.ComponentType<TProps & WithTailwindFieldProps>, type?: string, defaultProps?: Partial<FieldProps>, classNameBuilder?: ClassNameBuilder): (props: Omit<Omit<TProps, "tailwindOptions"> & WrappedFieldProps, keyof WithFieldProps>) => JSX.Element | null;
export {};
