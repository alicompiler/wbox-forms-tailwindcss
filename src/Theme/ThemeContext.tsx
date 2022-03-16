import React, {useContext} from "react";
import {Theme} from "./Theme";
import {simpleTheme} from "./SimpleTheme";

export const ThemeContext = React.createContext<Theme>(simpleTheme);

export const ThemeProvider = ThemeContext.Provider;

export function useTheme(): Theme {
    return useContext(ThemeContext);
}