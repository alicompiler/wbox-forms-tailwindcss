import React, {useContext} from "react";
import {solidTheme} from "./SolidTheme";
import {Theme} from "./Theme";

export const ThemeContext = React.createContext<Theme>(solidTheme);

export const ThemeProvider = ThemeContext.Provider;

export function useTheme(): Theme {
    return useContext(ThemeContext);
}