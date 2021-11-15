import React, {useContext} from "react";
import {unStyled} from "./UnStyledTheme";

//todo : support coloring system

export interface Theme {
    inputClassName: string;
    textAreaClassName: string;
    selectClassName: string;
    checkboxClassName: string;
}

export const ThemeContext = React.createContext<Theme>(unStyled);

export const ThemeProvider = ThemeContext.Provider;

export function useTheme(): Theme {
    return useContext(ThemeContext);
}