/// <reference types="react" />
import { ChoiceBoxClassName } from "../Theme/Theme";
import { ClassNameBuilder } from "../Utils/ClassNameBuilder";
import { FieldState } from "wbox-forms";
export declare type Orientation = "vertical" | "horizontal";
export interface ChoiceBoxProps {
    type: "radio" | "checkbox";
    classNames: ChoiceBoxClassName;
    classNameBuilder: ClassNameBuilder;
    orientation: Orientation;
    field: FieldState;
    dataTestId: string;
    name: string;
    checked: boolean;
    value: any;
    handleChange: (e: any) => void;
    text: string;
}
export declare function ChoiceBoxBase(props: ChoiceBoxProps): JSX.Element;
