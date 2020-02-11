import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Navbar from '../components/navbar';
import Footer from "../components/footer";
import BannerImage from "../assets/images/banner_bg.png";
import ImageSec1 from "../assets/images/Mask_Group_3.png";
import ImageSec2 from "../assets/images/Mask_Group_4.png";
import ImageSec3 from "../assets/images/Mask_Group_3.png";


var sectionStyle = {
    backgroundImage: `url(${BannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
}
var sectionStyle1 = {
    backgroundImage: `url(${ImageSec1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'noRepeat',
}
var sectionStyle2 = {
    backgroundImage: `url(${ImageSec2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'noRepeat',
}

var sectionStyle3 = {
    backgroundImage: `url(${ImageSec3})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'noRepeat',
}


class Landingpage extends Component {
    render() {
        return (

            <div>
                <Navbar />
                
                <div className="banner_section" style={sectionStyle}>
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-sm-12 text-center banner_content">
                                <Image className="wms-icon" src="images/Icon.png" alt="WMS-Icon" />
                                    <h1> Warehouse Management System </h1>
                                    <h3>Your Inventory management app to control all your warehouse operations</h3>
                                    <p className="text-muted">See warehouse in action</p>
                                    <Link className="btn schedule_button text-white font-weight-bold" to="#"><Image scr={""} />&nbsp; SCEADULE A FREE DEMO </Link>
                            </div>

                            <div className="col-md-6 col-sm-12 text-center tbo-img-sec">
                                <Image src="images/tbo.png" alt="TBO-IMG" />
                            </div>
                        </div>
                    </div>
                </div>

                {/*-----PAGE CONTENT START----------*/}
                {/*-----------Icon section------------*/}
                <section className="icon_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 icon-doc">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6 mx-auto">
                                        <Image className="text-white" src="assets/images/document.png" />
                                    </div>
                                    <div className="col-md-9 col-sm-6 mx-auto icon-doc-text">
                                        <p className="text-white">Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem
                                            ipsum dolor amet Lorem ipsum dolor amet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 icon-doc">
                                <div className="row">
                                    <div className="col-md-9 col-sm-6 mx-auto icon-doc-text">
                                        <p className="text-white text2">Lorem ipsum dolor amet Lorem ipsum dolor amet
                                            Lorem ipsum dolor amet Lorem ipsum dolor amet</p>
                                    </div>
                                    <div className="col-md-3 col-sm-6 mx-auto">
                                        <Image className="text-white" src="assets/images/agreement.png" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 icon-doc">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6 mx-auto">
                                        <Image className="text-white" src="assets/images/money.png" />
                                    </div>
                                    <div className="col-md-9 col-sm-6 mx-auto icon-doc-text">
                                        <p className="text-white">Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem
                                            ipsum dolor amet Lorem ipsum dolor amet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 icon-doc">
                                <div className="row">
                                    <div className="col-md-9 col-sm-6 mx-auto icon-doc-text">
                                        <p className="text-white text2">Lorem ipsum dolor amet Lorem ipsum dolor amet
                                            Lorem ipsum dolor amet Lorem ipsum dolor amet</p>
                                    </div>
                                    <div className="col-md-3 col-sm-6 mx-auto">
                                        <Image className="text-white" src="assets/images/graphic.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*----------Image section 1-----------------*/}
                <div className="container-fluid img_full_section">
                    <div className="row">
                        <div className="col-md-7 col-sm-12 " style={sectionStyle1} >
                            <Image className="wms-img-section" style={sectionStyle1} alt="WMS-IMAGE" />
                        </div>
                        <div className="col-md-4 col-sm-12 bg-white text-center img_right_sec">
                            <h3>Dummy Text Header</h3>
                            <p className="text-justify text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation\
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim
                            </p>
                            <Link className="btn readmore_btn" to="#">Read More</Link>
                        </div>
                        <div className="col-md-1" />
                    </div>
                </div>

                {/*----------Image section 2 for Desktop View--------------*/}
                <div className="container-fluid img_full_section large-view">
                    <div className="row">
                        <div className="col-md-1" />
                        <div className="col-md-4 col-sm-12 bg-white text-center img_right_sec">
                            <h3>Dummy Text Header</h3>
                            <p className="text-justify text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation\
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim
                            </p>
                            <Link className="btn readmore_btn" to="#">Read More</Link>
                        </div>
                        <div className="col-md-7 col-sm-12" style={sectionStyle2} >
                            <Image className="wms-img-section" src="assets/images/Mask_Group_4.png" alt="WMS-IMAGE" />
                        </div>
                    </div>
                </div>


                {/*----------Image section 2 for Mobile view-----------------*/}
                <div className="container-fluid img_full_section_mobile_view">
                    <div className="row">
                        <div className="col-md-7 col-sm-12" style={sectionStyle2}>
                            <Image className="wms-img-section" src="assets/images/Mask_Group_3.png" alt="WMS-IMAGE" />
                        </div>
                        <div className="col-md-5 col-sm-12 bg-white text-center img_right_sec">
                            <h3>Dummy Text Header</h3>
                            <p className="text-justify text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation\
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim
                            </p>
                            <Link className="btn readmore_btn" to="#">Read More</Link>
                        </div>
                    </div>
                </div>

                {/*----------Image section 3 -----------------*/}
                <div className="container-fluid img_full_section">
                    <div className="row">
                        <div className="col-md-7 col-sm-12" style={sectionStyle3}>
                            <Image className="wms-img-section" src="assets/images/Mask_Group_3.png" alt="WMS-IMAGE" />
                        </div>
                        <div className="col-md-4 col-sm-12 bg-white text-center img_right_sec">
                            <h3>Dummy Text Header</h3>
                            <p className="text-justify text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation\
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id
                            </p>
                            <Link className="btn readmore_btn" to="#">Read More</Link>
                        </div>
                        <div className="col-md-1" />
                    </div>
                </div>

                <Footer />
            </div>

        )
    }
}


export default Landingpage;

