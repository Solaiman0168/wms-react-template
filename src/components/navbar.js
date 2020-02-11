import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";



class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
                <NavLink className="navbar-brand" to="/"> <Image src="" alt="WMS-Logo" /> </NavLink>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navb">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navb">
                    <ul className="navbar-nav mr-auto mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/solution">Solution</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/support">Support</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white"  to="">Sign In</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link btn-signup"  to="">Sign Out</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  to=""><i className="fa fa-search text-white"></i></NavLink>
                        </li>
                    </form>
                </div>
            </nav>
        )
    }
}



export default  Navbar;
