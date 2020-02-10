import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Navbar from '../components/navbar';
import Footer from "../components/footer";
import BannerImage from "./images/banner_bg.png";


var sectionStyle = {
    backgroundImage: `url(${BannerImage})`
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

                <Footer />
            </div>

        )
    }
}


export default Landingpage;

