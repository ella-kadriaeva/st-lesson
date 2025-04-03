import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'

const Dashboard = () => {
    const { user, logout } = useContext(UserContext);

    return (
        <div>
            <h2>Welcome, {user.email}</h2>

            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Dashboard