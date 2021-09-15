import React, { useContext } from "react";

import Container  from "../components/container";
import FollowersContainer from '../components/followersContainer'

import { context } from "../context";

const Followers = props => {
    const ctx = useContext(context);
    console.log(ctx)

    return(
        <Container>
            <FollowersContainer name={ctx.userData?.login} followers={ctx.followersData}/>
        </Container>
    );
}
    


export default Followers;