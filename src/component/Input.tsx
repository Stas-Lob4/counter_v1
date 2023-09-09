import React, {ChangeEvent} from 'react';

type PropsType = {
    value: number
    type?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onWheel?: (e: React.WheelEvent<HTMLInputElement>) => void
}

export const Input: React.FC<PropsType> = ({value, type,onChange, onWheel}) => {
    return <input type={type} value={value} onChange={onChange} onWheel={onWheel}/>
};
