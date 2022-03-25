import React from "react";
import { Link, useParams } from 'react-router-dom';
import styles from './RouterComponent.module.css';

export const Parameter = () => {
    return (
        <div>
            <h2>List of contacts</h2>
            <nav className={`navbar navbar-expand-lg navbar-light bg-secondary ${styles.unActivateDecoration}`}>
                <Link className="nav-link navbar-brand" to="/parameter/anand">Anand</Link>
                <Link className="nav-link navbar-brand" to="/parameter/vignesh">Vignesh</Link>
                <Link to="/parameter/magesh" className="nav-link navbar-brand">Magesh</Link>
            </nav>
            {/*<Routes>
                <Route path="/parameter/:name" index element={<List />}></Route>
    </Routes>*/}
        </div>
    )
}

function List() {
    let { name } = useParams();

    return (
        <>
            <div>{name}</div>
        </>
    )
}
