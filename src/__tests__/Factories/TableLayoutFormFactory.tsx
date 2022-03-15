import {configure, mount} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {mock} from "jest-mock-extended";
import {ClassNameBuilder} from "../../Utils/ClassNameBuilder";
import {TableLayoutFormFactory} from "../../Factories/TableLayoutFormFactory";

configure({adapter: new Adapter()});

describe('SimpleFormFactory', () => {

    it('should render TableLayoutFormFactory', function () {
        const factory = new TableLayoutFormFactory();
        const mockedClassNameBuilder = mock<ClassNameBuilder>()
        let fieldConfig = {
            name: 'field1',
            label: 'Field 1',
            labelClassName: 'test-class-name'
        };
        const wrapper = mount(factory.create({
            formConfig: {},
            fieldConfig: {
                field1: {
                    type: 'text',
                    fieldConfig: fieldConfig
                },
                field2: {
                    type: 'text',
                    fieldConfig: {...fieldConfig, name: 'field2'}
                },
            },
            extraOptions: {
                button: {
                    text: 'Test',
                    position: 'center',
                    className: 'test-class-name'
                },
                classNameBuilder: mockedClassNameBuilder,
                showDivider: true,
                labelWidth: 100,
                labelAlignment: 'center',
                spaceWidth: 200
            }
        }));
        const tableRowFieldWrapper = wrapper.find('TableRowFieldWrapper');
        expect(tableRowFieldWrapper.first().props()).toEqual({
            field: expect.any(Object),
            labelClassName: fieldConfig.labelClassName,
            label: fieldConfig.label,
            labelWidth: 100,
            labelAlignment: 'center',
            spaceWidth: 200,
            displayDivider: true,
            classNameBuilder: mockedClassNameBuilder
        });

        expect(tableRowFieldWrapper.last().props()).toEqual({
            field: expect.any(Object),
            labelClassName: fieldConfig.labelClassName,
            label: fieldConfig.label,
            labelWidth: 100,
            labelAlignment: 'center',
            spaceWidth: 200,
            displayDivider: false,
            classNameBuilder: mockedClassNameBuilder
        });
    });

});