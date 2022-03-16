/// <reference types="react" />
import { FieldProps as BaseFieldProps } from "wbox-forms";
import { WithFieldProps } from "wbox-forms/dist/Field/HOCs";
import { WithOptions } from "./WithOption";
import { Orientation } from "./ChoiceBoxBase";
import { WithTailwindFieldProps } from "../HOCs/WithTailwindField";
export interface RadioButtonProps extends BaseFieldProps, WithOptions, WithTailwindFieldProps {
    orientation?: Orientation;
}
interface Props extends RadioButtonProps, WithFieldProps {
}
declare const _default: (props: Omit<Omit<Props, "tailwindOptions"> & import("../HOCs/WithTailwindField").WrappedFieldProps, keyof WithFieldProps>) => JSX.Element | null;
export default _default;
