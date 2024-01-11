import React from "react";
import { Radio as MRadio } from '@mui/material';
import RadioButtonProps from "./RadioButtonnProps";

const RadioButton: React.FC<RadioButtonProps> = props => {

    return (<MRadio size={props.size} onClick={props.onClick}></MRadio>)
}

export default RadioButton;