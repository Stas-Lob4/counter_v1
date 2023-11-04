import {InitialStateType} from '../reducers/counter_reducer';

export const initMaxValue = 5;
export const initMinValue = 0;

export const state: InitialStateType = {
    maxValue: initMaxValue,
    minValue: initMinValue,
    counterValue: initMinValue
}
export const saveLocalStorageData = (key:string, value: number) => {
    localStorage.setItem(key, JSON.stringify(value))
}