import React from "react";
import {useLogin} from "./hooks/useLogin";

export const Login = () => {
    const {inputData: {username, password}, onInputHandler, setLogin, data} = useLogin()

    console.log('DATAAA', data)

    return (
        <>
            <h1>Login</h1>
            <div>
                <input type="text" value={username} onChange={onInputHandler} name={'username'} placeholder={'user name'}/>
                <input type="text" value={password} onChange={onInputHandler} name={'password'} placeholder={'password'}/>
                <button type={"submit"} onClick={() => setLogin()}>Login</button>
            </div>
        </>
    )

}