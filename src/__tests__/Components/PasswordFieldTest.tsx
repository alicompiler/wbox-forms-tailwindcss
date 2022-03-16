import {render, screen} from "@testing-library/react";
import {Form} from "wbox-forms";
import {PasswordField} from "../../Components/TextField";
import {getFieldTestId} from "../../HOCs/WithTailwindField";

describe('PasswordField', () => {
    it('should render field with password type', function () {
        const fieldName = 'password';
        render(<Form>
            <PasswordField name={fieldName}/>
        </Form>);
        let input = screen.getByTestId(getFieldTestId(fieldName)) as HTMLInputElement;
        expect(input.type).toEqual(fieldName);
    });
})