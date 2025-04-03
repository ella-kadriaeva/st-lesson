import React, { useContext } from 'react'
import { UserContext } from '../../UserContext';

const Login = () => {
    const { login } = useContext(UserContext);

    const onSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        let email = formData.get('email');
        let password = formData.get('password');

        login(email, password);
    }

    return (
        <div className='login'>
            <h1 className='title'>Login</h1>
            <form onSubmit={onSubmit} className='form'>
                <div className='form-item'>
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' className="form-control" />
                </div>
                <div className='form-item'>
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' className="form-control" />
                </div>

                <button>Login</button>
            </form>
        </div>
    )
}

export default Login