import React from "react";
import {useCustomer} from "./hooks/useCustomer";

export const Account = () => {
    const {userData: {input: {name, password, username}}, handleChange} = useCustomer()

    return (
        <>
            <input value={name} onChange={handleChange} type="text" name={'name'} placeholder={'name'}/>
            <input value={password} onChange={handleChange} type="text" name={'password'} placeholder={'password'}/>
            <input value={username} onChange={handleChange} type="text" name={'username'} placeholder={'user name'}/>
        </>
    )

}


