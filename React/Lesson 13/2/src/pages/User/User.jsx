import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Loader from '../../components/Loader/Loader';

const API_URL = "https://fake-json-api.mock.beeceptor.com/users"

const User = () => {
    const navigate = useNavigate();
    const {userId} = useParams();

    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchUser = async () => {
        setIsLoading(true)

        try {
            let response = await fetch(`${API_URL}/${userId}`);
            let data = await response.json();

            setUserData(data);
            setIsLoading(false);
        } catch (err) {
            setError(err)
            setIsLoading(false);
        }
    }

    const goBack = () => navigate(-1)

    useEffect(()=>{
        fetchUser()
    },[userId])

    if(isLoading){
        return <Loader />
    }

    if(error){
        return <h1> Erorr: {error} </h1>
    }

  return (
    <div className="container">
        <div className="user-page">
            <button onClick={goBack}>Back</button>
            <div className="user">
                <img src={userData.photo} alt="" />

                <h2>Name: {userData.name}</h2>
                <h2>Username: {userData.username}</h2>
                <p>Email: {userData.email}</p>
            </div>
        </div>
    </div>
  )
}

export default User