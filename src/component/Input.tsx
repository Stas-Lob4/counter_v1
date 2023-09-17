import React, {ChangeEvent, FocusEventHandler} from 'react';

type PropsType = {
    value: number
    type?: string
    min?: number
    max?: number
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onWheel?: (e: React.WheelEvent<HTMLInputElement>) => void
    onBlur?: (e: ChangeEvent<HTMLInputElement>) =>void
    onKeyPress?: (e: any) => void;
    className?: string
}

export const Input: React.FC<PropsType> = ({value, type,onChange, onWheel, min,max, onBlur, className}) => {
    return <input
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onWheel={onWheel}
                max={max}
                min={min}
                className={className}
    />
};
