import React, {useContext} from "react";
import {unStyled} from "./UnStyledTheme";
import {solidTheme} from "./SolidTheme";
import {simpleTheme} from "./SimpleTheme";
import {underlinedTheme} from "./UnderlinedTheme";
import {Theme} from "./Theme";

export const ThemeContext = React.createContext<Theme>(underlinedTheme);

export const ThemeProvider = ThemeContext.Provider;

export function useTheme(): Theme {
    return useContext(ThemeContext);
}