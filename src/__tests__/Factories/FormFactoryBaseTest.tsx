import {FieldConfig, FormFactoryBase} from "../../Factories/FormFactoryBase";
import {FieldTypeMap, FormConfiguration} from "wbox-forms";
import React from "react";
import {render, screen} from "@testing-library/react";
import {configure, mount} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {mock} from "jest-mock-extended";
import {ClassNameBuilder} from "../../Utils/ClassNameBuilder";

configure({adapter: new Adapter()});


class DummyFactory extends FormFactoryBase<any> {
    protected renderField(name: string, field: React.ReactElement, fieldConfig: FieldConfig, configuration: FormConfiguration<FieldTypeMap, FieldConfig>, index: number, fieldsCount: number): React.ReactElement {
        return <span data-testid={name}>{fieldConfig.label}</span>
    }
}


describe('FormFactoryBase', () => {

    it('should render fields', function () {
        const factory = new DummyFactory();
        render(factory.create({
            formConfig: {},
            fieldConfig: {
                field1: {
                    type: 'text',
                    fieldConfig: {
                        name: 'field1',
                        label: 'Field 1'
                    }
                },
                field2: {
                    type: 'password',
                    fieldConfig: {
                        name: 'field2',
                        label: 'Field 2'
                    }
                }
            },
            extraOptions: {
                button: {
                    text: 'Test'
                }
            }
        }));

        const field1 = screen.getByTestId('field1') as HTMLElement;
        const field2 = screen.getByTestId('field2') as HTMLElement;
        expect(field1.textContent).toEqual('Field 1');
        expect(field2.textContent).toEqual('Field 2');
    });

    it('should render button', function () {
        const factory = new DummyFactory();
        const mockedClassNameBuilder = mock<ClassNameBuilder>()
        const wrapper = mount(factory.create({
            formConfig: {},
            fieldConfig: {
                field1: {
                    type: 'text',
                    fieldConfig: {
                        name: 'field1',
                        label: 'Field 1'
                    }
                },
            },
            extraOptions: {
                button: {
                    text: 'Test',
                    position: 'center',
                    className: 'test-class-name'
                },
                classNameBuilder: mockedClassNameBuilder
            }
        }));
        const layoutButton = wrapper.find('LayoutButton');
        expect(layoutButton.props()).toEqual({
            position: 'center',
            text: 'Test',
            className: 'test-class-name',
            classNameBuilder: mockedClassNameBuilder
        });
    });

});