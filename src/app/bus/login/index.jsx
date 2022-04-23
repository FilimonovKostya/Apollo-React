import React from "react";
import {useLogin} from "./hooks/useLogin";

export const Login = () => {
    const {inputData: {username, password}, onInputHandler, setLogin, logIn, error, loading} = useLogin()


    const errorJsx = error && <span><b>{error.message}</b></span>
    const loadingJSX = loading ? <span>Loading...</span> : null

    return (
        <>
            <h1>Login</h1>
            <div>
                <input type="text" value={username} onChange={onInputHandler} name={'username'} placeholder={'user name'}/>
                <input type="text" value={password} onChange={onInputHandler} name={'password'} placeholder={'password'}/>
                <button type={"submit"} onClick={() => setLogin()}>Login</button>
            </div>
            <p>Customer user name: {logIn?.customer?.username}</p>
            <p>Customer name: {logIn?.customer?.name}</p>
            <p>Customer token: {logIn?.token}</p>
            {errorJsx}
            {loadingJSX}
        </>
    )

}