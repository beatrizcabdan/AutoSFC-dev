import {Dialog} from "../dialog/Dialog.tsx";
import {Button, TextField} from "@mui/material";
import './ShareDataDialog.scss'
import {URLSearchParams} from "node:url";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {useEffect, useRef} from "react";

export function ShareDataDialog(props: {
    show: boolean,
    setShowShareDataDialog: (value: (((prevState: boolean) => boolean) | boolean)) => void,
    startLine: number,
    endLine: number,
    searchParams: URLSearchParams,
    setSnackbarMessage: (value: (((prevState: string) => string) | string)) => void
}) {
    const textFieldRef = useRef<HTMLDivElement>()

    const getValue = () => {
        return `${window.location.href}` +
            (props.searchParams.has('displayedRange') ? '' : `&displayedRange=${props.startLine}-${props.endLine}`)
    }

    const onButtonClick = () => {
        navigator.clipboard.writeText(getValue())
            .then(() => {
                props.setShowShareDataDialog(false)
                props.setSnackbarMessage('URL copied to clipboard!')
            })
    }

    useEffect(() => {
        if (props.show) {
            textFieldRef.current?.focus()
        }
    }, [props.show]);

    return <Dialog show={props.show} title={'Share Encoding demo state as URL'} className={'share-data-dialog'}
                   setHide={() => props.setShowShareDataDialog(false)}>
        <>
            <TextField multiline={true} rows={10} value={getValue()} autoFocus inputRef={textFieldRef}
                       onFocus={(event) => {
                           event.target.select();
                       }}/>
            <Button startIcon={<ContentCopyIcon />} onClick={onButtonClick}
                    className={'blue-border-button'}>Copy and close</Button>
        </>
    </Dialog>
}