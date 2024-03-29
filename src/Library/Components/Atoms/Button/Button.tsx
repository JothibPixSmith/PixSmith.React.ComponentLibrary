import React from "react";
import { Button as MButton, styled } from '@mui/material';
import ButtonProps from "./ButtonProps";

const Button = styled(MButton)<ButtonProps>((({theme}) => ({
    
})));

function StyledComposition(props: ButtonProps){
return <Button {...props}/>;
}

export default function Composition(props: ButtonProps){
    return StyledComposition(props);
};