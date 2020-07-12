import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component {
    render() {
        return (

            <div>
                <footer className="footer_bg">
                    <div className="container-fluid footer-content">
                        <div className="row ">
                            <div className="col-md-3 cl-sm-6 footer_des">
                                <p className="font-weight-bold text-white site-link">Support</p>
                                <ul className="footer_list">
                                    <li><a to="/">Home</a></li>
                                    <li><a to="/">Discovery</a></li>
                                    <li><a to="/">Photos</a></li>
                                    <li><a to="/">Contact</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-12 footer_des">
                                <p className="font-weight-bold text-white site-link">How Do I ?</p>
                                <ul className="footer_list">
                                    <li><a to="/">About</a></li>
                                    <li><a to="/">Help</a></li>
                                    <li><a to="/">Terms</a></li>
                                    <li><a to="/">Guidelines</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-12 footer_des">
                                <p className="font-weight-bold text-white site-link">Quick Links</p>
                                <ul className="footer_list">
                                    <li><a to="/">Site Map</a></li>
                                    <li><a to="/">Privacy Policy</a></li>
                                    <li><a to="/">Terms of service</a></li>
                                    <li><a to="/">Cookie Policy</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-12 footer_des">
                                <p className="font-weight-bold text-white media-link">Connect</p>
                                <ul className="footer_li_con">
                                    <li><a to="/"><i className="fa fa-instagram"></i></a></li>
                                    <li><a to="/"><i className="fa fa-twitter"></i></a></li>
                                    <li><a to="/"><i className="fa fa-facebook"></i></a></li>
                                    <li><a to="/"><i className="fa fa-globe"></i></a></li>
                                </ul>
                            </div>
                            <div className="col-md-12">
                                <p className="copyright">Copyright &copy; 2020 WMS. All Rights
                                    Reserved. &nbsp;  | &nbsp; Designed and developed by Combosoft.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        )
    }
}



export default Footer;