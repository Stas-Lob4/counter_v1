import React from 'react';
import s from './Counter.module.css';
import {Input} from './component/Input';
import {Button} from './component/Button';
import { Link } from 'react-router-dom';

type PropsType = {
    value: number
    maxValue: number
    minValue: number
    incCounter: () => void
    decCounter: () => void
    resetCounter: () => void
}

export const Counter:React.FC<PropsType> = ({incCounter, decCounter, resetCounter, value, maxValue, minValue}) => {

    const isMaxValue = value === maxValue;
    const decDisableBtn = value === minValue;
    const rstDisableBtn = value === minValue;


    return <div className={s.counter}>
        <p className={isMaxValue ? s.red : ''}>{value}</p>
        <div className={s.button_box}>
            <Button className={s.btn_inc} disabled={isMaxValue} callBack={incCounter}>+1</Button>
            <Button className={s.btn_rst} disabled={rstDisableBtn} callBack={resetCounter}>reset</Button>
            <Button className={s.btn_dec} disabled={decDisableBtn} callBack={decCounter}>-1</Button>
            <Link to={'/setting'}>
                <Button className={s.btn_stn} callBack={()=>{}}>Setting</Button>
            </Link>
        </div>
    </div>
};