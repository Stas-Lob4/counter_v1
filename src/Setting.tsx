import React, {ChangeEvent, useReducer, useState} from 'react';
import s from './Setting.module.css'
import {Input} from './component/Input';
import {Button} from './component/Button';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './store/store';
import {setCounterValueAC, setMaxValueAC, setMinValueAC} from './reducers/counter.reducer';


type PropsType = {
    updateMode: () => void
}
export const Setting: React.FC<PropsType> = ({updateMode}) => {

    const dispatch = useDispatch()

    const minValue = useSelector<RootState, number>(state => state.counter.minValue)
    const maxValue = useSelector<RootState, number>(state => state.counter.maxValue)

    const [minCount, setMinCount] = useState(minValue)
    const [maxCount, setMaxCount] = useState(maxValue)
    const updateMaxValue = (maxValue: number) => {
        //saveLocalStorageData('maxCounterValue', maxCount)
        dispatch(setMaxValueAC(maxValue))
    }
    const updateMinValue = (minValue: number) => {
        //saveLocalStorageData('minCounterValue', minCount)
        dispatch(setMinValueAC(minValue))
        dispatch(setCounterValueAC(minValue))
    }


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
        updateMode()
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
            <Button disabled={isError} onClick={setNewValueSetting} >SET</Button>
        </div>
    );
};
