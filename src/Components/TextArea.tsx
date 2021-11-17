import {FieldProps as BaseFieldProps, withField} from "wbox-forms";
import {useTheme} from "../Theme/ThemeContext";
import {buildClassName} from "../Utils/ClassName";
import {WithFieldProps} from "wbox-forms/dist/Field/HOCs";

export interface TextAreaProps extends BaseFieldProps {
    inputProps?: any;
    placeholder?: string;
    rows? : number;
}

interface Props extends TextAreaProps, WithFieldProps {

}

function TextArea(props: Props) {
    //todo : handle error

    const theme = useTheme();
    const className = buildClassName(props.inputProps?.className, theme.inputClassName);
    const inputProps = props.inputProps ?? {};

    return <textarea name={props.name}
                     data-testid={`wbox-field-${props.name}`}
                     className={className}
                     rows={props.rows}
                     placeholder={props.placeholder}
                     {...inputProps}
                     value={props.field.value}
                     onChange={props.handleChange}/>;
}


export default withField(TextArea);