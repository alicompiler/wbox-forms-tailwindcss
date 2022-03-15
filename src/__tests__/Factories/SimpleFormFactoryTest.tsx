import {configure, mount} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {mock} from "jest-mock-extended";
import {ClassNameBuilder} from "../../Utils/ClassNameBuilder";
import {SimpleFormFactory} from "../../Factories/SimpleFormFactory";

configure({adapter: new Adapter()});

describe('SimpleFormFactory', () => {

    it('should render SimpleFieldWrapper', function () {
        const factory = new SimpleFormFactory();
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
        const simpleFiledWrapper = wrapper.find('SimpleFieldWrapper');
        expect(simpleFiledWrapper.props()).toEqual({
            field: expect.any(Object),
            labelClassName: fieldConfig.labelClassName,
            label: fieldConfig.label,
            classNameBuilder: mockedClassNameBuilder
        });
    });

});