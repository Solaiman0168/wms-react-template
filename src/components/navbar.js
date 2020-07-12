import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";




class Navbar extends Component {
    render() {
        return (

        <nav className="navbar navbar-expand-lg navbar-dark">
            <Link className="navbar-brand" to="/"><Image src="assets/images/logo.png" alt="WMS-Logo" /></Link>
            <div>
                <Link id="mbl-search-icon" className="btn search-icon"> <Image src="assets/images/search-icon.png" /></Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navb">
                    <span className="navbar-toggler-icon" />
                </button>
            </div>

            <div className="mbl-search-box shadow">
                <input type="text" id="text-field2" placeholder="What you looking for......" />
            </div>

            <div className="collapse navbar-collapse" id="navb">
                <ul className="navbar-nav mr-auto mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">PRODUCTS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/maps">MAPS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/support">SUPPORT</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/discover">DISCOVER</Link>
                    </li>
                </ul>
                <form action="" className="form-inline">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            <Image id="search-icon" src="assets/images/search-icon.png" />
                                <div className="search-box shadow">
                                    <input type="text" id="text-field" placeholder="What you looking for ? ......" />
                                </div>
                        </Link>
                    </li>
                    <li className="nav-item d-flex justify-content-start signin-signup">
                        <Link className="nav-link" to="/"><Image src="assets/images/login.png" /></Link>
                    </li>
                </form>
            </div>
        </nav>
        )
    }
}



export default  Navbar;
