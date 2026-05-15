import {Dialog} from "../dialog/Dialog.tsx";
import {TextField} from "@mui/material";
import './ShareDataDialog.scss'
import {URLSearchParams} from "node:url";

export function ShareDataDialog(props: {
    show: boolean,
    setShowShareDataDialog: (value: (((prevState: boolean) => boolean) | boolean)) => void,
    startLine: number,
    endLine: number,
    searchParams: URLSearchParams
}) {
    const getValue = () => {
        return `${window.location.href}` +
            (props.searchParams.has('displayedRange') ? '' : `&displayedRange=${props.startLine}-${props.endLine}`)
    }
    return <Dialog show={props.show} title={'Share Encoding demo state as URL'} className={'share-data-dialog'}
                   setHide={() => props.setShowShareDataDialog(false)}>
        <TextField multiline={true} rows={10} value={getValue()}/>
    </Dialog>
}