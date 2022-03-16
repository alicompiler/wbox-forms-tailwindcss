import {
    DefaultClassNameBuilder,
    orientedWithStateBasedClassNameSelector,
    stateBasedClassNameSelector
} from "../../Utils/ClassNameBuilder";
import {mock} from "jest-mock-extended";
import {FieldState} from "wbox-forms";
import {OrientedClassName, StateBasedClassName} from "../../Theme/Theme";

describe('DefaultClassNameBuilder', () => {

    it('should build class name from string', function () {
        const classNameBuilder = new DefaultClassNameBuilder();
        const className = classNameBuilder.build("test-classname", "base-classname");
        expect(className).toEqual("base-classname test-classname");
    });


    it('should build class-name from function', function () {
        const classNameBuilder = new DefaultClassNameBuilder();
        const classNameCallback = jest.fn().mockReturnValue('cs-cb');
        const className = classNameBuilder.build(classNameCallback, "base-classname");
        expect(className).toEqual("cs-cb");
        expect(classNameCallback).toBeCalledTimes(1);
        expect(classNameCallback).toBeCalledWith("base-classname");
    });

    it('should build class-name when passing undefined', function () {
        const classNameBuilder = new DefaultClassNameBuilder();
        const className = classNameBuilder.build(undefined, "base-classname");
        expect(className).toEqual("base-classname");
    });


    it('should build class-name when passing null', function () {
        const classNameBuilder = new DefaultClassNameBuilder();
        const className = classNameBuilder.build(null, "base-classname");
        expect(className).toEqual("base-classname");
    });


    it('should build class-name when passing empty-string', function () {
        const classNameBuilder = new DefaultClassNameBuilder();
        const className = classNameBuilder.build("", "base-classname");
        expect(className).toEqual("base-classname");
    });

});


describe('Utils functions', () => {

    it('stateBasedClassNameSelector should return error class when not valid', function () {
        const field = mock<FieldState>({valid: false});
        const stateBasedClassName: StateBasedClassName = {
            normal: 'normal',
            error: 'error'
        }
        const className = stateBasedClassNameSelector(stateBasedClassName, field);
        expect(className).toEqual(stateBasedClassName.error);
    });

    it('stateBasedClassNameSelector should return normal class when valid', function () {
        const field = mock<FieldState>({valid: true});
        const stateBasedClassName: StateBasedClassName = {
            normal: 'normal',
            error: 'error'
        }
        const className = stateBasedClassNameSelector(stateBasedClassName, field);
        expect(className).toEqual(stateBasedClassName.normal);
    });

    it('orientedWithStateBasedClassNameSelector should return vertical class', function () {
        const field = mock<FieldState>({valid: true});
        const orientedClassName: OrientedClassName<StateBasedClassName> = {
            vertical: {
                normal: 'v-normal',
                error: 'v-error'
            },
            horizontal: {
                normal: 'h-normal',
                error: 'h-error'
            }
        }
        const className = orientedWithStateBasedClassNameSelector(orientedClassName, "vertical", field);
        expect(className).toEqual(orientedClassName.vertical.normal);
    });

    it('orientedWithStateBasedClassNameSelector should return horizontal class', function () {
        const field = mock<FieldState>({valid: true});
        const orientedClassName: OrientedClassName<StateBasedClassName> = {
            vertical: {
                normal: 'v-normal',
                error: 'v-error'
            },
            horizontal: {
                normal: 'h-normal',
                error: 'h-error'
            }
        }
        const className = orientedWithStateBasedClassNameSelector(orientedClassName, "horizontal", field);
        expect(className).toEqual(orientedClassName.horizontal.normal);
    });

})