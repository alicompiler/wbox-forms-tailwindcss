import {checkboxValueSelector, FieldProps as BaseFieldProps, withField} from "wbox-forms";
import {WithFieldProps} from "wbox-forms/dist/Field/HOCs";
import {buildClassName} from "../Utils/ClassName";
import {useTheme} from "../Theme/ThemeContext";
import {defaultInitializeFunc} from "wbox-forms/dist/Field/Helpers";

export interface CheckboxProps extends BaseFieldProps {
    label?: string;
    inputProps?: any;
}

interface Props extends CheckboxProps, WithFieldProps {

}

function Checkbox(props: Props) {
    const theme = useTheme();
    const className = buildClassName(props.inputProps?.className, theme.checkboxClassName);
    const inputProps = props.inputProps ?? {};
    //todo : move to theme
    return <div className={'flex items-center mt-1'}>
        <input type={'checkbox'}
               id={`wbox-field-${props.name}`}
               name={props.name}
               className={className}
               {...inputProps}
               value={props.field.value}
               onChange={props.handleChange}/>
        {
            props.label &&
            <>
                <span className={'inline-block w-2'}/>
                <label htmlFor={`wbox-field-${props.name}`} className={className}>{props.label}</label>
            </>
        }
    </div>
}

export default withField(Checkbox, defaultInitializeFunc, {valueSelector: checkboxValueSelector});