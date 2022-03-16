/// <reference types="react" />
import { FieldProps } from "wbox-forms";
import { WithOptions } from "./WithOption";
import { WithFieldProps } from "wbox-forms/dist/Field/HOCs";
import { WithTailwindFieldProps, WrappedFieldProps } from "../HOCs/WithTailwindField";
export interface TailwindSelectProps extends FieldProps, WrappedFieldProps, WithOptions {
    placeholder?: string;
}
interface Props extends TailwindSelectProps, WithFieldProps, WithTailwindFieldProps {
}
declare const _default: (props: Omit<Omit<Props, "tailwindOptions"> & WrappedFieldProps, keyof WithFieldProps>) => JSX.Element | null;
export default _default;
