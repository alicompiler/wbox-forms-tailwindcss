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
export function TailwindInputField(props) {
    var tailwindOptions = props.tailwindOptions;
    var classNameBuilder = tailwindOptions.classNameBuilder, theme = tailwindOptions.theme;
    var className = classNameBuilder.build(props.className, stateBasedClassNameSelector(theme.inputClassName, props.field));
    return _jsx("input", __assign({ name: props.name, "data-testid": tailwindOptions.dataTestId, className: className, placeholder: props.placeholder, type: tailwindOptions.type }, tailwindOptions.inputProps, { value: props.field.value, onChange: props.handleChange }), void 0);
}
export var TextField = withTailwindField(TailwindInputField);
export var PasswordField = withTailwindField(TailwindInputField, "password");
export var TimeField = withTailwindField(TailwindInputField, "time");
export var DateField = withTailwindField(TailwindInputField, "date");
export var DateTimeField = withTailwindField(TailwindInputField, "datetime-local");
