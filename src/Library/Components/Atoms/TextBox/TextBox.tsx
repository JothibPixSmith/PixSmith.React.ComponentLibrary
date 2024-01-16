import React from "react";
import { Input, styled } from '@mui/material';
import TextBoxProps from "./TextBoxProps";

const TextBox = styled(Input)<TextBoxProps>((({theme}) => ({
    
})));

function StyledComposition(props: TextBoxProps){
return <TextBox {...props}/>;
}

export default function Composition(props: TextBoxProps){
    return StyledComposition(props);
};;