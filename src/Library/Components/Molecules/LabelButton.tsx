import React from 'react'
import Label from '../Atoms/Label/Label'
import Button from '../Atoms/Button/Button'
import LabelButtonProps from './LabelButtonProps'
import { Grid } from '@mui/material'


export default function LabelButton(props: LabelButtonProps) {
    return (
        <Grid>
            <Label>{props.LabelText}</Label>
            <Button onClick={props.onClick}>{props.ButtonText}</Button>
        </Grid>
    )
}