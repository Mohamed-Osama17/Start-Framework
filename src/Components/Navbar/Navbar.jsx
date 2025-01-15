import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '/src/_Variable.scss';
import './Navbar.module.scss';

export default function Navbar() {
    return <>

        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <NavLink className="navbar-brand ps-5 text-white fs-2 fw-bolder" to={'/'}>START FRAMEWORK</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav  mb-2 mb-lg-0 pe-5">
                    <li className="nav-item">
                        <NavLink className="nav-link text-white fs-5 fw-bold px-4 rounded-3" aria-current="page" to={'/'}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white fs-5 fw-bold px-4 rounded-3" to={'portfolio'}>Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-white fs-5 fw-bold px-4 rounded-3" to={'contact'}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav >
    </>
}
