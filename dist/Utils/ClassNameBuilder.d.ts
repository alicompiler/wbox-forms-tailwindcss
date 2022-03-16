import { OrientedClassName, StateBasedClassName } from "../Theme/Theme";
import { FieldState } from "wbox-forms";
import { Orientation } from "../Components/ChoiceBoxBase";
export declare type ClassName = string | ((baseClassName: string) => string) | undefined | null;
export interface ClassNameBuilder {
    build(className: ClassName, baseClassName: string): string;
}
export declare class DefaultClassNameBuilder implements ClassNameBuilder {
    build(className: ClassName, baseClassName: string): string;
}
export declare const stateBasedClassNameSelector: (stateBasedClassName: StateBasedClassName, field: FieldState) => string;
export declare const orientedWithStateBasedClassNameSelector: (className: OrientedClassName<StateBasedClassName>, orientation: Orientation, field: FieldState) => string;
