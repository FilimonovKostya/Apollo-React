// Core
import {useQuery} from "@apollo/client";
import { loader } from 'graphql.macro';

// Quires
const queryAvailablePets = loader('./gql/queryAvailablePets.graphql')

export const useQueryAvailablePets = () => useQuery(queryAvailablePets)