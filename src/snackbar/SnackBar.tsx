import {Alert, AlertColor, Button, Slide, Snackbar, SnackbarContent} from "@mui/material";
import {useEffect, useState} from "react";
import './SnackBar.scss'

interface SnackBarProps {
    msg: string,
    status: AlertColor,
    setStatus: (value: (((prevState: AlertColor) => AlertColor) | AlertColor)) => void
}

/**
 * Toast/snackbar. Will show unless msg is empty string.
 */
export function SnackBar({msg, status, setStatus}: SnackBarProps) {
    const [snackbarMessage, setSnackbarMessage] = useState('')
    const [show, setShow] = useState(true)

    useEffect(() => {
        setSnackbarMessage(msg)
        setShow(!!msg)
    }, [msg]);

    const onClose = () => {
        setShow(false)
        setTimeout(() => setStatus('success'), 1000)
    }

    return <Snackbar
        open={show}
        onClose={onClose}
        slots={{transition: Slide}}
        autoHideDuration={status === 'success' ? 5000 : undefined}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        action={<Button>OK</Button>}>
        <Alert variant="filled" severity={status} onClose={status === 'warning' ? onClose : undefined}>
            {snackbarMessage}
        </Alert>
    </Snackbar>
}