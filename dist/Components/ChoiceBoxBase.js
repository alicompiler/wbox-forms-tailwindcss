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
import { orientedWithStateBasedClassNameSelector, stateBasedClassNameSelector } from "../Utils/ClassNameBuilder";
export function ChoiceBoxBase(props) {
    var name = props.name, type = props.type, classNameBuilder = props.classNameBuilder, classNames = props.classNames, orientation = props.orientation, dataTestId = props.dataTestId, field = props.field, checked = props.checked, value = props.value, handleChange = props.handleChange, text = props.text;
    var labelClassName = classNameBuilder.build(undefined, orientedWithStateBasedClassNameSelector(classNames.label, orientation, field));
    var inputClassName = classNameBuilder.build(undefined, orientedWithStateBasedClassNameSelector(classNames.input, orientation, field));
    var spaceClassName = classNameBuilder.build(undefined, orientedWithStateBasedClassNameSelector(classNames.space, orientation, field));
    var textClassName = classNameBuilder.build(undefined, stateBasedClassNameSelector(classNames.optionText, field));
    return _jsxs("label", __assign({ className: labelClassName }, { children: [_jsx("input", { type: type, id: dataTestId, name: name, className: inputClassName, checked: checked, value: value, onChange: handleChange }), _jsx("span", { className: spaceClassName }), _jsx("span", __assign({ className: textClassName }, { children: text }))] }));
}
