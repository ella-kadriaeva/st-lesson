import React, { useEffect, useState } from 'react'
import User from '../User/User';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUsers = async (url) => {
        setLoading(true);

        try {
            const response = await fetch(url);

            if(!response.ok){
                throw new Error(`HTTP Error: ${response.status}`);
            }

            let data = await response.json();

            setUsers(data);
        }catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchUsers("https://jsonplaceholder.typicode.com/users")
    },[])

    if(loading){
        return <p>Loading ...</p>
    }

    if(error){
        return <p>Error: {error}</p>
    }

    const removeUser = (userId) => {
        let filteredUser = users.filter(user => user.id !== userId);

        setUsers(filteredUser)
    }

  return (
    <ul>
        {
            users && users.map(user => <User key={user.id} id={user.id} name={user.name} email={user.email} remove={() => removeUser(user.id)}/>)
        }
    </ul>
  )
}

export default UserList