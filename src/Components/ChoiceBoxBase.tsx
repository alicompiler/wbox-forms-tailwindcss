import {ChoiceBoxClassName} from "../Theme/Theme";
import {
    ClassNameBuilder,
    orientedWithStateBasedClassNameSelector,
    stateBasedClassNameSelector
} from "../Utils/ClassNameBuilder";
import {FieldState} from "wbox-forms";

export type Orientation = "vertical" | "horizontal";

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

export function ChoiceBoxBase(props: ChoiceBoxProps) {
    const {
        name,
        type,
        classNameBuilder,
        classNames,
        orientation,
        dataTestId,
        field,
        checked,
        value,
        handleChange,
        text
    } = props;

    const labelClassName = classNameBuilder.build(undefined, orientedWithStateBasedClassNameSelector(classNames.label, orientation, field));
    const inputClassName = classNameBuilder.build(undefined, orientedWithStateBasedClassNameSelector(classNames.input, orientation, field));
    const spaceClassName = classNameBuilder.build(undefined, orientedWithStateBasedClassNameSelector(classNames.space, orientation, field));
    const textClassName = classNameBuilder.build(undefined, stateBasedClassNameSelector(classNames.optionText, field));

    return <label className={labelClassName}>
        <input type={type}
               id={dataTestId}
               name={name}
               className={inputClassName}
               checked={checked}
               value={value}
               onChange={handleChange}/>
        <span className={spaceClassName}/>
        <span className={textClassName}>{text}</span>
    </label>
}