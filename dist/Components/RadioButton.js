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
import { ChoiceBoxBase } from "./ChoiceBoxBase";
import { withTailwindField } from "../HOCs/WithTailwindField";
import { useDefaults } from "../Defaults/DefaultsContext";
import { stateBasedClassNameSelector } from "../Utils/ClassNameBuilder";
import React from "react";
function RadioButton(props) {
    var _a;
    var tailwindOptions = props.tailwindOptions;
    var defaults = useDefaults();
    var orientation = (_a = props.orientation) !== null && _a !== void 0 ? _a : defaults.radioButtonOrientation;
    var wrapperClassName = tailwindOptions.classNameBuilder.build(undefined, stateBasedClassNameSelector(tailwindOptions.theme.radio.wrapper, props.field));
    return _jsx("div", __assign({ className: wrapperClassName }, { children: props.options.map(function (option, index) {
            return _jsxs(React.Fragment, { children: [_jsx(ChoiceBoxBase, { name: props.name, type: "radio", classNames: tailwindOptions.theme.radio, classNameBuilder: tailwindOptions.classNameBuilder, orientation: orientation, field: props.field, dataTestId: tailwindOptions.dataTestId, checked: props.field.value === option.value, value: option.value, handleChange: props.handleChange, text: option.text }), index < props.options.length - 1 && _jsx("span", { className: 'inline-block w-4' })] }, index);
        }) }));
}
export default withTailwindField(RadioButton);
