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
                                    <li><Link to="#">Home</Link></li>
                                    <li><Link to="#">Discovery</Link></li>
                                    <li><Link to="#">Photos</Link></li>
                                    <li><Link to="#">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-12 footer_des">
                                <p className="font-weight-bold text-white site-link">How Do I ?</p>
                                <ul className="footer_list">
                                    <li><Link to="#">About</Link></li>
                                    <li><Link to="#">Help</Link></li>
                                    <li><Link to="#">Terms</Link></li>
                                    <li><Link to="#">Guidelines</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-12 footer_des">
                                <p className="font-weight-bold text-white site-link">Quick Links</p>
                                <ul className="footer_list">
                                    <li><Link to="#">Site Map</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                    <li><Link to="#">Terms of service</Link></li>
                                    <li><Link to="#">Cookie Policy</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-12 footer_des">
                                <p className="font-weight-bold text-white media-link">Connect</p>
                                <ul className="footer_li_con">
                                    <li><Link to="#"><i className="fa fa-instagram"></i></Link></li>
                                    <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                                    <li><Link to="#"><i className="fa fa-globe"></i></Link></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <p className="copyright">Copyright © 2020 WMS. All Rights
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