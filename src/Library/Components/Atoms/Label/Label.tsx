import { InputLabel, styled } from "@mui/material";
import LabelProps from "./LabelProps";
import React from "react";

const Label = styled(InputLabel)<LabelProps>(((_) => ({
    
})));

function StyledComposition(props: LabelProps){
return <Label {...props}/>;
}

StyledComposition.muiName = 'Radio';

export default function Composition(props: LabelProps){
    return StyledComposition(props);
};