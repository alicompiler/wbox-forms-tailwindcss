import {Form} from "wbox-forms";
import Field from "../Components/Field";
import {PasswordField} from "../Components/PasswordField";
import SelectField from "../Components/SelectField";
import Checkbox from "../Components/Checkbox";
import RadioButton from "../Components/RadioButton";
import TextArea from "../Components/TextArea";
import {DateField} from "../Components/DateField";
import {DateTimeField} from "../Components/DateTimeField";
import {TimeField} from "../Components/TimeField";

export function AllElementsExample() {
    let colors = [
        {text: 'Red', value: 'red'},
        {text: 'Blue', value: 'blue'},
        {text: 'Green', value: 'green'}
    ];
    return <Form>
        <Field name={'name'}/>
        <PasswordField name={'password'}/>
        <DateField name={'date'}/>
        <TimeField name={'time'}/>
        <DateTimeField name={'datetime'}/>
        <SelectField name={'color'} options={colors}/>
        <Checkbox name={'checkbox'} label={'Dummy Checkbox'}/>
        <RadioButton name={'radio'} options={colors}/>
        <TextArea rows={5} placeholder={'Message...'} name={'message'}/>
    </Form>
}