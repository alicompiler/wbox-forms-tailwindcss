import {configure} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {TextField as Field} from "../../Components/TextField";
import {Form} from "wbox-forms";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {getFieldTestId} from "../../HOCs/WithTailwindField";

configure({adapter: new Adapter()});

describe('FieldTest', () => {

    it('should render field with type', function () {
        const fieldName = 'testing';
        render(<Form>
            <Field name={fieldName}/>
        </Form>);
        let input = screen.getByTestId(getFieldTestId(fieldName)) as HTMLInputElement;
        expect(input.type).toEqual('text');
    });

    it('should append inputProps', function () {
        const fieldName = 'testing';
        render(<Form>
            <Field name={fieldName} inputProps={{type: 'email', title: 'test-title', placeholder: 'my-placeholder'}}/>
        </Form>);
        let input = screen.getByTestId(getFieldTestId(fieldName)) as HTMLInputElement;

        expect(input.type).toEqual('email');
        expect(input.title).toEqual('test-title');
        expect(input.placeholder).toEqual('my-placeholder');
    });

    it('should handle change', async function () {
        const fieldName = 'test';
        render(<Form>
            <Field name={fieldName}/>
        </Form>);
        let input = screen.getByTestId(getFieldTestId(fieldName)) as HTMLInputElement;
        userEvent.type(input, "some-value");
        expect(input.value).toEqual("some-value");
    });

});