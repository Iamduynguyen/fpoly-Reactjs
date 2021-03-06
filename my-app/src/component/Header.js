import React, { Component } from 'react'
import Nav from './Nav'
import "bootstrap/dist/css/bootstrap.min.css";
import Search from './Search';



export default class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >

                            <Nav/>
                            <Search/>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}