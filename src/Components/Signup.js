import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

function Signup() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    let [usersList, setUsersList] = useState([])

    const onFormSubmit = (userObj) => {
        console.log(userObj);
        setUsersList([...usersList, userObj])
    }

    return (
        <div>
            <h1 className=" text-center text-dark mt-4"> Registration </h1>
            <form className='w-50 mx-auto mt-5  bg-light shadow p-5' onSubmit={handleSubmit(onFormSubmit)}>
     
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
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="email" className="form-control" {...register("email", { required: true })} />
                    {errors.email?.type === 'required' && <p className='text-danger'>* Email is required</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="" id="password" className="form-control" {...register("password", { required: true })} />
                    {errors.password?.type === 'required' && <p className='text-danger'>* Password is required</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="" id="password" className="form-control" {...register("password", { required: true })} />
                    {errors.password?.type === 'required' && <p className='text-danger'>* Password is required</p>}
                </div>
 
                <div className="mb-3">
                    <label htmlFor="phn">Mobile Number</label>
                   
                    <input type="text" id="UserMobile" maxlength="14" data-fv-numeric="true" data-fv-numeric-message="Please enter valid phone numbers" data-fv-phone-country11="IN" required="required" data-fv-notempty-message="This field cannot be left blank." placeholder="" class="form-control" name="data[User][mobile]" data-fv-field="data[User][mobile]"></input>
                   
                </div>
                <div className="row mt-4">      
                    <div className="col-3">
                        <label>Gender</label>
                    </div>
                    <div className="col">
                    <div>
                        
                        <input type="radio" name="" id="female" className="form-radio-input" placeholder="Disabled input"{...register("Gender")} value="female"/>
                        <label htmlFor="female" className="form-radio-label">Female</label>
                    </div>
                
                    <div className="mt-3">
                       
                        <input type="radio" name="" id="male" className="form-radio-input"{...register("Gender")} value="male"/>
                        <label htmlFor="male" className="form-radio-label">Male</label>
                    </div>
                </div>
              </div>
                <button type="submit" className="btn btn-secondary mb-3 ">Submit</button>
            </form>
            
        </div>
         
           
    );
}
export default Signup
