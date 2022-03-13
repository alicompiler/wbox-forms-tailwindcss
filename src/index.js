import React, {useCallback, useState} from 'react';
import ReactDOM from 'react-dom';
import {AllElementsExample} from "./__examples/AllElementsExample";
import "./tailwind.css";
import {ThemeProvider} from "./Theme/ThemeContext";
import {unStyledTheme} from "./Theme/UnStyledTheme";
import {simpleTheme} from "./Theme/SimpleTheme";
import {underlinedTheme} from "./Theme/UnderlinedTheme";
import {solidTheme} from "./Theme/SolidTheme";
import {SimpleFormFactoryExample} from "./__examples/SimpleFormFactoryExample";

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);


function App() {
    const toggleModeCallback = useCallback(() => {
        const body = document.querySelector('body');
        const isDark = body.classList.contains('dark');
        if (isDark) {
            body.classList.remove("dark");
            body.style.backgroundColor = '#FFF';
        } else {
            body.classList.add('dark');
            body.style.backgroundColor = '#2B2B2B';
        }
    }, []);

    const [theme, setTheme] = useState(unStyledTheme);

    return <div className={'p-8'}>

        <div className={'p-8 flex items-center justify-between bg-blue-400 rounded'}>
            <button onClick={toggleModeCallback}>
                TOGGLE MODE
            </button>

            <div>
                <button className={'p-2 border mx-2'} onClick={() => setTheme(unStyledTheme)}>
                    UN-STYLED THEME
                </button>
                <button className={'p-2 border mx-2'} onClick={() => setTheme(simpleTheme)}>
                    SIMPLE THEME
                </button>
                <button className={'p-2 border mx-2'} onClick={() => setTheme(underlinedTheme)}>
                    UNDERLINED THEME
                </button>
                <button className={'p-2 border mx-2'} onClick={() => setTheme(solidTheme)}>
                    SOLID THEME
                </button>
            </div>

        </div>
        <br/><br/><br/><br/>
        <ThemeProvider value={theme}>
            <AllElementsExample/>
            <br/><br/><hr/><br/><br/>
            <SimpleFormFactoryExample />
        </ThemeProvider>
    </div>;
}