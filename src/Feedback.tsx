import {Button} from "@mui/material"
import './Feedback.scss'
import {Dialog} from "./Dialog.tsx";

interface OpenFeedbackWinBtnProps {
    onClick?: () => void
}

export const OpenFeedbackWinBtn = ({onClick}: OpenFeedbackWinBtnProps) =>
    <Button id={'open-feedback-win-btn'} onClick={onClick}>
    Feedback
</Button>

export const FeedbackDialog = (props: { show: boolean }) => <Dialog show={props.show}>
    <div>

    </div>
</Dialog>