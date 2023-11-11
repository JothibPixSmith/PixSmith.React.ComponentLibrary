import React from "react";
import { Button as MButton } from '@mui/material';

type Props = {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    children?: React.ReactNode;
    variant?: 'text' | 'outlined' | 'contained';
};
const Button: React.FC<Props> = props => {

    return (<MButton onClick={props.onClick}
        variant={props.variant}>
        {props.children}
        yo
    </MButton>)
}




export default Button;