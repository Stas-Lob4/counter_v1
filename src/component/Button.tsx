import React from 'react';

type PropsType = {
    callBack?: () => void
    children: string
    disabled?: boolean
    className?: string
}
export const Button: React.FC<PropsType> = ({callBack, children, disabled, className}) => {
    return <button className={className} disabled={disabled} onClick={callBack}>{children}</button>
};
