import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { ListOfContacts } from "../Router/ListOfContacts";
import styles from '../Router/RouterComponent.module.css';

export default function ParamsExample() {
    return (
        <Router>
            <div>
                <h2>Accounts</h2>
                <nav className={`navbar navbar-expand-lg navbar-light bg-success ${styles.unActivateDecoration}`}>
                    <Link to="/contact/rahul" className="nav-link navbar-brand">Contact 1</Link>
                    <Link to="/contact/vinoth" className="nav-link navbar-brand">Contact 2</Link>
                    <Link to="/contact/anand" className="nav-link navbar-brand">Contact 3</Link>
                    <Link to="/contact/ramesh" className="nav-link navbar-brand">Contact 4</Link>
                    <Link to="/contact/vignesh" className="nav-link navbar-brand">Contact 5</Link>
                </nav>

                <Routes>
                    <Route path="/contact/:name" element={<ListOfContacts />}></Route>
                </Routes>
            </div>
        </Router>
    );
}
