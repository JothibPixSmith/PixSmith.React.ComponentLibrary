import React from "react";
import { Button as MButton, styled } from '@mui/material';
import ButtonProps from "./ButtonProps";

const Button = styled(MButton)<ButtonProps>(((_) => ({
    
})));

export default function StyledComposition(props: ButtonProps){
return <Button {...props}/>;
}
