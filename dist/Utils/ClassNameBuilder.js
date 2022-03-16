var DefaultClassNameBuilder = /** @class */ (function () {
    function DefaultClassNameBuilder() {
    }
    DefaultClassNameBuilder.prototype.build = function (className, baseClassName) {
        if (typeof className === "function") {
            return "".concat(className(baseClassName));
        }
        if (className === undefined || className === null || className === "") {
            return "".concat(baseClassName);
        }
        return "".concat(baseClassName, " ").concat(className);
    };
    return DefaultClassNameBuilder;
}());
export { DefaultClassNameBuilder };
export var stateBasedClassNameSelector = function (stateBasedClassName, field) {
    if (!field.valid) {
        return stateBasedClassName.error;
    }
    return stateBasedClassName.normal;
};
export var orientedWithStateBasedClassNameSelector = function (className, orientation, field) {
    var stateBasedClassName = orientation === "vertical" ? className.vertical : className.horizontal;
    return stateBasedClassNameSelector(stateBasedClassName, field);
};
