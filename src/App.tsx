import React, {useState} from 'react';
import s from './App..module.css';
import {Counter} from './Counter';
import {Setting} from './Setting';

function App() {

    const [mode, setMode] = useState<'counter'|'setting'>('counter')

    const setActiveMode = () => {
        setMode(mode === 'counter' ? 'setting' : 'counter')
    }

    return (
        <div className={s.App}>
            {mode === 'counter'
                ? <Counter updateMode={setActiveMode}/>
                : <Setting updateMode={setActiveMode}/>
            }
        </div>
    );
}

export default App;
