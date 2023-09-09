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

    const incDisableBtn = value === maxValue;
    const decDisableBtn = value === minValue;
    const rstDisableBtn = value === minValue;


    return <div className={s.counter}>
        <Input value={value}/>
        <div className={s.button_box}>
            <Button disabled={incDisableBtn} callBack={incCounter} name={'+'}/>
            <Button disabled={rstDisableBtn} callBack={resetCounter} name={'reset'}/>
            <Button disabled={decDisableBtn} callBack={decCounter} name={'-'}/>
            <Link to={'/setting'}>
                <Button callBack={()=>{}} name={'setting'}/>
            </Link>
        </div>
    </div>
};