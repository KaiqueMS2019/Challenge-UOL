import React, { useState, createContext } from "react";

export const context = createContext();

export const ContextProvider = props => {
    const [userData, setUserData] = useState({});
    const [repos, setRepos] = useState({});
    const [followersData, setFollowersData] = useState({});
    const [starred, setStarred] = useState({});

    return (
        <context.Provider value={{
            userData,
            repos,
            followersData,
            starred,

            setUserData,
            setRepos,
            setFollowersData,
            setStarred,
        }}>
            {props.children}
        </context.Provider>
    )
}