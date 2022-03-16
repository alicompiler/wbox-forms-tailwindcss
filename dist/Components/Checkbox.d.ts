/// <reference types="react" />
import { FieldProps } from "wbox-forms";
import { WithFieldProps } from "wbox-forms/dist/Field/HOCs";
import { Orientation } from "./ChoiceBoxBase";
import { WithTailwindFieldProps } from "../HOCs/WithTailwindField";
export interface CheckboxProps extends FieldProps, WithTailwindFieldProps {
    text?: string;
    orientation?: Orientation;
}
interface Props extends CheckboxProps, WithFieldProps {
}
declare const _default: (props: Omit<Omit<Props, "tailwindOptions"> & import("../HOCs/WithTailwindField").WrappedFieldProps, keyof WithFieldProps>) => JSX.Element | null;
export default _default;
