import React from 'react'
import { useForm } from 'react-hook-form'

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className='signin'>
      <h2 className='signin-title'>Войти</h2>

      <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-login__item">
          <label htmlFor="">E-mail</label>
          <input type="email" {...register("email")} />
        </div>
        <div className="form-login__item">
          <label htmlFor="">Пароль</label>
          <input type="password" {...register("password")} />
        </div>

        <button className='btn btn-black btn-text-white btn-large btn-radius'>Войти</button>
      </form>
    </div>
  )
}

export default SignIn