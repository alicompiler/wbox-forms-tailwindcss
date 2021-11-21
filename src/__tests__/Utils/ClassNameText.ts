import {buildClassName} from "../../Utils/ClassNameBuilder";

describe('ClassName Utils', () => {

    it('should build class name from string', function () {
        const className = buildClassName("test-classname", "base-classname");
        expect(className).toEqual("base-classname test-classname");
    });


    it('should build class-name from function', function () {
        const classNameCallback = jest.fn().mockReturnValue('cs-cb');
        const className = buildClassName(classNameCallback, "base-classname");
        expect(className).toEqual("cs-cb");
        expect(classNameCallback).toBeCalledTimes(1);
        expect(classNameCallback).toBeCalledWith("base-classname");
    });

    it('should build class-name when passing undefined', function () {
        const className = buildClassName(undefined, "base-classname");
        expect(className).toEqual("base-classname");
    });


    it('should build class-name when passing null', function () {
        const className = buildClassName(null, "base-classname");
        expect(className).toEqual("base-classname");
    });


    it('should build class-name when passing empty-string', function () {
        const className = buildClassName("", "base-classname");
        expect(className).toEqual("base-classname");
    });

})