import React from 'react';

type PropsType = {
    callBack: () => void
    name: string
    disabled?: boolean
}
export const Button: React.FC<PropsType> = ({callBack, name, disabled}) => {
    return <button disabled={disabled} onClick={callBack}>{name}</button>
};
