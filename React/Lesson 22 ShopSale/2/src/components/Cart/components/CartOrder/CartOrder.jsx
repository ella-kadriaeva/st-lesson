import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

const CartOrder = () => {
    const { register, handleSubmit, watch, formState: { errors }, clearErrors, reset, setValue, getValues } = useForm({
        defaultValues: {
            username: "",
            phone: 123456789,
            address: ""
        }
    })

    const watchedFields = watch(["username", "phone"]);

    const onSubmit = (data) => {
        console.log(data)

        reset()
    }
    useEffect(()=>{
        console.log("Изменилось", watchedFields)
    },[watchedFields])

    useEffect(()=>{
        setValue("username", "John");
        setValue("phone", 37488997766);
        setValue("address", "House 1");
    },[])


    const handleGetValues = () => {
        // const values = getValues("username")
        // const values = getValues(["username", "phone"])
        const values = getValues()

        console.log(values)
    }
  return (
    <div className="form">
                    <h2 className="form__title">Оформить заказ</h2>

                    <form className="form-content" onSubmit={handleSubmit(onSubmit)}>
                        <div className='form__item'>
                            <input
                                type="text"
                                placeholder='Ваше имя'
                                className='form-control'
                                autoComplete='off'
                                {...register("username", {
                                    required: "Пожалуйста, введите ваше имя!",
                                    minLength: {
                                        value: 2,
                                        message: "Имя должно содержать не менее 2 символов"
                                    }
                                })}
                            />

                            {errors.username && <p> {errors.username.message}</p>}
                        </div>
                        <div className='form__item'>
                            <input
                                type="tel"
                                placeholder='Телефон'
                                className='form-control'
                                autoComplete='off'
                                {...register("phone", {
                                    required: "Пожалуйста, введите ваш телефон!",
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: "Телефон должен содержать только цифры"
                                    },
                                    minLength: {
                                        value:10,
                                        message:  "Телефон должен содержать не менее 10 цифр"
                                    }
                                })}
                            />

                            {errors.phone && <p> {errors.phone.message}</p>}
                        </div>
                        <div className='form__item'>
                            <input
                                type="text"
                                placeholder='Адрес'
                                className='form-control'
                                autoComplete='off'
                                {...register("address", {
                                    required: "Пожалуйста, введите ваш адрес!"
                                })}
                            />
                            {errors.address && <p>{errors.address.message}</p>}
                        </div>

                        <button className='btn btn-black btn-text-white btn-large btn-radius'>Отправить</button>
                    </form>

                    {/* <button className='btn btn-black btn-text-white btn-large btn-radius' onClick={() => clearErrors(["username", "phone"])}>Remove Errors</button> */}
                    {/* <button className='btn btn-black btn-text-white btn-large btn-radius' onClick={handleGetValues}>Get values</button> */}
                </div>
  )
}

export default CartOrder