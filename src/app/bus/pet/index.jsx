import React from "react";

// Components
import {Counter} from "./counter";
import {List} from "./list";
import {SpecialList} from "./specialList";
import {Customer} from "../customer";

export const Pet = () => {
    return (
        <>
            <h1>Pet</h1>
            <Customer/>
            <Counter/>
            <List/>
            <SpecialList/>
        </>
    )
}