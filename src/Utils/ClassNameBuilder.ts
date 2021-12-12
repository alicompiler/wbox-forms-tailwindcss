import {OrientedClassName, StateBasedClassName} from "../Theme/Theme";
import {FieldState} from "wbox-forms";
import {Orientation} from "../Components/ChoiceBoxBase";

export type ClassName = string | ((baseClassName: string) => string) | undefined | null;


export interface ClassNameBuilder {
    build(className: ClassName, baseClassName: string): string;
}

export class DefaultClassNameBuilder implements ClassNameBuilder {

    build(className: ClassName, baseClassName: string): string {
        if (typeof className === "function") {
            return `${className(baseClassName)}`;
        }
        if (className === undefined || className === null || className === "") {
            return `${baseClassName}`;
        }
        return `${baseClassName} ${className}`;
    }
}


export const stateBasedClassNameSelector = (stateBasedClassName: StateBasedClassName, field: FieldState): string => {
    if (!field.valid) {
        return stateBasedClassName.error
    }
    return stateBasedClassName.normal
}

export const orientedWithStateBasedClassNameSelector = (className: OrientedClassName<StateBasedClassName>, orientation: Orientation, field: FieldState): string => {
    const stateBasedClassName = orientation === "vertical" ? className.vertical : className.horizontal;
    return stateBasedClassNameSelector(stateBasedClassName, field);
}