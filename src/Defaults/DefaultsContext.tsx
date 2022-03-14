import React, {useContext} from "react";
import {Orientation} from "../Components/ChoiceBoxBase";
import {ButtonPosition} from "../Factories/Components/LayoutButton";
import {ClassNameBuilder, DefaultClassNameBuilder} from "../Utils/ClassNameBuilder";
import {LabelAlignment} from "../Factories/TableLayoutFormFactory";

export interface Defaults {
    checkboxOrientation: Orientation;
    radioButtonOrientation: Orientation;
    classNameBuilder: () => ClassNameBuilder,
    layout: {
        simple: {},
        table: {
            labelAlignments: LabelAlignment;
            labelWidth: number;
            spaceWidth: number;
        },
        shared: {
            buttonPosition: ButtonPosition;
        }
    }
}

export const defaults: Defaults = {
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
    classNameBuilder: () => new DefaultClassNameBuilder()
}

export const DefaultsContext = React.createContext<Defaults>(defaults);
export const DefaultsProvider = DefaultsContext.Provider;


export function useDefaults() {
    return useContext(DefaultsContext);
}