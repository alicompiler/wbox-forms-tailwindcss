import {FieldProps as BaseFieldProps, withField} from "wbox-forms";
import {useTheme} from "../Theme/ThemeContext";

export interface FieldProps extends BaseFieldProps {
    inputProps?: any;
    placeholder?: string;
    type? : string;
}

function Field(props: FieldProps) {
    const theme = useTheme();
    let className = props.inputProps?.className ?? '';
    className = `${theme.inputClassName} ${className}`;

    const otherProps = props.inputProps;
    return <input name={props.name}
                  className={className}
                  placeholder={props.placeholder}
                  type={props.type ?? 'text'}
                  {...otherProps}
                  onChange={props.changeHandler}
    />;
}


export default withField(Field);