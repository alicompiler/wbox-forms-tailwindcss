import {render, screen} from "@testing-library/react";
import {PasswordField} from "../../Components/PasswordField";
import {Form} from "wbox-forms";

describe('PasswordField', () => {
    it('should render field with password type', function () {
        render(<Form>
            <PasswordField name={'password'}/>
        </Form>);
        let input = screen.getByTestId('wbox-field-password') as HTMLInputElement;
        expect(input.type).toEqual('password');
    });
})