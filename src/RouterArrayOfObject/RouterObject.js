import React from "react";
import { Outlet, Link, useRoutes, useParams } from "react-router-dom";
import styles from './RouterObject.module.css';

export default function RouterObject() {
    let routeArray = [{
        path: "/",
        element: <Layout />,
        children: [{
            index: true, element: <Materials />
        },
        {
            path: "/fruits",
            element: <Fruits />,
            children: [
                { index: true , element: <FoodIndex /> },
                { path: "/fruits/:food", element: <Food /> }
            ]
        },
        { path: "*", element: <NoMatch /> }
        ]
    }];

    let routerElement = useRoutes(routeArray);

    return (
        <>
            <div>
                <h1>Route Objects Example</h1>

                <p>
                    This example demonstrates how to use React Router's "route object" API
                    instead of the JSX API to configure your routes. Both APIs are
                    first-class. In fact, React Router actually uses the object-based API
                    internally by creating route objects from your{" "}
                    <code>&lt;Route&gt;</code>
                    elements.
                </p>

                <p>
                    React Router exposes a <code>useRoutes()</code> hook that allows you to
                    hook into the same matching algorithm that <code>&lt;Routes&gt;</code>{" "}
                    uses internally to decide which <code>&lt;Route&gt;</code> to render.
                    When you use this hook, you get back an element that will render your
                    entire route hierarchy.
                </p>
                {routerElement}
            </div>
        </>
    )
}

function Layout() {
    return (
        <>
            <nav className={styles.parentNavBar}>
                <Link className="navbar-link navbar-brand" to="/" >Materials</Link>
                <Link className="navbar-link navbar-brand" to="/fruits">Fruits</Link>
                <Link className="navbar-link navbar-brand" to="/nothing">Nothing</Link>
            </nav>
            <Outlet />
        </>
    )
}

function Materials() {
    return (
        <>
            <div>Materials</div>
        </>
    )
}

function Fruits() {
    return (
        <>
            <div>Fruits</div>
            <Outlet />
        </>
    )
}

function FoodIndex() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <Link to="traditional" className="navbar-link navbar-brand">Traditional</Link>
                <Link to="indianfood" className="navbar-link navbar-brand">Indian food</Link>
                <Link to="mexicon" className="navbar-link navbar-brand">Mexicon food</Link>
                <Link to="italian" className="navbar-link navbar-brand">Italian food</Link>
            </nav>
        </div>
    )
}

function Food() {
    let { food } = useParams();

    return (
        <>
            <h3>{food}</h3>
        </>
    )
}

function NoMatch() {

    return (
        <>
            <div>No Match</div>
            <Link to="/">Go to Materials</Link>

        </>
    )
}
