import {Alert, AlertColor, Button, Slide, Snackbar, SnackbarContent} from "@mui/material";
import React, {useEffect, useState} from "react";
import './SnackBar.scss'

export interface SnackbarMessage {
    message: string,
    status: AlertColor
}

interface SnackBarProps {
    snackbarMessage: SnackbarMessage,
    setSnackbarMessage: (value: (((prevState: SnackbarMessage) => SnackbarMessage) | SnackbarMessage)) => void,
    navRef: React.MutableRefObject<HTMLDivElement | undefined>,
    mobileNavVisible?: boolean
}

/**
 * Toast/snackbar. Will show unless snackbarMessage.message is empty string.
 */
export function SnackBar({
                             snackbarMessage,
                             setSnackbarMessage,
                             navRef,
                             mobileNavVisible
                         }: SnackBarProps) {
    const AUTO_HIDE_DURATION = 5000

    const [show, setShow] = useState(true)
    const [verticalOffset, setVerticalOffset] = useState<number>(0)

    useEffect(() => {
        setShow(!!snackbarMessage.message)
        if (!!snackbarMessage.message) {
            console.log(snackbarMessage.message)
            const rect = navRef.current?.getBoundingClientRect()
            if (mobileNavVisible && rect?.top !== undefined && rect.top > 0) {
                setVerticalOffset(rect.height)
            } else {
                setVerticalOffset(0)
            }
        } else {
            setVerticalOffset(0)
        }
    }, [snackbarMessage, navRef, mobileNavVisible]);

    const onClose = () => {
        setShow(false)
        setTimeout(() => {
            setSnackbarMessage({message: '', status: 'success'})
        }, 1000)
    }

    return <Snackbar
        open={show}
        onClose={onClose}
        slots={{transition: Slide}}
        autoHideDuration={status === 'success' ? AUTO_HIDE_DURATION : undefined}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        sx={{translate: `0 -${verticalOffset}px`}}
        action={<Button>OK</Button>}>
        <Alert variant="filled" severity={snackbarMessage.status} onClose={snackbarMessage.status === 'warning' ? onClose : undefined}>
            {snackbarMessage.message}
        </Alert>
    </Snackbar>
}