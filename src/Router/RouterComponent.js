import React, { Children } from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import { About } from "./About";
import { Parameter } from "./Parameter";
import { Css } from "./Css";
import { Home } from "./Home";
import { Html } from "./Html";
import { JavaScript } from "./JavaScript";
import { ReactJs } from "./ReactJs";
import styles from './RouterComponent.module.css';
import { ListOfContacts } from "./ListOfContacts";

export const RouterComponent = () => {

    return (
        <div>
            <Router>
                <nav className={`navbar navbar-expand-lg navbar-light bg-secondary ${styles.unActivateDecoration}`}>
                    <Link to="/" className="nav-link navbar-brand">Home</Link>
                    <Link to="/about" className="nav-link navbar-brand">About</Link>
                    <Link to="/html" className="nav-link navbar-brand">HTML</Link>
                    <Link to="/css" className="nav-link navbar-brand">CSS</Link>
                    <Link to="/javascript" className="nav-link navbar-brand">JavaScript</Link>
                    <Link to="/reactjs" className="nav-link navbar-brand">React JS</Link>
                    <Link to="/parameter" className="nav-link navbar-brand">Parameter</Link>
                </nav >
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/html" element={<Html />}></Route>
                    <Route path="/css" element={<Css />}></Route>
                    <Route path="/javascript" element={<JavaScript />}></Route>
                    <Route path="/reactjs" element={<ReactJs />}></Route>
                    <Route path="/parameter" element={<Parameter />}></Route>
                    <Route path="/parameter/:name" element={<ListOfContacts />} />
                </Routes>
            </Router>
        </div >
    )
}
