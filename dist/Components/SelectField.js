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
import { withTailwindField } from "../HOCs/WithTailwindField";
import { stateBasedClassNameSelector } from "../Utils/ClassNameBuilder";
function SelectField(props) {
    var tailwindOptions = props.tailwindOptions;
    var classNameBuilder = tailwindOptions.classNameBuilder, theme = tailwindOptions.theme;
    var selectClassName = classNameBuilder.build(props.className, stateBasedClassNameSelector(theme.selectClassName, props.field));
    var optionClassName = classNameBuilder.build(props.className, stateBasedClassNameSelector(theme.selectOptionClassName, props.field));
    return _jsx("select", __assign({ name: props.name, "data-testid": tailwindOptions.dataTestId, className: selectClassName, placeholder: props.placeholder }, tailwindOptions.inputProps, { value: props.field.value, onChange: props.handleChange }, { children: props.options.map(function (option, index) {
            return _jsx("option", __assign({ className: optionClassName, value: option.value }, { children: option.text }), index);
        }) }));
}
export default withTailwindField(SelectField, "select");
