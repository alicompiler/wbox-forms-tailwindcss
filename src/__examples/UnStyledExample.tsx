import {Form} from "wbox-forms";
import Field from "../Components/Field";
import {PasswordField} from "../Components/PasswordField";
import SelectField from "../Components/SelectField";

export function UnStyledExample() {
    let colors = [
        {text: 'Red', value: 'red'},
        {text: 'Blue', value: 'blue'},
        {text: 'Green', value: 'green'}
    ];
    return <Form>
        <Field name={'name'}/>
        <PasswordField name={'password'}/>
        <SelectField name={'color'} options={colors}/>
    </Form>
}