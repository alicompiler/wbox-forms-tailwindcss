/// <reference types="react" />
import { FieldProps } from "wbox-forms";
import { WithFieldProps } from "wbox-forms/dist/Field/HOCs";
import { WithTailwindFieldProps, WrappedFieldProps } from "../HOCs/WithTailwindField";
export interface TailwindInputProps extends FieldProps, WrappedFieldProps {
    placeholder?: string;
    rows?: number;
}
interface Props extends TailwindInputProps, WithFieldProps, WithTailwindFieldProps {
}
declare const _default: (props: Omit<Omit<Props, "tailwindOptions"> & WrappedFieldProps, keyof WithFieldProps>) => JSX.Element | null;
export default _default;
