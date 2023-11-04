import React, {useReducer, useState} from 'react';
import s from './App..module.css';
import {Counter} from './Counter';
import {HashRouter, Route, Routes} from 'react-router-dom';
import {Setting} from './Setting';
import {initMaxValue, initMinValue} from './data/data_init';
import {setCounterValueAC, setMaxValueAC, setMinValueAC} from './reducers/counter_reducer';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './store/store';

function App() {

    // let valueAsString = localStorage.getItem('counterValue')
    // let valueMinValue = localStorage.getItem('minCounterValue')
    // let valueMaxValue = localStorage.getItem('maxCounterValue')


    const dispatch = useDispatch()

    const counterValue = useSelector<RootState, number>(state => state.counter.counterValue)
    const minValue = useSelector<RootState, number>(state => state.counter.minValue)
    const maxValue = useSelector<RootState, number>(state => state.counter.maxValue)



    const incCounter = () => {
        const newValue = counterValue + 1
        // saveLocalStorageData('counterValue', newValue)
        dispatch(setCounterValueAC(newValue))
    };
    const decCounter = () => {
        const newValue = counterValue - 1
        //saveLocalStorageData('counterValue', newValue)
        dispatch(setCounterValueAC(newValue))
    }
    const updateMaxValue = (maxValue: number) => {
        //saveLocalStorageData('maxCounterValue', maxCount)
        dispatch(setMaxValueAC(maxValue))
    }
    const updateMinValue = (minValue: number) => {
        //saveLocalStorageData('minCounterValue', minCount)
        dispatch(setMinValueAC(minValue))
        resetCounter(minValue)
    }
    const resetCounter = (minValue: number) => {
        //localStorage.clear()
        dispatch(setCounterValueAC(minValue))
    }

    return (
        <div className={s.App}>
            <HashRouter>
                <Routes>
                    <Route path = {'/'}
                           element = {
                               <Counter
                                   counterValue={counterValue}
                                   minValue={minValue}
                                   maxValue={maxValue}
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
            </HashRouter>
        </div>
    );
}

export default App;
