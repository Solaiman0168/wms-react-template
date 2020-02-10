import React, { Component } from "react";
import { Link } from "react-router-dom";




class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
                <Link className="navbar-brand" to="/"> WMS-UI </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navb">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navb">
                    <ul className="navbar-nav mr-auto mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutus">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/solution">Solution</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/support">Support</Link>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <li className="nav-item">
                            <Link className="nav-link text-white"  to="">Sign In</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link btn-signup"  to="">Sign Out</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to=""><i className="fa fa-search text-white"></i></Link>
                        </li>
                    </form>
                </div>
            </nav>
        )
    }
}



export default  Navbar;
