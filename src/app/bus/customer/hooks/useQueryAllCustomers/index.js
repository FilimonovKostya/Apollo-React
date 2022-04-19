// Core
import {useQuery} from "@apollo/client";
import {loader} from 'graphql.macro';

const queryAllCustomers = loader('./gql/queryAllCustomers.graphql')

export const useQueryAllCustomers = () => {
    const {error, loading, data} = useQuery(queryAllCustomers)

    const allCustomers = data ? data.allCustomers : []

    return {error, loading , allCustomers}
}