import classes from './Error.module.css';
import Card from './Card';
import Button from './Button';

const ErrorModal = (props)=>{

    return (
        <div>
        <div onClick={props.ok} className={classes.backdrop}></div>
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
        </div>
    );
}

export default ErrorModal;