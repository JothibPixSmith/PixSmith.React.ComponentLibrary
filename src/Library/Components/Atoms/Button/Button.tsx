import React from "react";
import { Button as MButton } from '@mui/material';
import ButtonProps from "./ButtonProps";


const Button: React.FC<ButtonProps> = props => {

    return (<MButton onClick={props.onClick}
        variant={props.variant}>
        {props.children}
    </MButton>)
}




export default Button;