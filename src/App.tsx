import React, {useEffect, useState} from 'react';
import s from './App..module.css';
import {Counter} from './Counter';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Setting} from './Setting';


function App() {

    let valueAsString = localStorage.getItem('counterValue')
    const initMaxValue = 5;

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(initMaxValue);
    const initValue = () => valueAsString ? JSON.parse(valueAsString) : minValue
    const [value, setValue] = useState(initValue);

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value]);
    useEffect(() => {
        localStorage.setItem('minCounterValue', JSON.stringify(minValue))
    }, [minValue]);
    useEffect(() => {
        localStorage.setItem('maxCounterValue', JSON.stringify(maxValue))
    }, [maxValue]);

    const incCounter = () => setValue(value + 1);
    const decCounter = () => setValue(value - 1)
    const updateMaxValue = (maxValue: number) => setMaxValue(maxValue)
    const updateMinValue = (minValue: number) => setMinValue(minValue)

    const resetCounter = () => {
        localStorage.clear()
        setValue(0);
    }

    return (
        <div className={s.App}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'}
                           element={
                               <Counter
                                   value={value}
                                   maxValue={maxValue}
                                   minValue={minValue}
                                   incCounter={incCounter}
                                   decCounter={decCounter}
                                   resetCounter={resetCounter}
                               />
                           }
                    />
                    <Route path={'/setting'}
                           element={
                               <Setting
                                   maxValue={maxValue}
                                   minValue={minValue}
                                   updateMaxValue={updateMaxValue}
                                   updateMinValue={updateMinValue}
                               />
                           }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
