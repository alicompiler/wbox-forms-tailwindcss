import React, {useContext} from "react";
import {Orientation} from "../Components/ChoiceBoxBase";

export interface Defaults {
    checkboxOrientation: Orientation;
    radioButtonOrientation: Orientation;
}

const defaults: Defaults = {
    checkboxOrientation: 'horizontal',
    radioButtonOrientation: 'vertical'
}

export const DefaultsContext = React.createContext<Defaults>(defaults);
export const DefaultsProvider = DefaultsContext.Provider;


export function useDefaults() {
    return useContext(DefaultsContext);
}