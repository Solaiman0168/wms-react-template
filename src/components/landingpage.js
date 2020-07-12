import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { Image } from 'react-bootstrap';
import Navbar from '../components/navbar';
import Footer from "../components/footer";
import Image from 'react-bootstrap/Image';
import BannerImage from "../assets/images/banner_bg.png";
import ImageSec1 from "../assets/images/Mask_Group_3.png";
import ImageSec2 from "../assets/images/Mask_Group_4.png";
import ImageSec3 from "../assets/images/Mask_Group_3.png";
// import Icon from "../assets/images/next-icon.png";


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

                <main>

                    <section className="banner_section parallax-window" data-parallax="scroll"
                             data-image-src="assets/images/banner_bg.png" style={sectionStyle}>
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-md-6 col-sm-12 text-center banner_content">
                                    {/*<Image className="wms-icon" src="assets/images/Icon.png" alt="WMS-Icon" />*/}
                                    <Image className="wms-icon" src="{Icon}" alt="WMS-Icon"/>
                                        <h1> Warehouse Management System </h1>
                                        <article>
                                            <h3>Your Inventory management app to control all your warehouse
                                                operations</h3>
                                            <p className="text-muted">See warehouse in action</p>
                                            <a className="demo-btn" href="#"><i className="fa fa-arrow-right"></i>&nbsp; SCHEDULE A FREE DEMO </a>
                                        </article>

                                </div>

                                <div className="col-md-6 col-sm-12 text-center tbo-Image-sec" id="tbo-Image-sec-a">
                                    <Image src="assets/images/tbo.png" alt="TBO-Image" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*-----PAGE CONTENT START----------*/}
                    {/*-----------Icon section------------*/}

                    <section className="icon_section">
                        <div className="container">
                            <div className="row icon-mbl-view">
                                <div className="col-md-6 icon-doc">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="mbl-icon"><Image className="text-white"
                                                                           src="assets/images/document.png" /></div>
                                        </div>
                                        <div className="col-md-8 icon-doc-text">
                                            <p className="text-white">Lorem ipsum dolor amet Lorem ipsum dolor amet
                                                Lorem ipsum dolor amet Lorem ipsum dolor amet</p>
                                        </div>
                                        <div className="col-md-1"></div>
                                    </div>
                                </div>
                                <div className="col-md-6 icon-doc">
                                    <div className="row col-rev">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-8 icon-doc-text">
                                            <p className="text-white">Lorem ipsum dolor amet Lorem ipsum dolor amet
                                                Lorem ipsum dolor amet Lorem ipsum dolor amet</p>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mbl-icon"><Image src="assets/images/agreement.png" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 icon-doc">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="mbl-icon"><Image src="assets/images/money.png" /></div>
                                        </div>
                                        <div className="col-md-8 icon-doc-text">
                                            <p className="text-white">Lorem ipsum dolor amet Lorem ipsum dolor amet
                                                Lorem ipsum dolor amet Lorem ipsum dolor amet</p>
                                        </div>
                                        <div className="col-md-1"></div>
                                    </div>
                                </div>
                                <div className="col-md-6 icon-doc">
                                    <div className="row col-rev">
                                        <div className="col-md-1"></div>
                                        <div className="col-md-8 icon-doc-text">
                                            <p className="text-white">Lorem ipsum dolor amet Lorem ipsum dolor amet
                                                Lorem ipsum dolor amet Lorem ipsum dolor amet</p>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="mbl-icon"><Image src="assets/images/graphic.png" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*----------Image section---------------*/}
                    <section className="container-fluid">
                        {/*--Image section 1--*/}
                        <div className="Image_full_section">
                            <div className="row">
                                <div className="col-md-7 col-sm-12" style={sectionStyle1}>
                                    <Image className="wms-Image-section" src="assets/images/wms1.png" alt="WMS-IMAGE" />
                                </div>
                                <article className="col-md-5 col-sm-12 bg-white text-center Image_right_sec">
                                    <h3>Dummy Text Header</h3>
                                    <p className="text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation\
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                        in reprehenderit in
                                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim
                                    </p>
                                    <a className="btn readmore_btn" href="#">Read More</a>
                                </article>
                            </div>
                        </div>


                        {/*Image section 2*/}
                        <div className="Image_full_section">
                            <div className="row column-rev">
                                <article className="col-md-5 col-sm-12 bg-white text-center Image_right_sec">
                                    <h3>Dummy Text Header</h3>
                                    <p className="text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation\
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                        in reprehenderit in
                                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim
                                    </p>
                                    <a className="btn readmore_btn" href="#">Read More</a>
                                </article>
                                <div className="col-md-7 col-sm-12" style={sectionStyle2}>
                                    <Image className="wms-Image-section" src="assets/images/wms2.png" alt="WMS-IMAGE" />
                                </div>
                            </div>
                        </div>


                        {/*Image section 3*/}
                        <div className="Image_full_section">
                            <div className="row">
                                <div className="col-md-7 col-sm-12" style={sectionStyle3}>
                                    <Image className="wms-Image-section" src="assets/images/wms1.png" alt="WMS-IMAGE" />
                                </div>
                                <article className="col-md-5 col-sm-12 bg-white text-center Image_right_sec">
                                    <h3>Dummy Text Header</h3>
                                    <p className="text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation\
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                        in reprehenderit in
                                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id
                                    </p>
                                    <a className="btn readmore_btn" href="#">Read More</a>
                                </article>
                            </div>
                        </div>
                    </section>

                </main>

                <Footer />
            </div>

        )
    }
}


export default Landingpage;

