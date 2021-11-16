import {FieldProps as BaseFieldProps, withField} from "wbox-forms";
import {WithOptions} from "./WithOption";
import {WithFieldProps} from "wbox-forms/dist/Field/HOCs";
import {useTheme} from "../Theme/ThemeContext";
import {buildClassName} from "../Utils/ClassName";

export interface SelectProps extends BaseFieldProps, WithOptions {
    placeholder?: string;
    selectProps?: any;
}

interface Props extends SelectProps, WithFieldProps {

}

function SelectField(props: Props) {
    const theme = useTheme();
    const className = buildClassName(props.selectProps?.className, theme.inputClassName);
    const selectProps = props.selectProps ?? {};

    return <select name={props.name}
                   data-testid={`wbox-field-${props.name}`}
                   className={className}
                   placeholder={props.placeholder}
                   {...selectProps}
                   value={props.field.value}
                   onChange={props.handleChange}>
        {
            props.options.map((option, index) =>
                <option key={index}
                        value={option.value}>
                    {option.text}
                </option>)
        }
    </select>
}

export default withField<SelectProps>(SelectField);