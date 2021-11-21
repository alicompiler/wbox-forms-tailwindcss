import {WithFieldProps} from "wbox-forms/dist/Field/HOCs";
import {withTailwindField, WithTailwindFieldProps, WrappedFieldProps} from "../HOCs/WithTailwindField";
import {stateBasedClassNameSelector} from "../Utils/ClassNameBuilder";
import {FieldProps} from "wbox-forms";

export interface TailwindInputProps extends FieldProps, WrappedFieldProps {
    placeholder?: string;
}

interface Props extends TailwindInputProps, WithFieldProps, WithTailwindFieldProps {

}

export function TailwindInputField(props: Props) {
    const {tailwindOptions} = props;
    const {classNameBuilder, theme} = tailwindOptions;
    let className = classNameBuilder.build(props.className, stateBasedClassNameSelector(theme.inputClassName, props.field));
    return <input name={props.name}
                  data-testid={tailwindOptions.dataTestId}
                  className={className}
                  placeholder={props.placeholder}
                  type={tailwindOptions.type}
                  {...tailwindOptions.inputProps}
                  value={props.field.value}
                  onChange={props.handleChange}/>;
}

export const TextField = withTailwindField(TailwindInputField);

export const PasswordField = withTailwindField(TailwindInputField, "password");

export const TimeField = withTailwindField(TailwindInputField, "time");

export const DateField = withTailwindField(TailwindInputField, "date");

export const DateTimeField = withTailwindField(TailwindInputField, "datetime-local");