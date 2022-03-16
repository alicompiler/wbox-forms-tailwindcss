import {mock} from "jest-mock-extended";
import {ClassNameBuilder} from "../../../Utils/ClassNameBuilder";
import {render, screen} from "@testing-library/react";
import {Form} from "wbox-forms";
import {
    DATA_TEST_ID_TABLE_ROW_DIVIDER,
    DATA_TEST_ID_TABLE_ROW_FIELD_WRAPPER_SPACE,
    DATA_TEST_ID_TABLE_ROW_LABEL,
    DATA_TEST_ID_TABLE_ROW_LABEL_WRAPPER,
    TableRowFieldWrapper
} from "../../../Factories/Components/TableRowFieldWrapper";
import {defaults, DefaultsProvider} from "../../../Defaults/DefaultsContext";

describe('TableRowFieldWrapper', () => {

    it('should use props', function () {
        const classNameBuilderMock = mock<ClassNameBuilder>();
        classNameBuilderMock.build.mockReturnValue('mocked-class-name');
        render(<Form>
            <TableRowFieldWrapper field={<span data-testid={'field'}>Test</span>}
                                  label={'test label'}
                                  labelClassName={'test-class-name'}
                                  classNameBuilder={classNameBuilderMock}
                                  displayDivider={true}
                                  spaceWidth={100}
                                  labelAlignment={'end'}
                                  labelWidth={200}
            />
        </Form>);
        const labelWrapper = screen.getByTestId(DATA_TEST_ID_TABLE_ROW_LABEL_WRAPPER) as HTMLElement;
        const label = screen.getByTestId(DATA_TEST_ID_TABLE_ROW_LABEL) as HTMLElement;
        const spaceElement = screen.getByTestId(DATA_TEST_ID_TABLE_ROW_FIELD_WRAPPER_SPACE) as HTMLElement;
        const divider = screen.getByTestId(DATA_TEST_ID_TABLE_ROW_DIVIDER) as HTMLElement;

        expect(labelWrapper.className).toContain("items-end");
        expect(label.textContent).toContain('test label');
        expect(label.className).toEqual("mocked-class-name");
        expect(label.style.width).toEqual("200px");
        expect(spaceElement.style.width).toEqual("100px");
        expect(divider).not.toBeNull();
        expect(classNameBuilderMock.build).toBeCalledWith('test-class-name', expect.anything());
    });

    it('should use defaults', async function () {
        const classNameBuilderMock = mock<ClassNameBuilder>();
        classNameBuilderMock.build.mockReturnValue('default-class-name');

        render(<DefaultsProvider value={{
            ...defaults,
            classNameBuilder: () => classNameBuilderMock,
            layout: {
                ...defaults.layout,
                table: {
                    spaceWidth: 10,
                    labelWidth: 20,
                    labelAlignments: 'center'
                }
            }
        }}>
            <Form>
                <TableRowFieldWrapper field={<span data-testid={'field'}>Test</span>}
                                      label={'test label'}
                />
            </Form>
        </DefaultsProvider>);

        const labelWrapper = screen.getByTestId(DATA_TEST_ID_TABLE_ROW_LABEL_WRAPPER) as HTMLElement;
        const label = screen.getByTestId(DATA_TEST_ID_TABLE_ROW_LABEL) as HTMLElement;
        const spaceElement = screen.getByTestId(DATA_TEST_ID_TABLE_ROW_FIELD_WRAPPER_SPACE) as HTMLElement;
        const divider = screen.queryByTestId(DATA_TEST_ID_TABLE_ROW_DIVIDER);

        expect(labelWrapper.className).toContain("items-center");
        expect(label.textContent).toContain('test label');
        expect(label.className).toEqual("default-class-name");
        expect(label.style.width).toEqual("20px");
        expect(spaceElement.style.width).toEqual("10px");
        expect(divider).toBeNull();
        expect(classNameBuilderMock.build).toBeCalledWith(undefined, expect.anything());
    });

});