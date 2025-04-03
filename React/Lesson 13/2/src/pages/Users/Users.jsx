import React, { useEffect, useState } from 'react'
import Loader from '../../components/Loader/Loader';
import { Link } from 'react-router';

const API_URL = "https://fake-json-api.mock.beeceptor.com/users"

const Users = () => {
    const [usersData, setUsersData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchUsers = async () => {
        setIsLoading(true)

        try {
            let response = await fetch(API_URL);
            let data = await response.json();

            setUsersData(data);
            setIsLoading(false);
        } catch (err) {
            setError(err)
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    if(isLoading){
        return <Loader />
    }

    if(error){
        return <h1> Erorr: {error} </h1>
    }

    return (
        <div className="container">
            <div className="users-page">
                <button onClick={fetchUsers}>Update users</button>

                <div className="users-list">
                    {
                        usersData && usersData.map(user => (
                            <div className="item" key={user.id}>
                                <img src={user.photo} alt="" />
        
                                <h2>{user.username}</h2>
                                <p>{user.email}</p>
        
                                <Link to={`/users/${user.id}`} className='btn-link'>More</Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Users