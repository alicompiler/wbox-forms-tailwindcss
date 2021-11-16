import {Form} from "wbox-forms";
import Field from "../Components/Field";
import {PasswordField} from "../Components/PasswordField";

export function UnStyledExample() {
    return <Form>
        <Field name={'test'} />
        <PasswordField name={'test'} />
    </Form>
}