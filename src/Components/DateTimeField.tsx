import Field, {FieldProps} from "./Field";

export interface DateTimeFieldProps extends FieldProps {
    type?: never;
}

export function DateTimeField(props: DateTimeFieldProps) {
    return <Field {...props} type={'datetime-local'}/>;
}