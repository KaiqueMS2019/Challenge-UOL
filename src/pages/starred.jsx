import React, { useContext } from "react";

import Container  from "../components/container";
import StarredContainer from '../components/starredContainer'

import { context } from "../context";

const Starred = props => {
    const ctx = useContext(context);

    return(
        <Container>
            <StarredContainer name={ctx.userData?.login} starred={ctx.starred}/>
        </Container>
    );
}
    
export default Starred;

