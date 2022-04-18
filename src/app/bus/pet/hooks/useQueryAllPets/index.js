// Core
import {useQuery} from "@apollo/client";
import {loader} from 'graphql.macro';

// Query
const queryAllPets = loader('./gql/queryAllPets.graphql')

export const useQueryAllPets = () => {
    const {data, loading , error} = useQuery(queryAllPets)

    const pets = data ? data.allPets : []

    return {loading, error, pets}
}