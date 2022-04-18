import React from "react";

// Hooks
import {useQueryAvailablePets} from "./hooks/useQueryAvailablePets";

export const Counter = () => {
    const {data, loading, error} = useQueryAvailablePets()

    console.log(data);

    return (
        <p>Counter</p>
    )
}