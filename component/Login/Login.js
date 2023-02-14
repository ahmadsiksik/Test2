import React, { Fragment } from 'react'
import Link from 'next/link';
import Nav from '../Home/Nav';
import classes from './Login.module.css'

export const Login = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    let url;

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    return (
        <Fragment>
            <div className={classes.main}>
                <div className={classes.overlay}>
                        <div className={classes.content}>
            <Nav/>

                            <section className={classes.auth}>
                                <h1>{'تسجيل الدخول '}</h1>
                                <form onSubmit={submitHandler}>
                                    <div className={classes.control}>
                                        <label htmlFor='email'>البريد الالكتروني</label>
                                        <input type='email' id='email' required  ref={emailInputRef}/>
                                    </div>
                                    <div className={classes.control}>
                                        <label htmlFor='password'>كلمة السر</label>
                                        <input
                                            type='password' 
                                            id='password'
                                            required  
                                            ref={emailInputRef}      
                                        />
                                    </div>
                                    
                                    <div className={classes.actions}>
                                        
                                           <button><Link href={'/'}>تسجيل الدخول</Link></button>
                                        <button
                                            type='button'
                                            className={classes.toggle}
                                        >
                                            {'انشاء حساب'}
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
        </Fragment>

    );
}
