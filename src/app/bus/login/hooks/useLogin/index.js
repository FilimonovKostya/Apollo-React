import {useState} from "react";
import {loader} from "graphql.macro";
import {useMutation} from "@apollo/client";

const mutationLogin = loader('./gql/mutationLogin.graphql')

export const useLogin = () => {
    const [login, {data, loading, error}] = useMutation(mutationLogin)
    const [inputData, setInputData] = useState({username: '', password: ''})

    const onInputHandler = (event) => {
        event.persist()

        setInputData((prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        })))
    }

    console.log('DATA IN MY HOOK', data)


    const setLogin = async () => {
        const {username, password} = inputData
        const res = await login({
            variables: {
                username,
                password
            }
        })

        try {
            localStorage.setItem("token", res.data?.logIn?.token)
        } catch (e) {
            console.log('Errr', {e})
        }


    }

    return {inputData, onInputHandler, setLogin, data}
}