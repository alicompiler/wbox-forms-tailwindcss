var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { withField } from "wbox-forms";
import { DefaultClassNameBuilder } from "../Utils/ClassNameBuilder";
import { useTheme } from "../Theme/ThemeContext";
import { defaultInitializeFunc } from "wbox-forms/dist/Field/Helpers";
export function getFieldTestId(name) {
    return "wbox-field-".concat(name);
}
export function withTailwindField(Component, type, defaultProps, classNameBuilder) {
    if (type === void 0) { type = "text"; }
    if (defaultProps === void 0) { defaultProps = {}; }
    if (classNameBuilder === void 0) { classNameBuilder = new DefaultClassNameBuilder(); }
    var FieldComponent = function (props) {
        var _a;
        var theme = useTheme();
        var options = {
            dataTestId: getFieldTestId(props.name),
            inputProps: (_a = props.inputProps) !== null && _a !== void 0 ? _a : {},
            theme: theme,
            classNameBuilder: classNameBuilder,
            type: type
        };
        return _jsx(Component, __assign({}, props, { tailwindOptions: options }), void 0);
    };
    return withField(FieldComponent, defaultInitializeFunc, defaultProps);
}
