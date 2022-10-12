import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Logo from './utls/Logo';

const Signup = () => {
    const { register,watch, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className=' min-h-screen flex justify-center items-center px-4'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body p-10  ">
                    <Logo />

                    <form onSubmit={handleSubmit(onSubmit)}>

                    {/* name field */}
                    <div className='mb-3'>
                            <span className="label-text ">Name</span>
                            <input {...register("name",
                            {
                                required:"Field is required",
                                minLength:{
                                    value:5,
                                    message:"Minimum 5 character required"
                                }
                               
                            }
                            )} type="text" placeholder="Enter your name" className={`input input-bordered input-sm w-full !outline-none ${errors.name && 'border-red-500'}`} />
                            {
                                errors?.name && <span className="label-text text-red-500">{errors?.name?.message}</span>
                            }
                            
                        </div>

                        {/* email field */}
                        <div className='mb-3'>
                            <span className="label-text ">Email</span>
                            <input {...register("email",
                            {
                                required:"Field is required",
                                pattern:{
                                    value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message:"Invalid email format"
                                }
                               
                            }
                            )} type="email" placeholder="Enter Email" className={`input input-bordered input-sm w-full !outline-none ${errors.email && 'border-red-500'}`} />
                            {
                                errors?.email && <span className="label-text text-red-500">{errors?.email?.message}</span>
                            }
                            
                        </div>

                        {/* password field */}
                        <div className='mb-3'>
                            <span className="label-text pt-5">Password</span>
                            <input {...register('password',
                            {
                                required:"Field is required",
                                minLength:{
                                    value:6,
                                    message:"Minimun 6 character is required"
                                }
                                })} type="password" placeholder="Enter Password" className={`input input-bordered input-sm w-full !outline-none ${errors.password && 'border-red-500'}`} />
                            {
                                errors?.password && <span className="label-text text-red-500">{errors?.password?.message}</span>
                            }
                        </div>

                        {/* confirm password field */}
                        <div>
                            <span className="label-text pt-5">Confirm Password</span>
                            <input {...register('confirmPassord',
                            {
                                required:"Field is required",
                                minLength:{
                                    value:6,
                                    message:"Minimun 6 character is required"
                                },
                                validate: (val)=>{
                                    if(watch('password')!==val) return "Password do not match!"
                                },   
                                })} type="password" placeholder="Enter Confirm Password" className={`input input-bordered input-sm w-full !outline-none ${errors.confirmPassord && 'border-red-500'}`} />
                            {
                                errors?.confirmPassord && <span className="label-text text-red-500">{errors?.confirmPassord?.message}</span>
                            }
                        </div>


                        <button type='submit' className="btn w-full btn-sm normal-case text-white bg-orange-600 border-0 mt-5">Sign up</button>

                    </form>

                    <p className='text-center text-sm'>Already have account? <Link to={'/'} className='text-orange-600 font-semibold'>Login now</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Signup;