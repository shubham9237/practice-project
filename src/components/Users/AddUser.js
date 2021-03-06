import { useRef, useState } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUsers.module.css';

const AddUsers = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [eneteredUsername, setUsername] = useState("");
    const [enteredAge, setAge] = useState("");
    const [valid, setValid] = useState(true);

    const submitHandler = (event) => {
        event.preventDefault();
        if (eneteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setValid(false);
            return;
        }
        const user = {
            userName: eneteredUsername,
            age: enteredAge
        }
        props.addUser(user);
        setValid(true);
        setUsername('');
        setAge(0);
    }

    const userNameHandler = (event) => {
        if (event.target.value.trim() === '') {
            setValid(false);
        }
        setUsername(event.target.value);
    }

    const ageHandler = (event) => {
        if (event.target.value.trim() === '') {
            setValid(false);
        }
        setAge(event.target.value);
    }

    const modalClickHandler = () => {
        setValid(true);
    }

    return (
        <Wrapper>
            {!valid && <ErrorModal ok={modalClickHandler} title="Error" msg="Error in data."></ErrorModal>}
            <Card className={classes.input}>
                <form onSubmit={submitHandler} className={!valid ? classes.invalid : ''} >
                    <label htmlFor="username">Username</label>
                    <input ref={nameInputRef} value={eneteredUsername} onChange={userNameHandler} type="text" id="username"></input>
                    <label htmlFor="age">Age in years</label>
                    <input ref={ageInputRef} value={enteredAge} onChange={ageHandler} type="number" id="age"></input>
                    <Button onClick={submitHandler} type="submit">Add user</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddUsers;
