import React from 'react';
import './style.css';


interface ButtonProps {
    label : string
}

const Button = (props : ButtonProps) => {
    return <button>{props.label}</button>
}

export default Button ; 