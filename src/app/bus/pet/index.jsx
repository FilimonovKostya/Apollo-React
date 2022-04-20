import React from "react";

// Components
import {Counter} from "./counter";
import {List} from "./list";
import {SpecialList} from "./specialList";
import {Customer} from "../customer";
import {Profile} from "./profile";

export const Pet = () => {
    return (
        <>
            <h1>Pet</h1>
            <Customer/>
            <Profile/>
            <Counter/>
            <List/>
            <SpecialList/>
        </>
    )
}