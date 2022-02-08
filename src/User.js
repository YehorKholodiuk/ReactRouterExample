import React from 'react';
import {useParams} from "react-router";

const User = (props) => {
    const params = useParams()
    console.log(props)
    console.log(params)
    return (
        <div>
            User
        </div>
    );
};

export default User;