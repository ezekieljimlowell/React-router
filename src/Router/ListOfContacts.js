import React from "react";
import { Outlet , useParams } from "react-router-dom";

export const ListOfContacts = () => {
    let {name} = useParams();
    console.log(name);

    return (
        <>
            <div>Name: {name}</div>
            <br></br>
            <br></br>
        </>
    )
}
