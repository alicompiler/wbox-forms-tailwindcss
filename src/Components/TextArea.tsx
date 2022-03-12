import {FieldProps} from "wbox-forms";
import {WithFieldProps} from "wbox-forms/dist/Field/HOCs";
import {withTailwindField, WithTailwindFieldProps, WrappedFieldProps} from "../HOCs/WithTailwindField";
import {stateBasedClassNameSelector} from "../Utils/ClassNameBuilder";

export interface TailwindInputProps extends FieldProps, WrappedFieldProps {
    placeholder?: string;
    rows?: number;
}

interface Props extends TailwindInputProps, WithFieldProps, WithTailwindFieldProps {

}

function TextArea(props: Props) {
    const {tailwindOptions} = props;
    return <textarea name={props.name}
                     data-testid={tailwindOptions.dataTestId}
                     className={tailwindOptions.classNameBuilder.build(props.className, stateBasedClassNameSelector(tailwindOptions.theme.textAreaClassName, props.field))}
                     rows={props.rows}
                     placeholder={props.placeholder}
                     {...tailwindOptions.inputProps}
                     value={props.field.value}
                     onChange={props.handleChange}/>;
}


export default withTailwindField(TextArea, "textarea");