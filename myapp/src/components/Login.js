import React from 'react'
import Header from './Header'

const Login = () => {
    return (
        <div>
            <Header />
            <div  className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='background' />
            </div>
            <form className='relative p-12 bg-black'>
                <input type='text'placeholder='Email Address' className='p-2 m-2'/>
                <input type='password'placeholder='Password' className='p-2 m-2'/>
                <button className='p-4 m-4 '>Sign in</button>
            </form>
        </div>
    )
}

export default Login