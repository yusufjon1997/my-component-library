import React from 'react';
import './Button.css';

interface ButtonProps {
    label : string
}

const Button = (props : ButtonProps) => {
    console.log('this is button')
    return <button>{props.label}</button>
}

export default Button ; 