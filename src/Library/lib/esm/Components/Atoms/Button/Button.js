import React from "react";
import { Button as MButton } from '@mui/material';
var Button = function (props) {
    return (React.createElement(MButton, { onClick: props.onClick, variant: props.variant }, props.children));
};
export default Button;
