import React from 'react';
// import { CircularProgress } from "@material-ui/core";
import "./register.css"

class Register extends React.Component {
    render() {
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
                        <form className="loginBox"> 
                        {/* onSubmit={handleClick} goes in form class */}
                            <input
                            placeholder="Username"
                            type="username"
                            required
                            className="loginInput"
                            />
                            {/* ref={username} goes in input class above */}
                            <input
                            placeholder="Email"
                            type="email"
                            required
                            className="loginInput"
                            />
                            {/* ref={email} goes in input class above */}
                            <input
                            placeholder="Password"
                            type="password"
                            required
                            minLength="6"
                            className="loginInput"
                            />
                            {/* ref={password} goes in input class above */}
                            <input
                            placeholder="Repeat Password"
                            type="password"
                            required
                            minLength="6"
                            className="loginInput"
                            />
                            <button className="loginButton" type="submit" >
                                Sign Up
                            {/* disabled={isFetching} is in button above */}

                            {/* {isFetching ? (
                                <CircularProgress color="white" size="20px" />
                            ) : (
                                "Log In"
                            )} */}
                            </button> 
                            
                            <button className="loginRegisterButton">
                                Log Into Account
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
}

export default Register;