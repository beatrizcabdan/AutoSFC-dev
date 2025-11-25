import {Button} from "@mui/material"
import './Feedback.scss'
import {Dialog} from "./Dialog.tsx";
import React, {Dispatch, FormEvent, SetStateAction, useState} from "react";

interface OpenFeedbackWinBtnProps {
    onClick?: () => void
}

// TODO: decide on pos for this on mobile
export const OpenFeedbackWinBtn = ({onClick}: OpenFeedbackWinBtnProps) =>
    <Button id={'open-feedback-win-btn'} onClick={onClick}>
    Feedback
</Button>

export const FeedbackDialog = (props: {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>> }) => {
    const [submittable, setSubmittable] = useState(false)

    function onSubmit(e: FormEvent) {
        if (!submittable) {
            e.preventDefault()
            return
        }
        props.setShow(false);
    }

    function onCancel() {
        props.setShow(false);
    }

    return <Dialog show={props.show} title={'We love feedback!'}>
        <div>
            <form method="dialog" onSubmit={onSubmit}>
                <div className={'form-buttons'}>
                    <Button type={'submit'} className={`ok-button button ${submittable ? 'enabled' : 'disabled'}`}
                            disabled={!submittable}>OK</Button>
                    <Button onClick={onCancel} className={'button'}>Cancel</Button>
                </div>
            </form>
        </div>
    </Dialog>
}