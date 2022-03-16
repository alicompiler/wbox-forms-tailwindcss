import React, { useContext } from "react";
import { DefaultClassNameBuilder } from "../Utils/ClassNameBuilder";
export var defaults = {
    checkboxOrientation: 'horizontal',
    radioButtonOrientation: 'horizontal',
    layout: {
        table: {
            spaceWidth: 16,
            labelAlignments: "center",
            labelWidth: 120
        },
        simple: {},
        shared: {
            buttonPosition: "end"
        }
    },
    classNameBuilder: function () { return new DefaultClassNameBuilder(); }
};
export var DefaultsContext = React.createContext(defaults);
export var DefaultsProvider = DefaultsContext.Provider;
export function useDefaults() {
    return useContext(DefaultsContext);
}
