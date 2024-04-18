import React from "react";
import { Dialog as MDialog, DialogProps, styled } from '@mui/material';

const Dialog = styled(MDialog)<DialogProps>(((_) => ({

})));

export default function StyledComponents(props: DialogProps) {
    return <Dialog {...props} />;
}