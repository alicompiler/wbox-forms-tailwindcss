import React, { useContext } from "react";
import { simpleTheme } from "./SimpleTheme";
export var ThemeContext = React.createContext(simpleTheme);
export var ThemeProvider = ThemeContext.Provider;
export function useTheme() {
    return useContext(ThemeContext);
}
