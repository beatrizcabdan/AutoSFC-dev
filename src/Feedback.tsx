import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Rating, TextField} from "@mui/material"
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
    const defaultFeedbackType = 'feedback'
    const [submittable, setSubmittable] = useState(false)
    const [feedbackType, setFeedbackType] = useState(defaultFeedbackType)

    function onSubmit(e: FormEvent) {
        if (!submittable) {
            e.preventDefault()
            return
        }
        console.log(e)
        props.setShow(false);
    }

    function onCancel() {
        props.setShow(false);
    }

    function onFeedbackTypeChange(_: React.ChangeEvent<HTMLInputElement>, value: string) {
        setFeedbackType(value)
    }

    return <Dialog show={props.show} title={'We love feedback!'}>
        <div id={'feedback-dialog-div'}>
            <p>Found a bug or have ideas on how to improve this website? Please let us know!</p>
            <form method="dialog" onSubmit={onSubmit}>
                <TextField multiline rows={4}/>
                <FormControl id={'feedback-type-radio-buttons'}>
                    {/*<FormLabel>Type</FormLabel>*/}
                    <RadioGroup defaultValue={defaultFeedbackType} onChange={onFeedbackTypeChange} row>
                        <FormControlLabel value={'feedback'} control={<Radio size={'small'}/>} label={'Feedback'}
                                          className={`radio-button ${feedbackType === 'feedback' ? 'selected' : ''}`}/>
                        <FormControlLabel value={'bug-report'} control={<Radio size={'small'}/>} label={'Bug report'}
                                          className={`radio-button ${feedbackType === 'bug-report' ? 'selected' : ''}`}/>
                    </RadioGroup>
                </FormControl>
                <div className={'form-buttons'}>
                    <Button type={'submit'} className={`ok-button button ${submittable ? 'enabled' : 'disabled'}`}
                            disabled={!submittable}>OK</Button>
                    <Button onClick={onCancel} className={'button'}>Cancel</Button>
                </div>
            </form>
        </div>
    </Dialog>
}