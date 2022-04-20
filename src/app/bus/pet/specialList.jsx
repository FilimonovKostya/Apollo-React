import React from "react";

// Hooks
import {useQueryAllAvailablePets} from "./hooks/useQueryAllAvailablePets";

export const SpecialList = () => {
    const {getAllAvailablePets, pets, loading, error} = useQueryAllAvailablePets()

    const loaderJsx = loading && <p>Loading ...</p>

    const errorJsx = error && <p>We have a error ...</p>

    const petsJsx = pets && pets.map(({id, name, weight}) => (
        <p key={id}>
            <span> Name: {name} </span>
            <span> Weight: {weight} </span>
        </p>
    ))

    return (
        <>
            <h1>Special List</h1>
            <button onClick={getAllAvailablePets}>Download</button>
            {loaderJsx}
            {errorJsx}
            {petsJsx}
        </>
    )
}