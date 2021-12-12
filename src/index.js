import React from 'react';
import ReactDOM from 'react-dom';
import {AllElementsExample} from "./__examples/AllElementsExample";
import "./tailwind.css";

ReactDOM.render(
    <React.StrictMode>
        <div className={'p-8 dark'} style={{background: '#2b2b2b'}}>
            <AllElementsExample/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
