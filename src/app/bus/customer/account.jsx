import React from "react";
import {useCustomer} from "./hooks/useCustomer";

export const Account = () => {
    const {userData: {input}, handleChange, sendData, data} = useCustomer()

    console.log('data ---->>', data)

    return (
        <>
            <h1>Registration</h1>
            <input value={input.name} onChange={handleChange} type="text" name={'name'} placeholder={'name'}/>
            <br/>
            <input value={input.password} onChange={handleChange} type="text" name={'password'} placeholder={'password'}/>
            <br/>
            <input value={input.username} onChange={handleChange} type="text" name={'username'} placeholder={'user name'}/>
            <br/>

            <button type={'submit'} onClick={sendData}>Registration</button>
        </>
    )

}


