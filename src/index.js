import React from 'react';
import ReactDOM from 'react-dom';
import {AllElementsExample} from "./__examples/AllElementsExample";
import "./tailwind.css";

ReactDOM.render(
    <React.StrictMode>
        <div className={'p-8'}>
            <AllElementsExample/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
