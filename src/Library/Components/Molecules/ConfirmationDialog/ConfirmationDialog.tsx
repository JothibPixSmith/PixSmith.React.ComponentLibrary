import React from 'react';
import Dialog from '../../Atoms/Dialog/Dialog';
import ConfirmationModalProps from './ConfirmationDialogProps';
import { Grid } from '@mui/material';
import { Button } from '../../..';

export default function ConfirmationModal(props: ConfirmationModalProps) {

    const onConfirmClick = (e: React.MouseEvent<HTMLButtonElement>) => {

        props.onConfirm(e);
    }

    const onCancelClick = (e: React.MouseEvent<HTMLButtonElement>) => {

        props.onCancel(e);
    }

    return (
        <Dialog
            open={props.isOpen}
        >
            <Grid container>
                <Grid item xs={12}>
                    <h1>{props.title}</h1>
                </Grid>
                <Grid item xs={12}>
                    {props.body}
                </Grid>
                <Grid container>
                    <Grid item xs={10} alignContent={"end"}>
                        <Button onClick={onConfirmClick} >
                            {props.confirmButtonText}
                        </Button>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={2}>
                        <Button onClick={onCancelClick}>
                            {props.cancelButtonText}
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Dialog>
    );
}