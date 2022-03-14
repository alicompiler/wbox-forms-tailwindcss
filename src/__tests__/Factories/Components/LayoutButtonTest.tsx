import {render, screen} from "@testing-library/react";
import {Form, ServiceFactory, SubmitService} from "wbox-forms";
import {LayoutButton} from "../../../Factories/Components/LayoutButton";
import {mock} from "jest-mock-extended";
import {ClassNameBuilder} from "../../../Utils/ClassNameBuilder";
import userEvent from "@testing-library/user-event";
import {defaults, DefaultsProvider} from "../../../Defaults/DefaultsContext";

describe('LayoutButton', () => {

    it('should use props', function () {
        const classNameBuilderMock = mock<ClassNameBuilder>();
        classNameBuilderMock.build.mockReturnValue('mocked-class-name');
        render(<Form>
            <LayoutButton text={'button text'} className={'test-class'} position={'end'}
                          classNameBuilder={classNameBuilderMock}/>
        </Form>);
        const button = screen.getByTestId('wbox-layout-button') as HTMLButtonElement;
        const wrapper = screen.getByTestId('wbox-layout-button-wrapper') as HTMLElement;
        expect(button.className.trim()).toEqual('mocked-class-name');
        expect(button.textContent).toEqual('button text');
        expect(wrapper.className).toEqual("flex p-2 justify-end __wbox-tailwind-button-wrapper");
        expect(classNameBuilderMock.build).toBeCalledWith('test-class', expect.anything());
    });

    it('should submit when button clicked', function () {
        const serviceFactory = mock<ServiceFactory>();
        const submitter = mock<SubmitService>();
        serviceFactory.createSubmitService.mockReturnValue(submitter);
        render(<Form serviceFactoryCallback={() => serviceFactory}>
            <LayoutButton text={'button text'}/>
        </Form>);
        const button = screen.getByTestId('wbox-layout-button') as HTMLButtonElement;
        userEvent.click(button);
        expect(submitter.submit).toBeCalled()
    });

    it('should render with full width', function () {
        const classNameBuilderMock = mock<ClassNameBuilder>();
        classNameBuilderMock.build.mockReturnValue('mocked-class-name');
        render(<Form>
            <LayoutButton text={'button text'} className={'test-class'} position={'fullwidth'}
                          classNameBuilder={classNameBuilderMock}/>
        </Form>);
        const button = screen.getByTestId('wbox-layout-button') as HTMLButtonElement;
        const wrapper = screen.getByTestId('wbox-layout-button-wrapper') as HTMLElement;
        expect(button.className.trim()).toEqual('mocked-class-name w-full');
        expect(wrapper.className).toEqual("flex p-2  __wbox-tailwind-button-wrapper");
    });

    it('should use defaults', function () {
        const classNameBuilderMock = mock<ClassNameBuilder>();
        classNameBuilderMock.build.mockReturnValue('default-class-name');
        render(<DefaultsProvider value={{
            ...defaults,
            layout: {
                ...defaults.layout,
                shared: {
                    ...defaults.layout.shared,
                    buttonPosition: 'center'
                }
            },
            classNameBuilder: () => classNameBuilderMock
        }}>
            <Form>
                <LayoutButton text={'button text'}/>
            </Form>
        </DefaultsProvider>);
        const button = screen.getByTestId('wbox-layout-button') as HTMLButtonElement;
        const wrapper = screen.getByTestId('wbox-layout-button-wrapper') as HTMLElement;
        expect(button.className.trim()).toEqual('default-class-name');
        expect(wrapper.className).toEqual("flex p-2 justify-center __wbox-tailwind-button-wrapper");
    });

});