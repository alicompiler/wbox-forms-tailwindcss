import React from 'react';
import ReactDOM from 'react-dom';
import {UnStyledExample} from "./__examples/UnStyledExample";
import "./tailwind.css";

ReactDOM.render(
    <React.StrictMode>
        <div className={'p-8'}>
            <UnStyledExample/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
