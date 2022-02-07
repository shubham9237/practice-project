import React, { useState } from 'react';
import AddUsers from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [users,setUsers]=useState([])

  const addUserhandler = (user)=>{
    setUsers((prevState)=>{
      return [...prevState,user]
    })
  }

  const deleteHandler=(selectedUser)=>{
    console.log(selectedUser);
    setUsers((prevState)=>{
      return prevState.filter((user)=>{
        return user.userName!==selectedUser.userName;
      })
    })
  }

  return (
    <React.Fragment>
      <AddUsers addUser={addUserhandler}></AddUsers>
      <UsersList delete={deleteHandler} users={users}></UsersList>
    </React.Fragment>
  );
}

export default App;
