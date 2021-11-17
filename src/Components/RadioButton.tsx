import {FieldProps as BaseFieldProps, withField} from "wbox-forms";
import {WithFieldProps} from "wbox-forms/dist/Field/HOCs";
import {buildClassName} from "../Utils/ClassName";
import {useTheme} from "../Theme/ThemeContext";
import {WithOptions} from "./WithOption";

export interface RadioButtonProps extends BaseFieldProps, WithOptions {

}

interface Props extends RadioButtonProps, WithFieldProps {

}

function RadioButton(props: Props) {
    const theme = useTheme();
    const className = buildClassName(undefined, theme.checkboxClassName);
    //todo : move to theme
    return <div className={'mt-1'}>
        {
            props.options.map((option, index) =>
                <div className={'block'} key={index}>
                    <input type={'radio'}
                           id={`wbox-field-${props.name}-${index}`}
                           name={props.name}
                           className={className}
                           checked={props.field.value === option.value}
                           value={option.value}
                           onChange={props.handleChange}/>
                    <span className={'inline-block w-2'}/>
                    <label htmlFor={`wbox-field-${props.name}-${index}`} className={className}>{option.text}</label>
                </div>
            )
        }
    </div>
}

export default withField(RadioButton);