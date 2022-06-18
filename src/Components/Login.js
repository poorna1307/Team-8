import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    let [usersList, setUsersList] = useState([])

    const onFormSubmit = (userObj) => {
        console.log(userObj);
        setUsersList([...usersList, userObj])
    }

    return (
        <div>
            <h1 className=" text-center text-dark mt-4">Login</h1>
            <form className='w-50 mx-auto mt-5  bg-light shadow p-5' onSubmit={handleSubmit(onFormSubmit)}>
            <div className="row mt-4">      
                    <div className="col-3">
                        <label>Users</label>
                    </div>
                    <div className="col">
                    <div>
                        
                        <input type="radio" name="" id="admin" className="form-radio-input" placeholder="Disabled input"{...register("User")} value="Campaigner"/>
                        <label htmlFor="admin" className="form-radio-label">Campaigner</label>
                    </div>
                
                    <div className="mt-3">
                       
                        <input type="radio" name="" id="volunteer" className="form-radio-input"{...register("User")} value="Volunteer"/>
                        <label htmlFor="volunteer" className="form-radio-label">Volunteer</label>
                    </div>
                </div>
              </div>
                <div className="mb-3 mt-3">
                    <label className=" mt-3" htmlFor="username">Username</label>
                    <input type="text"
                        id="username"
                        className="form-control"
                        {...register("username", { required: true, minLength: 6, maxLength: 10})} />
                      {errors.username?.type === 'required' && <p className='text-danger'>* Username is required</p>}
                      {errors.username?.type === 'minLength' && <p className='text-danger'>* Min length should be 6</p>}
                      {errors.username?.type === 'maxLength' && <p className='text-danger'>* Max length should be 10</p>}

                </div>
             
                

                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="" id="password" className="form-control" {...register("password", { required: true })} />
                    {errors.password?.type === 'required' && <p className='text-danger'>* Password is required</p>}
                </div>

                <button type="submit" className="btn btn-secondary mb-3 ">Submit</button>
            </form>
            
        </div>
         
           
    );
}
export default Login