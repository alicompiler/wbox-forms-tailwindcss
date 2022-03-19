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
function TextArea(props) {
    var tailwindOptions = props.tailwindOptions;
    return _jsx("textarea", __assign({ name: props.name, "data-testid": tailwindOptions.dataTestId, className: tailwindOptions.classNameBuilder.build(props.className, stateBasedClassNameSelector(tailwindOptions.theme.textAreaClassName, props.field)), rows: props.rows, placeholder: props.placeholder }, tailwindOptions.inputProps, { value: props.field.value, onChange: props.handleChange }));
}
export default withTailwindField(TextArea, "textarea");
