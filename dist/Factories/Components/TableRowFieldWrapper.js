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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from "../../Theme/ThemeContext";
import { useDefaults } from "../../Defaults/DefaultsContext";
import { Fragment } from "react";
export var DATA_TEST_ID_TABLE_ROW_FIELD_WRAPPER_SPACE = "wbox-table-row-field-wrapper-space";
export var DATA_TEST_ID_TABLE_ROW_LABEL = "wbox-table-row-label";
export var DATA_TEST_ID_TABLE_ROW_LABEL_WRAPPER = "wbox-table-row-label-wrapper";
export var DATA_TEST_ID_TABLE_ROW_DIVIDER = "wbox-table-row-divider";
export function TableRowFieldWrapper(props) {
    var _a, _b, _c, _d;
    var defaults = useDefaults();
    var theme = useTheme();
    var classNameBuilder = (_a = props.classNameBuilder) !== null && _a !== void 0 ? _a : defaults.classNameBuilder();
    var labelClassName = classNameBuilder.build(props.labelClassName, theme.label);
    var labelAlignment = (_b = props.labelAlignment) !== null && _b !== void 0 ? _b : defaults.layout.table.labelAlignments;
    var spaceWidth = (_c = props.spaceWidth) !== null && _c !== void 0 ? _c : defaults.layout.table.spaceWidth;
    var labelWidth = (_d = props.labelWidth) !== null && _d !== void 0 ? _d : defaults.layout.table.labelWidth;
    return _jsxs(Fragment, { children: [_jsxs("div", __assign({ className: 'py-2 flex __wbox-tailwind-table-layout-field-wrapper' }, { children: [_jsx("div", __assign({ "data-testid": DATA_TEST_ID_TABLE_ROW_LABEL_WRAPPER, className: "flex items-".concat(labelAlignment) }, { children: _jsx("label", __assign({ "data-testid": DATA_TEST_ID_TABLE_ROW_LABEL, className: labelClassName, style: { width: labelWidth } }, { children: props.label }), void 0) }), void 0), _jsx("div", { "data-testid": DATA_TEST_ID_TABLE_ROW_FIELD_WRAPPER_SPACE, className: 'inline-block', style: { width: spaceWidth } }, void 0), props.field] }), void 0), props.displayDivider &&
                _jsx("div", __assign({ "data-testid": DATA_TEST_ID_TABLE_ROW_DIVIDER, className: 'py-2' }, { children: _jsx("hr", {}, void 0) }), void 0)] }, void 0);
}
