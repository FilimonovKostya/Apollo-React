import React from "react";
import {useQueryProfile} from "./hooks/useQueryProfile";

export const Profile = () => {
    const {getProfile, loading, error, profile} = useQueryProfile()


    console.log('profiel', profile)


    return (
        <>
            <h1>Profile</h1>
            <button onClick={() => getProfile({
                variables: {
                    id: "C-2"
                }
            })}>Get Profile
            </button>

            <h2>Name : {profile?.name}</h2>
        </>
    )
}