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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useDefaults } from "../../Defaults/DefaultsContext";
import { useTheme } from "../../Theme/ThemeContext";
export var DATA_TEST_ID_SIMPLE_FIELD_LABEL = 'wbox-simple-field-label';
export function SimpleFieldWrapper(props) {
    var _a;
    var defaults = useDefaults();
    var theme = useTheme();
    var classNameBuilder = (_a = props.classNameBuilder) !== null && _a !== void 0 ? _a : defaults.classNameBuilder();
    var labelClassName = classNameBuilder.build(props.labelClassName, theme.label);
    return _jsx("div", __assign({ className: '__wbox-tailwind-simple-layout-field-wrapper py-2' }, { children: _jsxs("label", __assign({ "data-testid": DATA_TEST_ID_SIMPLE_FIELD_LABEL, className: labelClassName }, { children: [props.label, props.field] }), void 0) }), void 0);
}
