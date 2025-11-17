import React, {ReactElement} from "react";
import './Dialog.scss'

export const Dialog = (props: {show?: boolean, children: ReactElement}) =>
    <div className={`light-box ${props.show ? 'show' : ''}`}>
        <dialog open={props.show} className={'dialog'}>
            <h2>Select displayed data (two series)</h2>
            {props.children}
        </dialog>;
</div>