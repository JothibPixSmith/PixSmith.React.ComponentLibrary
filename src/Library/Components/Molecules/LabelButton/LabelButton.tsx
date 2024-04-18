import React from 'react'
import Label from '../../Atoms/Label/Label'
import Button from '../../Atoms/Button/Button'
import LabelButtonProps from './LabelButtonProps'
import { Grid } from '@mui/material'


export default function LabelButton(props: LabelButtonProps) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Label>{props.LabelText}</Label>
            </Grid>
            <Grid item xs={6}>
                <Button onClick={props.onClick}>{props.ButtonText}</Button>
            </Grid>
        </Grid>
    );
}