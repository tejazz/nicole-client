import React, { StatelessComponent } from 'react';
import './Button.scss';

interface ButtonProps {
    label: string;
    className: string;
    action: Function;
}

const Button: StatelessComponent<ButtonProps> = (props: ButtonProps) => {
    return (
        <button
            className={props.className}
            onClick={() => props.action()}
        >
            {props.label}
        </button>
    );
};

export default Button;