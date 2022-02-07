import Card from "../UI/Card";
import classes from './Users.module.css'

const UsersList = (props) => {

    const deleteHandler=(user)=>{
        props.delete(user);
    }
    let result=<p>Users not found.</p>
    if(props.users.length!==0){
        result=props.users.map((user) => {
            return <li onClick={()=>deleteHandler(user)}>
                {user.userName} ({user.age} years old)
            </li>
        });
    }

    return (
        <Card className={classes.users}>
            <ul>
                {result}
            </ul>
        </Card>
    );
}

export default UsersList;