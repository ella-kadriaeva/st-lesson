import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

const SignUp = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, watch, setError, reset } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      rePassword: "",
    }
  })

  const onSubmit = (data) => {
    let localUsers = JSON.parse(localStorage.getItem("users"));

    if(localUsers){
      let foundUser = localUsers.find(item => item.email === data.email);

      if(!foundUser){
  
        delete data.rePassword;
  
        localUsers.push({
          id: uuidv4(),
          ...data
        })
  
        localStorage.setItem("users", JSON.stringify(localUsers));

        reset();
        navigate("/signin");
      }else {
        setError("email",  { type: "custom", message: "Пользователь с такой почтой уже зарегистрирован!" } )
      }
    }else {
      delete data.rePassword;

      localStorage.setItem("users", JSON.stringify([{
        id: uuidv4(),
        ...data
      }]));

      reset();
      navigate("/signin");
    }
  }

  return (
    <div className='signup'>
      <h2 className='signup-title'>Регистрация</h2>

      <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-login__item">
          <label htmlFor="">Имя</label>
          <input type="text" {...register("firstname", { required: "Введите имя" })} />
          {errors.firstname && <p className="error">{errors.firstname.message}</p>}
        </div>

        <div className="form-login__item">
          <label htmlFor="">Фамилия</label>
          <input type="text" {...register("lastname", { required: "Введите фамилию" })} />
          {errors.lastname && <p className="error">{errors.lastname.message}</p>}
        </div>

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

        <div className="form-login__item">
          <label htmlFor="">Подтверждение пароля</label>
          <input
            type="password"
            {...register("rePassword", {
              required: "Подтвердите пароль",
              validate: value => value === watch("password") || "Пароли не совпадают"
            })}
          />
          {errors.rePassword && <p className="error">{errors.rePassword.message}</p>}
        </div>

        <button className='btn btn-black btn-text-white btn-large btn-radius'>Регистрация</button>
      </form>

    </div>
  )
}

export default SignUp