import {Dialog} from "../dialog/Dialog.tsx";
import {TextField} from "@mui/material";
import './ShareDataDialog.scss'

export function ShareDataDialog(props: {
    show: boolean,
    setShowShareDataDialog: (value: (((prevState: boolean) => boolean) | boolean)) => void
}) {
    return <Dialog show={props.show} title={'Share Encoding demo state as URL'} className={'share-data-dialog'}
                   setHide={() => props.setShowShareDataDialog(false)}>
        <TextField multiline={true} rows={10}/>
    </Dialog>
}