import {mock} from "jest-mock-extended";
import {ClassNameBuilder} from "../../../Utils/ClassNameBuilder";
import {render, screen} from "@testing-library/react";
import {Form} from "wbox-forms";
import {DATA_TEST_ID_SIMPLE_FIELD_LABEL, SimpleFieldWrapper} from "../../../Factories/Components/SimpleFieldWrapper";

describe('SimpleFieldWrapper', () => {

    it('should use props', function () {
        const classNameBuilderMock = mock<ClassNameBuilder>();
        classNameBuilderMock.build.mockReturnValue('mocked-class-name');
        render(<Form>
            <SimpleFieldWrapper field={<span data-testid={'field'}>Test</span>}
                                label={'test label'}
                                labelClassName={'test-class-name'}
                                classNameBuilder={classNameBuilderMock}/>
        </Form>);
        const field = screen.getByTestId('field') as HTMLElement;
        const label = screen.getByTestId(DATA_TEST_ID_SIMPLE_FIELD_LABEL) as HTMLElement;
        expect(label.textContent).toContain('test label');
        expect(label.className).toEqual("mocked-class-name");
        expect(field.textContent).toEqual('Test');
        expect(classNameBuilderMock.build).toBeCalledWith('test-class-name', expect.anything());
    });

});