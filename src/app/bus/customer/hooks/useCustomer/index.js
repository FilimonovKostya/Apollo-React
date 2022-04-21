import {loader} from "graphql.macro";
import {useState} from "react";
import {useMutation} from "@apollo/client";

const mutationCustomer = loader('./gql/mutationCustomer.graphql')

export const useCustomer = () => {
    const [setRegistration, {data}] = useMutation(mutationCustomer)

    const [userData, setUserData] = useState({
        input: {
            name: '',
            password: '',
            username: '',
        }
    })


    const handleChange = (event) => {
        event.preventDefault()

        setUserData((prevState => ({
            input: {
                ...prevState.input,
                [event.target.name]: event.target.value
            }
        })))
    }

    const sendData = () => {
        const {input} = userData

        setRegistration({variables: {input}})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return {userData, handleChange, sendData}

}