import React, {ReactElement, useEffect} from "react";
import './Dialog.scss'

export const Dialog = (props: {show?: boolean, children: ReactElement,
    title: string}) => {

    // Block scrolling when dialog open
    useEffect(() => {
        const body = document.querySelector('body')!
        if (props.show) {
            body.classList.add('modal-open')
        } else {
            body.classList.remove('modal-open')
        }
    }, [props.show]);

    return <div className={`light-box ${props.show ? 'show' : ''}`}>
        <dialog open={props.show} className={'dialog'}>
            <h2>{props.title}</h2>
            {props.children}
        </dialog>
        ;
    </div>
}