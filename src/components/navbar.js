import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";




class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
                <Link className="navbar-brand" to="/"> <Image src="assets/images/logo.png" alt="WMS-Logo" /> </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navb">
                    <ul className="navbar-nav mr-auto mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/aboutus">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/product">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/solution">Solution</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/support">Support</Link>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <li className="nav-item">
                            <Link className="nav-link sign-in text-white"  to="">Sign In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn-signup"  to="">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to=""><i className="fa fa-search"></i></Link>
                        </li>
                    </form>
                </div>
            </nav>
        )
    }
}



export default  Navbar;
