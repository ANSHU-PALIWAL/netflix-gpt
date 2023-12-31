import React, { useRef, useState } from 'react';
import Header from './Header';
import './login.css';
import { checkValidData } from "../utils/validate.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';
import { USER_AVATAR } from '../utils/constants.js';
 

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // validate the form data

        const message = checkValidData(/*name.current.value,*/ email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        // sign in / sign up logic

        if (!isSignInForm) {
            // sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)

                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // update user profile
                    updateProfile(user, {
                        displayName: "anshu paliwal",
                        photoURL: USER_AVATAR
                    })
                        .then(() => {
                            // Profile updated!

                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(addUser({
                                uid: uid, email: email, displayName: displayName, photoURL: photoURL
                            }));

                        })
                        .catch((error) => {
                            setErrorMessage(error.message);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
        else {
            // sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }

    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header />
            <div className='relative bg-color'>
                <img className='' style={{ width: "100%", height: "100vh", objectFit: "cover" }} src='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='background' />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='absolute p-12 z-10 bg-black text-white rounded-lg bg-opacity-80' style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>

                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && <input /*ref={name}*/ type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 ' />}

                <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />

                <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 ' />

                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

                <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <p className='py-6 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>

            </form>
        </div>
    )
}

export default Login