import React from "react";
import {useQueryAllCustomers} from "./hooks/useQueryAllCustomers";

export const List = () => {
    const {error, loading, allCustomers} = useQueryAllCustomers()

    const loadingJsx = loading && <p>Loading...</p>

    const errorJsx = error && <p>We have a error</p>

    return (
        <>
            <h1>Customer List</h1>
            {loadingJsx}
            {errorJsx}
            <p>
                <span>Username: {allCustomers?.username}</span>
                <span>Name: {allCustomers?.name}</span>
                <span>dateCreated: {allCustomers?.dateCreated}</span>
            </p>
        </>
    )
}