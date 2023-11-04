import React, {ChangeEvent, useReducer, useState} from 'react';
import s from './Setting.module.css'
import {Input} from './component/Input';
import {Button} from './component/Button';
import {Link} from 'react-router-dom';
import {state} from './data/data_init';


type PropsType = {
    maxValue: number
    minValue: number
    updateMaxValue: (maxValue: number) => void
    updateMinValue: (minValue: number) => void
}
export const Setting: React.FC<PropsType> = ({updateMaxValue, updateMinValue, minValue, maxValue}) => {
    const [minCount, setMinCount] = useState(minValue)
    const [maxCount, setMaxCount] = useState(maxValue)

    const handleMinInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value, 10);
        if (!isNaN(newValue)) {
            setMinCount(newValue);
        }
    };
    const handleMaxInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value, 10);
        if (!isNaN(newValue)) {
            setMaxCount(newValue);
        }
    };

    const setNewValueSetting = () => {
        updateMaxValue(maxCount)
        updateMinValue(minCount)
    }


    let isErrorInputMinValue = isNaN(minCount) || maxCount <= minCount || minCount < 0
    let isErrorInputMaxValue = minCount >= maxCount || isNaN(maxCount) || maxCount <= 0
    let isError = isErrorInputMinValue || isErrorInputMaxValue

    return (
        <div className={s.setting}>
            <div className={s.setting_inputs_box}>
                <div className={s.setting_value_box}>
                    <span>max value</span>
                    <Input
                        className={(isErrorInputMaxValue ? s.red : '')}
                        type={'number'}
                        value={maxCount}
                        onChange={handleMaxInputChange}
                        onBlur={handleMaxInputChange}
                    />
                </div>
                <div className={s.setting_value_box}>
                    <span>min value</span>
                    <Input
                        className={(isErrorInputMinValue ? s.red : '')}
                        type={'number'}
                        value={minCount}
                        onChange={handleMinInputChange}
                        onBlur={handleMinInputChange}
                    />
                </div>
            </div>
            <Link to={'/'}>
                <Button disabled={isError} callBack={setNewValueSetting}>SET</Button>
            </Link>
        </div>
    );
};
