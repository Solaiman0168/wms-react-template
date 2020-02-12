import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';
import ImageContactBannerSec from "../assets/images/contact-bg.png";


var sectionStyle = {
    backgroundImage: `url(${ImageContactBannerSec})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'noRepeat',
}

class Support extends Component {
    render() {
        return (

            <div>
                <Navbar />
                {/*--------Contact-banner-section----------*/}
                <div className="container-fluid contact-banner-sec" style={sectionStyle} />

                {/*-------Contact Us  Content--------*/}
                <div className="container contact-content">
                    <div className="d-flex justify-content-center align-items-center">
                        <h1>Contact Us</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="information-sec">
                                <p className="contact-info">Contact Information</p>
                                <p>Address:</p>
                                <p>Flat – 02, Warren Hasting Court,Pier Road</p>
                                <p>City, Gravesend, DA 11 9NL</p>
                                <p>United Kingdom</p>
                                <hr className="w-50 border-bottom"/>
                                <p>Phone Number:</p>
                                <p>800-820-9814</p>
                                <hr className="w-50 border-bottom"/>
                                <p>Our phone hours are:</p>
                                <p>Sales: Monday-Friday, 8 am to 9 pm EST</p>
                                <br/>
                                <p>Saturday-Sunday, 8 am to 8 pm EST</p>
                                <hr className="w-50 border-bottom"/>
                                <p>Social Links:</p>
                                <ul className="social-sec">
                                    <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                                    <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="fa fa-instagram"></i></Link></li>
                                    <li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="row">
                                <div className="col-md-8 offset-md-2">
                                    <div className="contact-form-sec">
                                        <p className="contact-info">Send us a message</p>
                                        <form className="" action="">
                                            <div className="form-group">
                                                <label htmlFor="first-name">First Name</label>
                                                <input type="text" className="form-control custom-input-btn" id="first-name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="last-name">Last Name</label>
                                                <input type="text" className="form-control custom-input-btn" id="last-name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" className="form-control custom-input-btn" id="email" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone</label>
                                                <input type="number" className="form-control custom-input-btn" id="phone" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="text-area">How can we help you?</label>
                                                <textarea className="form-control custom-text-area" id="text-area" />
                                            </div>
                                            <button type="submit" className="btn btn-primary custom-button"><b>SEND YOUR MESSAGE</b></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="map-sec">
                        <p className="contact-info">Find Us</p>
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.7829254851113!2d0.3532264159232775!3d51.443780323173556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b7dc29385d83%3A0x2f85d54dbb1e15c1!2sCombosoft!5e0!3m2!1sen!2sbd!4v1581237133948!5m2!1sen!2sbd" width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen="" />
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Support;