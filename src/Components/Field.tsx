import {FieldProps as BaseFieldProps, withField} from "wbox-forms";
import {useTheme} from "../Theme/ThemeContext";
import {buildClassName} from "../Utils/ClassName";
import {WithFieldProps} from "wbox-forms/dist/Field/HOCs";

export interface FieldProps extends BaseFieldProps {
    inputProps?: any;
    placeholder?: string;
    type?: string;
}

interface Props extends FieldProps, WithFieldProps{

}

function Field(props: Props) {
    //todo : handle error

    const theme = useTheme();
    const className = buildClassName(props.inputProps?.className, theme.inputClassName);
    const inputProps = props.inputProps ?? {};

    return <input name={props.name}
                  data-testid={`wbox-field-${props.name}`}
                  className={className}
                  placeholder={props.placeholder}
                  type={props.type ?? 'text'}
                  {...inputProps}
                  value={props.field.value}
                  onChange={props.handleChange}/>;
}


export default withField(Field);