import classes from './Error.module.css';
import Card from './Card';
import Button from './Button';
import React from 'react';
import ReactDom from "react-dom"

const Backdrop = (props) => {

    return <div onClick={props.ok} className={classes.backdrop}></div>
}

const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.msg}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.ok}>
                    Okay
                </Button>
            </footer>
        </Card>
    )
}

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop ok={props.ok}/>,document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<ModalOverlay title={props.title} msg={props.msg} ok={props.ok}/>,document.getElementById('overlay-root'))}
        </React.Fragment>
    );
}

export default ErrorModal;