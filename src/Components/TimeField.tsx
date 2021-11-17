import Field, {FieldProps} from "./Field";

export interface TimeFieldProps extends FieldProps {
    type?: never;
}

export function TimeField(props: TimeFieldProps) {
    return <Field {...props} type={'time'}/>;
}