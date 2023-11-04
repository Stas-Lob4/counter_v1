import React from 'react';
import s from './Counter.module.css';
import {Button} from './component/Button';
import {Link} from 'react-router-dom';

type PropsType = {
    counterValue: number
    maxValue: number
    minValue: number
    incCounter: () => void
    decCounter: () => void
    resetCounter: (minValue: number) => void
}

export const Counter: React.FC<PropsType> = ({incCounter, decCounter, resetCounter, counterValue, minValue, maxValue}) => {

    const isMaxValue = counterValue === maxValue;
    const decDisableBtn = counterValue === minValue;
    const rstDisableBtn = counterValue === minValue;


    return <div className={s.counter}>
        <p className={isMaxValue ? s.red : ''}>{counterValue}</p>
        <div className={s.button_box}>
            <Button className={s.btn_inc} disabled={isMaxValue} callBack={incCounter}>+1</Button>
            <Button className={s.btn_rst} disabled={rstDisableBtn} callBack={()=>resetCounter(minValue)}>reset</Button>
            <Button className={s.btn_dec} disabled={decDisableBtn} callBack={decCounter}>-1</Button>
            <Link to={'/setting'}>
                <Button className={s.btn_stn}>Setting</Button>
            </Link>
        </div>
    </div>
};