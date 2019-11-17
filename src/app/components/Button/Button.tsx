import React, { StatelessComponent } from 'react';
import './Button.scss';

interface ButtonProps {
    label: string;
    componentClass: string;
    customClass?: string;
    action: Function;
}

const Button: StatelessComponent<ButtonProps> = ({componentClass, customClass, action, label}) => {
    return (
        <button
            className={`${customClass} ${componentClass}`}
            onClick={() => action()}
        >
            {label}
        </button>
    );
};

export default Button;