/// <reference types="react" />
import { WithFieldProps } from "wbox-forms/dist/Field/HOCs";
import { WithTailwindFieldProps, WrappedFieldProps } from "../HOCs/WithTailwindField";
import { FieldProps } from "wbox-forms";
export interface TailwindInputProps extends FieldProps, WrappedFieldProps {
    placeholder?: string;
}
interface Props extends TailwindInputProps, WithFieldProps, WithTailwindFieldProps {
}
export declare function TailwindInputField(props: Props): JSX.Element;
export declare const TextField: (props: Omit<Omit<Props, "tailwindOptions"> & WrappedFieldProps, keyof WithFieldProps>) => JSX.Element | null;
export declare const PasswordField: (props: Omit<Omit<Props, "tailwindOptions"> & WrappedFieldProps, keyof WithFieldProps>) => JSX.Element | null;
export declare const TimeField: (props: Omit<Omit<Props, "tailwindOptions"> & WrappedFieldProps, keyof WithFieldProps>) => JSX.Element | null;
export declare const DateField: (props: Omit<Omit<Props, "tailwindOptions"> & WrappedFieldProps, keyof WithFieldProps>) => JSX.Element | null;
export declare const DateTimeField: (props: Omit<Omit<Props, "tailwindOptions"> & WrappedFieldProps, keyof WithFieldProps>) => JSX.Element | null;
export {};
