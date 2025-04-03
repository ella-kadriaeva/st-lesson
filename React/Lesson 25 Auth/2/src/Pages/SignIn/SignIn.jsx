import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { initUser } from '@/store/features/user/userSlice';
import { useNavigate } from 'react-router';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const onSubmit = (data) => {
    let localUsers = JSON.parse(localStorage.getItem("users"));

    if(localUsers){
      let foundUser = localUsers.find(item => item.email === data.email && item.password === data.password);

      if(foundUser){
        dispatch(initUser(foundUser));

        reset();
        navigate("/category/all");
      }else {
        setError("email",  { type: "custom", message: "Пароль или почта не совпадает!" } )
      }
    }else {
      setError("email",  { type: "custom", message: "Пароль или почта не совпадает!" } )
    }
  }

  return (
    <div className='signin'>
      <h2 className='signin-title'>Войти</h2>

      <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-login__item">
          <label htmlFor="">E-mail</label>
          <input
            type="email"
            {...register("email", {
              required: "Введите email",
              pattern: { value: /\S+@\S+\.\S+/, message: "Введите корректный email" }
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-login__item">
          <label htmlFor="">Пароль</label>
          <input
            type="password"
            {...register("password", {
              required: "Введите пароль",
              minLength: { value: 6, message: "Минимум 6 символов" }
            })}
          />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>

        <button className='btn btn-black btn-text-white btn-large btn-radius'>Войти</button>
      </form>
    </div>
  )
}

export default SignIn