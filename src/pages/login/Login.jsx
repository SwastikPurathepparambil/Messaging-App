import { useContext, useRef } from 'react';
// import { CircularProgress } from "@material-ui/core";
import "./login.css"
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';

export default function Login(){

    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);
    
    const handleClick = (e) => {
        e.preventDefault();
        loginCall({email: email.current.value, password: password.current.value}, dispatch)
    };

    console.log(user);

    return (
            <div className="login">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h1 className="loginLogo">PenNPencil</h1>
                        <span className="loginDesc">
                            Study in your best work environment
                        </span>
                        </div>
                        <div className="loginRight">
                        <form className="loginBox" onSubmit={handleClick}> 
                        {/* onSubmit={handleClick} goes in form class */}
                            <input placeholder="Email" type="email" required className="loginInput" ref={email}/>
                            <input placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password} />
                            
                            <button className="loginButton" type="submit" >
                                Log In
                            {/* disabled={isFetching} is in button above */}

                            {/* {isFetching ? (
                                <CircularProgress color="white" size="20px" />
                            ) : (
                                "Log In"
                            )} */}
                            </button> 
                            <span className="loginForgot">Forgot Password?</span>
                            <button className="loginRegisterButton">
                                Sign Up
                            {/* {isFetching ? (
                                <CircularProgress color="white" size="20px" />
                            ) : (
                                "Create a New Account"
                            )} */}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
}
