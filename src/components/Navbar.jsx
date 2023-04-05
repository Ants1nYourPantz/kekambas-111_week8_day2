import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Welcome to One Stop Shopping</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/poke">PokeAPI</Link>
                        <Link className="nav-link" to="/">Other</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}