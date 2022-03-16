import { jsx as _jsx } from "react/jsx-runtime";
import { checkboxValueSelector } from "wbox-forms";
import { ChoiceBoxBase } from "./ChoiceBoxBase";
import { withTailwindField } from "../HOCs/WithTailwindField";
import { useDefaults } from "../Defaults/DefaultsContext";
function Checkbox(props) {
    var _a, _b;
    var tailwindOptions = props.tailwindOptions;
    var defaults = useDefaults();
    var orientation = (_a = props.orientation) !== null && _a !== void 0 ? _a : defaults.checkboxOrientation;
    return _jsx(ChoiceBoxBase, { name: props.name, dataTestId: tailwindOptions.dataTestId, type: tailwindOptions.type, classNames: tailwindOptions.theme.checkboxClassName, classNameBuilder: tailwindOptions.classNameBuilder, orientation: orientation, field: props.field, checked: props.field.value, value: props.field.value, handleChange: props.handleChange, text: (_b = props.text) !== null && _b !== void 0 ? _b : '' }, void 0);
}
export default withTailwindField(Checkbox, "checkbox", { valueSelector: checkboxValueSelector });
