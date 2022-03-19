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
import { Form } from "wbox-forms";
import { fieldsMap } from "./FieldsMap";
import { Fragment } from "react";
import { LayoutButton } from "./Components/LayoutButton";
var FormFactoryBase = /** @class */ (function () {
    function FormFactoryBase() {
        this.fieldTypeMap = fieldsMap;
    }
    FormFactoryBase.prototype.create = function (configuration) {
        var formProps = configuration.formConfig;
        return _jsxs(Form, __assign({}, formProps, { children: [this.renderFields(configuration), this.renderButton(configuration)] }));
    };
    FormFactoryBase.prototype.renderFields = function (configuration) {
        var _this = this;
        var fields = configuration.fieldConfig;
        var keys = Object.keys(fields);
        return keys.map(function (key, index) {
            var fieldConfig = fields[key].fieldConfig;
            var type = fields[key].type;
            var field = _this.getFieldElement(type, fieldConfig);
            return _jsx(Fragment, { children: _this.renderField(key, field, fieldConfig, configuration, index, keys.length) }, index);
        });
    };
    FormFactoryBase.prototype.getFieldElement = function (type, fieldProps) {
        var FieldComponent = this.fieldTypeMap[type];
        return _jsx(FieldComponent, __assign({}, fieldProps), fieldProps.name);
    };
    FormFactoryBase.prototype.renderButton = function (configuration) {
        return _jsx(LayoutButton, { position: configuration.extraOptions.button.position, text: configuration.extraOptions.button.text, className: configuration.extraOptions.button.className, classNameBuilder: configuration.extraOptions.classNameBuilder });
    };
    return FormFactoryBase;
}());
export { FormFactoryBase };
