import Field, {FieldProps} from "./Field";

export interface PasswordFieldProps extends FieldProps {
    type?: never;
}

export function PasswordField(props: PasswordFieldProps) {
    return <Field {...props} type={'password'}/>
}