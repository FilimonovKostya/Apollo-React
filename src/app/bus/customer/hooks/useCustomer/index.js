import {loader} from "graphql.macro";
import {useState} from "react";

const mutationCustomer = loader('./gql/mutationCustomer.graphql')

export const useCustomer = () => {
    const [userData, setUserData] = useState({
        input: {
            name: 'te', username: '12', password: 'aaa'
        }
    })

    console.log('userData', userData)

    const handleChange = (event) => {
        setUserData((prevState => ({
            ...prevState,
            input: {
                ...prevState.input,
                [event.target.name]: event.target.value
            }

        })))

    }

    return {userData, handleChange}

}