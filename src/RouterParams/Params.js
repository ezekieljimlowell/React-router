import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams
} from "react-router-dom";
import { ListOfContacts } from "../Router/ListOfContacts";

export default function ParamsExample() {
    return (
        <Router>
            <div>
                <h2>Accounts</h2>
                <Link to="contact/rahul">Contact 1</Link>
                <Link to="contact/vinoth">Contact 2</Link>
                <Link to="contact/anand">Contact 3</Link>
                <Link to="contact/ramesh">Contact 4</Link>
                <Link to="contact/vignesh">Contact 5</Link>

                <Routes>
                    <Route path="contact/:name" element={<ListOfContacts />}></Route>
                </Routes>
            </div>
        </Router>
    );
}
