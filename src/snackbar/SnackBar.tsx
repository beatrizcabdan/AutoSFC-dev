import {Slide, Snackbar} from "@mui/material";
import {useEffect, useState} from "react";
import './SnackBar.scss'

interface SnackBarProps {
    msg: string,
    status: string,
    setStatus: (value: (((prevState: string) => string) | string)) => void
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
        message={snackbarMessage}
        autoHideDuration={5000}
        anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        className={status}
    />
}