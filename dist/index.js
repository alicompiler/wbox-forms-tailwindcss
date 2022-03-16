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
import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import { AllElementsExample } from "./__examples/AllElementsExample";
import "./tailwind.css";
import { ThemeProvider } from "./Theme/ThemeContext";
import { unStyledTheme } from "./Theme/UnStyledTheme";
import { simpleTheme } from "./Theme/SimpleTheme";
import { underlinedTheme } from "./Theme/UnderlinedTheme";
import { solidTheme } from "./Theme/SolidTheme";
import { LayoutExample } from "./__examples/LayoutExample";
ReactDOM.render(_jsx(React.StrictMode, { children: _jsx(App, {}, void 0) }, void 0), document.getElementById('root'));
function App() {
    var toggleModeCallback = useCallback(function () {
        var body = document.querySelector('body');
        var isDark = body.classList.contains('dark');
        if (isDark) {
            body.classList.remove("dark");
            body.style.backgroundColor = '#FFF';
        }
        else {
            body.classList.add('dark');
            body.style.backgroundColor = '#2B2B2B';
        }
    }, []);
    var _a = useState(simpleTheme), theme = _a[0], setTheme = _a[1];
    return _jsxs("div", __assign({ className: 'p-8' }, { children: [_jsxs("div", __assign({ className: 'p-8 flex items-center justify-between bg-blue-400 rounded' }, { children: [_jsx("button", __assign({ onClick: toggleModeCallback }, { children: "TOGGLE MODE" }), void 0), _jsxs("div", { children: [_jsx("button", __assign({ className: 'p-2 border mx-2', onClick: function () { return setTheme(unStyledTheme); } }, { children: "UN-STYLED THEME" }), void 0), _jsx("button", __assign({ className: 'p-2 border mx-2', onClick: function () { return setTheme(simpleTheme); } }, { children: "SIMPLE THEME" }), void 0), _jsx("button", __assign({ className: 'p-2 border mx-2', onClick: function () { return setTheme(underlinedTheme); } }, { children: "UNDERLINED THEME" }), void 0), _jsx("button", __assign({ className: 'p-2 border mx-2', onClick: function () { return setTheme(solidTheme); } }, { children: "SOLID THEME" }), void 0)] }, void 0)] }), void 0), _jsx("br", {}, void 0), _jsx("br", {}, void 0), _jsx("br", {}, void 0), _jsx("br", {}, void 0), _jsxs(ThemeProvider, __assign({ value: theme }, { children: [_jsx(AllElementsExample, {}, void 0), _jsx("br", {}, void 0), _jsx("br", {}, void 0), _jsx("hr", {}, void 0), _jsx("br", {}, void 0), _jsx("br", {}, void 0), _jsx(LayoutExample, {}, void 0)] }), void 0)] }), void 0);
}
