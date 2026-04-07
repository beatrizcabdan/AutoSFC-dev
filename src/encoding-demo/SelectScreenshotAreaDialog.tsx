import {Dialog} from "../dialog/Dialog.tsx";
import './SelectScreenshotAreaDialog.scss'
import {Button} from "@mui/material";

export function SelectScreenshotAreaDialog(props: { show: boolean, onClick: () => Promise<void>}) {
    return <Dialog show={props.show} title={'Scroll to select screenshot area and click the button.'}
                   setHide={props.onClick}
                   allowScroll={true} className={'select-screenshot-area-dialog'}>
        <>
            <p>You might have to give your browser permission for screen captures.</p>
            <Button className={'take-screenshot-button'} onClick={props.onClick}>Take screenshot</Button>
        </>
    </Dialog>;
}