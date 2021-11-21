import {checkboxValueSelector, FieldProps} from "wbox-forms";
import {WithFieldProps} from "wbox-forms/dist/Field/HOCs";
import {ChoiceBoxBase, Orientation} from "./ChoiceBoxBase";
import {withTailwindField, WithTailwindFieldProps} from "../HOCs/WithTailwindField";
import {useDefaults} from "../Defaults/DefaultsContext";


export interface CheckboxProps extends FieldProps, WithTailwindFieldProps {
    text?: string;
    orientation?: Orientation;
}

interface Props extends CheckboxProps, WithFieldProps {

}

function Checkbox(props: Props) {
    const {tailwindOptions} = props;
    const defaults = useDefaults();
    const orientation = props.orientation ?? defaults.checkboxOrientation;
    return <ChoiceBoxBase name={props.name}
                          dataTestId={tailwindOptions.dataTestId}
                          type={tailwindOptions.type as any}
                          classNames={tailwindOptions.theme.checkboxClassName}
                          classNameBuilder={tailwindOptions.classNameBuilder}
                          orientation={orientation}
                          field={props.field}
                          checked={props.field.value}
                          value={props.field.value}
                          handleChange={props.handleChange}
                          text={props.text ?? ''}/>
}

export default withTailwindField(Checkbox, "checkbox", {valueSelector: checkboxValueSelector});