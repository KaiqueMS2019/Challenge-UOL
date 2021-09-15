import React, { useState, createContext } from "react";

export const context = createContext();

export const ContextProvider = props => {
    const [userData, setUserData] = useState({});
    const [repos, setRepos] = useState({});
    const [followersData, setFollowersData] = useState({});
    const [following, setFollowing] = useState({});

    return (
        <context.Provider value={{
            userData,
            repos,
            followersData,
            following,

            setUserData,
            setRepos,
            setFollowersData,
            setFollowing,
        }}>
            {props.children}
        </context.Provider>
    )
}