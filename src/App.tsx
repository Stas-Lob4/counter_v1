import React, {useEffect, useState} from 'react';
import s from './App..module.css';
import {Counter} from './Counter';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Setting} from './Setting';
import {initMaxValue, initMinValue, saveLocalStorageData} from './data/data_init';

function App() {

    let valueAsString = localStorage.getItem('counterValue')
    let valueMinValue = localStorage.getItem('minCounterValue')
    let valueMaxValue = localStorage.getItem('maxCounterValue')


    const [minValue, setMinValue] = useState(valueMinValue ?  +valueMinValue : initMinValue);
    const [maxValue, setMaxValue] = useState(valueMaxValue ?  +valueMaxValue : initMaxValue);
    const initValue = () => valueAsString ? JSON.parse(valueAsString) : minValue
    const [counter, setCounter] = useState<number>(initValue);


    const incCounter = () => {
        const newValue = counter + 1
        saveLocalStorageData('counterValue', newValue)
        setCounter(newValue)
    };
    const decCounter = () => {
        const newValue = counter - 1
        saveLocalStorageData('counterValue', newValue)
        setCounter(newValue)
    }
    const updateMaxValue = (maxCount: number) => {
        saveLocalStorageData('maxCounterValue', maxCount)
        setMaxValue(maxCount)
    }
    const updateMinValue = (minCount: number) => {
        saveLocalStorageData('minCounterValue', minCount)
        setMinValue(minCount)
        setCounter(minCount)
    }
    const resetCounter = () => {
        localStorage.clear()
        setCounter(minValue);
    }

    return (
        <div className={s.App}>
            <BrowserRouter >
                <Routes>
                    <Route path = {'/'}
                           element = {
                               <Counter
                                   value={counter}
                                   maxValue={maxValue}
                                   minValue={minValue}
                                   incCounter={incCounter}
                                   decCounter={decCounter}
                                   resetCounter={resetCounter}
                               />
                           }
                    />
                    <Route path = {'/setting'}
                           element = {
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
