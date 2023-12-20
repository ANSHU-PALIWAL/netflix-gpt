import React, { useState } from 'react';
import Header from './Header';
import './login.css'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header />
            <div className='relative bg-color'>
                <img className='' style={{ width: "100%", height: "100vh", objectFit: "cover" }} src='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='background' />
            </div>
            <form className='absolute p-12 z-10 bg-black text-white rounded-lg bg-opacity-80' style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>

                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 ' />}

                <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />

                <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 ' />
                
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                
                <p className='py-6 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>

            </form>
        </div>
    )
}

export default Login