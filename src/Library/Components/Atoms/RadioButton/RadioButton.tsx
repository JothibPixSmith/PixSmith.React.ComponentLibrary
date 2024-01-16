import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioButtonProps from "./RadioButtonnProps";
import { styled } from '@mui/material/styles';


const RadioButton = styled(Radio)<RadioButtonProps>((({theme}) => ({
    
})));

function StyledComposition(props: RadioButtonProps){
return <RadioButton {...props}/>;
}

StyledComposition.muiName = 'Radio';

export default function Composition(props: RadioButtonProps){
    return StyledComposition(props);
};