// Core
import {useLazyQuery} from "@apollo/client";
import {loader} from 'graphql.macro';

// Query
const queryProfile = loader('./gql/queryProfile.graphql')

export const useQueryProfile = () => {
    const [getProfile, {loading, error, data}] = useLazyQuery(queryProfile)


    return {getProfile, loading, error, profile: data && data.petById}
}