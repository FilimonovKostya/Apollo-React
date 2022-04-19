import React from "react";
import {useQueryAllCustomers} from "./hooks/useQueryAllCustomers";

export const List = () => {
    const {error, loading, allCustomers} = useQueryAllCustomers()

    const loadingJsx = loading && <p>Loading...</p>

    const errorJsx = error && <p>We have a error</p>

    return (
        <>x
            <h1>Customer List</h1>
            {loadingJsx}
            {errorJsx}
            {allCustomers.map(({username, name, dateCreated}, index) => <p key={index}>
                <span>Username: {username}</span>
                <span>Name: {name}</span>
                <span>dateCreated: {dateCreated}</span>
            </p>)}
        </>
    )
}