import Field, {FieldProps} from "./Field";

export interface DateFieldProps extends FieldProps {
    type?: never;
}

export function DateField(props: DateFieldProps) {
    return <Field {...props} type={'date'}/>;
}