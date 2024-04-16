import React from 'react';

export default interface LabelButtonProps{
    LabelText:string;
    ButtonText:string;
    onClick: (event: React.MouseEvent<HTMLElement>) => void
}