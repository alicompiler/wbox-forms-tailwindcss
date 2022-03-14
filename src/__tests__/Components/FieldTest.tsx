import {configure} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {TextField as Field} from "../../Components/TextField";
import {Form} from "wbox-forms";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

configure({adapter: new Adapter()});

describe('FieldTest', () => {

    it('should render field with type', function () {
        render(<Form>
            <Field name={'testing'}/>
        </Form>);
        let input = screen.getByTestId('wbox-field-testing') as HTMLInputElement;
        expect(input.type).toEqual('text');
    });

    it('should append inputProps', function () {
        render(<Form>
            <Field name={'testing'} inputProps={{type: 'email', title: 'test-title', placeholder: 'my-placeholder'}}/>
        </Form>);
        let input = screen.getByTestId('wbox-field-testing') as HTMLInputElement;

        expect(input.type).toEqual('email');
        expect(input.title).toEqual('test-title');
        expect(input.placeholder).toEqual('my-placeholder');
    });

    it('should handle change', async function () {
        render(<Form>
            <Field name={'test'}/>
        </Form>);
        let input = screen.getByTestId('wbox-field-test') as HTMLInputElement;
        userEvent.type(input, "some-value");
        expect(input.value).toEqual("some-value");
    });

});