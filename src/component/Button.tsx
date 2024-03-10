import React from 'react';

type PropsType = {
    onClick?: () => void
    children: string
    disabled?: boolean
    className?: string
}
export const Button: React.FC<PropsType> = ({onClick, children, disabled, className}) => {
    return <button className={className} disabled={disabled} onClick={onClick}>{children}</button>
};
