import {FieldTypeMap} from "wbox-forms";
import {DateField, DateTimeField, PasswordField, TextField, TimeField} from "../Components/TextField";
import TextArea from "../Components/TextArea";
import SelectField from "../Components/SelectField";
import RadioButton from "../Components/RadioButton";
import Checkbox from "../Components/Checkbox";

export const fieldsMap: FieldTypeMap = {
    text: TextField,
    password: PasswordField,
    date: DateField,
    datetime: DateTimeField,
    time: TimeField,
    textarea: TextArea,
    select: SelectField,
    radio: RadioButton,
    checkbox: Checkbox
}