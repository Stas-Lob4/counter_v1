import React, {ChangeEvent, useState} from 'react';
import s from './Setting.module.css'
import {Input} from './component/Input';
import {Button} from './component/Button';
import {Link} from 'react-router-dom';


type PropsType = {
    maxValue: number
    minValue: number
    updateMaxValue: (maxValue: number) => void
    updateMinValue: (minValue: number) => void
}
export const Setting: React.FC<PropsType> = ({updateMaxValue, updateMinValue, minValue, maxValue}) => {

    const [minNum, setMinNum] = useState(minValue);
    const [maxNum, setMaxNum] = useState(maxValue);

    const handleMinInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value, 10);
        if (!isNaN(newValue)) {
            setMinNum(newValue);
        }
    };
    const handleMaxInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value, 10);
        if (!isNaN(newValue)) {
            setMaxNum(newValue);
        }
    };
    const handleMinInputWheel = (e: React.WheelEvent<HTMLInputElement>) => {
        e.preventDefault();
        const newValue = minNum + (e.deltaY > 0 ? -1 : 1);
        if (newValue >= minValue && newValue <= maxNum) {
            setMinNum(newValue);
        }
    };

    const handleMaxInputWheel = (e: React.WheelEvent<HTMLInputElement>) => {
        e.preventDefault();
        const newValue = maxNum + (e.deltaY > 0 ? -1 : 1);
        if (newValue >= minNum && newValue <= maxValue) {
            setMaxNum(newValue);
        }
    };


    const onClickBtnSettingHandler = () => {
        updateMaxValue(maxNum);
        updateMinValue(minNum);
    }

    let isErrorInputMinValue = isNaN(minNum) || maxNum <= minNum || minNum < 0
    let isErrorInputMaxValue = minNum >= maxNum || isNaN(maxNum) || maxNum <= 0
    let isError = isErrorInputMinValue || isErrorInputMaxValue

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
                        onBlur={handleMinInputChange}
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
            <Link to={'/'}>
                <Button disabled={isError} callBack={onClickBtnSettingHandler}>SET</Button>
            </Link>
        </div>
    );
};
