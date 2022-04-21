import {useState} from "react";
import {loader} from "graphql.macro";
import {useMutation} from "@apollo/client";

const mutationLogin = loader('./gql/mutationLogin.graphql')

export const useLogin = () => {
    const [login, {data, loading, error}] = useMutation(mutationLogin)
    const [inputData, setInputData] = useState({username: '', password: ''})

    const onInputHandler = (event) => {
        setInputData((prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        })))
    }

    console.log('dataaaaaaaaaa', data)


    const setLogin = () => {
        const {username, password} = inputData
        login({
            variables: {
                username,
                password
            }
        })
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data?.logIn?.token)
            })
            .catch(err => console.log({err}))
    }

    return {inputData, onInputHandler, setLogin, data}
}