import {Dialog} from "../dialog/Dialog.tsx";
import './SelectScreenshotAreaDialog.scss'
import {Button} from "@mui/material";

export function SelectScreenshotAreaDialog(props: { show: boolean, onClick: () => Promise<void>,
    autoScroll: boolean }) {
    const getTitle = () => {
        return props.autoScroll
            ? 'Press Take Screenshot to scroll to demo start and take screenshot.'
            : 'Scroll to select screenshot area and click the button.';
    }
    return <Dialog show={props.show} title={getTitle()}
                   setHide={props.onClick}
                   allowScroll={true} className={'select-screenshot-area-dialog'}>
        <>
            <p>When selecting capture source, choose this window (not tab), for optimal cropping.</p>
            <p>You might have to give your browser permission for screen captures.</p>
            <Button className={'take-screenshot-button'} onClick={props.onClick}>Take screenshot</Button>
        </>
    </Dialog>;
}