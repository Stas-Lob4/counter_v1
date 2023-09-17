import React, {ChangeEvent, FocusEventHandler, useState} from 'react';
import s from './Setting.module.css'
import {Input} from './component/Input';
import {Button} from './component/Button';
import {NavLink} from 'react-router-dom';


type PropsType = {
    maxValue: number
    minValue: number
    updateMaxValue: (maxValue: number) => void
    updateMinValue: (minValue: number) => void
    setError: (error: string) => void
    error: string
}
export const Setting: React.FC<PropsType> = ({updateMaxValue, updateMinValue, minValue, maxValue, setError, error}) => {

    const [minNum, setMinNum] = useState(minValue);
    const [maxNum, setMaxNum] = useState(maxValue);

    const [errorMinNum, setErrorMinNum] = useState(false);
    const [errorMaxNum, setErrorMaxNum] = useState(false);


    const handleMinInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.currentTarget.value, 10);
        if (newValue < 0) {
            setMinNum(newValue);
            setError('Incorrect value!')
            setErrorMinNum(true)
        } else {
            setMinNum(newValue);
            setError('')
            setErrorMinNum(false)
        }
    };
    const handleMaxInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.currentTarget.value, 10);
        setMaxNum(newValue);
        if (newValue < minNum && newValue < 0) {
            setError('Incorrect value!')
            setErrorMaxNum(true)
        }
        setError('')
        setErrorMaxNum(false)
    };
    const handleMinInputWheel = (e: React.WheelEvent<HTMLInputElement>) => {
        e.preventDefault();
        const newValue = minNum + (e.deltaY > 0 ? -1 : 1);
        setMinNum(newValue);
        if (newValue < 0) {
            setError('Incorrect value!')
            setErrorMinNum(true)
        } else {
            setError('')
            setErrorMinNum(false)
        }
    };
    const handleMaxInputWheel = (e: React.WheelEvent<HTMLInputElement>) => {
        e.preventDefault();
        const newValue = maxNum + (e.deltaY > 0 ? -1 : 1);
        setMaxNum(newValue);
        if (newValue < minNum && newValue < 0) {
            setMaxNum(newValue);
            setError('Incorrect value!')
            setErrorMaxNum(true)
        } else {
            setError('')
            setErrorMaxNum(false)
        }

    };
    const onClickBtnSettingHandler = () => {
        updateMaxValue(maxNum);
        updateMinValue(minNum);
    }

    let isErrorInputMinValue = isNaN(minNum) || maxNum <= minNum || minNum < 0
    let isErrorInputMaxValue = minNum >= maxNum ||  isNaN(maxNum)
    let isError = error !== '' || errorMaxNum || errorMinNum || minNum >= maxNum ||  isNaN(maxNum) || isNaN(minNum)

    return (
        <div className={s.setting}>
            <div className={s.setting_inputs_box}>
                <div className={s.setting_value_box}>
                    <span>max value</span>
                    <Input
                        className={(isErrorInputMaxValue ? s.red : '')}
                        type={'number'}
                        value={maxNum}
                        onChange={handleMaxInputChange}
                        onWheel={handleMaxInputWheel}
                        onBlur={handleMaxInputChange}
                    />
                </div>
                <div className={s.setting_value_box}>
                    <span>min value</span>
                    <Input
                        className={(isErrorInputMinValue ? s.red : '')}
                        type={'number'}
                        value={minNum}
                        onChange={handleMinInputChange}
                        onWheel={handleMinInputWheel}
                        onBlur={handleMinInputChange}
                    />
                </div>
            </div>
            <NavLink to={'/'}>
                <Button disabled={isError} callBack={onClickBtnSettingHandler}>set</Button>
            </NavLink>
        </div>
    );
};
