import React from "react";

// Hooks
import {useQueryAllPets} from "./hooks/useQueryAllPets";

export const List = () => {
    const {pets, error, loading} = useQueryAllPets()

    if (loading) {
        return <p>Loading ...</p>
    }

    if (error) {
        return <p>We have a problem: {error.message}</p>
    }


    return (
        <>
            <h1>Pets</h1>
            {pets.map(({id, name, weight}) => <p key={id}>
                <span> Name: {name} </span>
                <span> Weight: {weight} </span>
            </p>)}
        </>
    )
}