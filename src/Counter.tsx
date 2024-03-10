import React, {Dispatch, SetStateAction} from 'react';
import s from './Counter.module.css';
import {Button} from './component/Button';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './store/store';
import {setCounterValueAC,} from './reducers/counter.reducer';

type PropsType = {
    updateMode: () => void
}

export const Counter: React.FC<PropsType> = ({updateMode}) => {

    const counterValue = useSelector<RootState, number>(state => state.counter.counterValue)
    const minValue = useSelector<RootState, number>(state => state.counter.minValue)
    const maxValue = useSelector<RootState, number>(state => state.counter.maxValue)

    const isMaxValue = counterValue === maxValue;
    const decDisableBtn = counterValue === minValue;
    const rstDisableBtn = counterValue === minValue;

    const dispatch = useDispatch()

    const incCounter = () => {
        dispatch(setCounterValueAC(counterValue + 1))
    };
    const decCounter = () => {
        dispatch(setCounterValueAC(counterValue - 1))
    }

    const resetCounter = (minValue: number) => {
        dispatch(setCounterValueAC(minValue))
    }


    return <div className={s.counter}>
        <p className={isMaxValue ? s.red : ''}>{counterValue}</p>
        <div className={s.button_box}>
            <Button className={s.btn_inc} disabled={isMaxValue} onClick={incCounter}>+1</Button>
            <Button className={s.btn_rst} disabled={rstDisableBtn} onClick={()=>resetCounter(minValue)}>reset</Button>
            <Button className={s.btn_dec} disabled={decDisableBtn} onClick={decCounter}>-1</Button>
            <Button className={s.btn_stn} onClick={updateMode}>Setting</Button>
        </div>
    </div>
};