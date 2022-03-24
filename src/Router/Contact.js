import React from "react";
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom';
import { ListOfContacts } from "./ListOfContacts";

export const Contact = () => {

    return (
        <div>
            <h2>List of contacts</h2>
            <Link to="contact/rahul">Contact 1</Link>
            <Link to="contact/vinoth">Contact 2</Link>
            <Link to="contact/anand">Contact 3</Link>
            <Link to="contact/ramesh">Contact 4</Link>
            <Link to="contact/vignesh">Contact 5</Link>

            <Routes>
                <Route path="contact/:name" element={<ListOfContacts />}></Route>
            </Routes>

        </div>
    )
}
