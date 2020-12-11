import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
// import Iframe from 'react-iframe';
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

                {/*Contact Content start*/}
                <main>

                    {/*----Contact-banner-section----*/}
                    <div classNmae="container-fluid contact-banner-sec" style={sectionStyle} />

                    {/*--Contact Us Content--*/}
                    <section classNmae="container contact-content">
                        <div classNmae="row">
                            {/*--Contact Information part--*/}
                            <div classNmae="col-md-5">
                                <h2 classNmae="contact-info">Contact Information</h2>
                                <article classNmae="information-sec">
                                    <p>Address: Flat – 02, Warren Hasting Court, Pier Road City, Gravesend, DA 11 9NL, United Kingdom</p>
                                    <hr classNmae="border-bottom" />
                                    <p>Phone Number: 800-820-9814</p>
                                    <hr classNmae="border-bottom" />
                                    <p>phone hours: Sales: Monday-Friday, 8 am to 9 pm EST, Saturday-Sunday, 8 am to 8 pm EST</p>
                                    <hr classNmae="border-bottom" />
                                    <ul classNmae="social-sec">
                                        <li><a href="/#"><i classNmae="fa fa-facebook"></i></a></li>
                                        <li><a href="/#"><i classNmae="fa fa-twitter"></i></a></li>
                                        <li><a href="/#"><i classNmae="fa fa-instagram"></i></a></li>
                                        <li><a href="/#"><i classNmae="fa fa-linkedin"></i></a></li>
                                    </ul>
                                </article>
                            </div>
                            {/*--End Contact Information part--*/}

                            {/*--Contact form part--*/}
                            <div classNmae="col-md-7">
                                <div classNmae="d-flex justify-content-start align-items-center">
                                    <h2>Contact Us</h2>
                                </div>
                                <form classNmae="contact-form-sec">
                                    <div classNmae="form-row">
                                        <div classNmae="form-group col-md-6">
                                            <div classNmae="form-row">
                                                <div classNmae="form-group col-md-12">
                                                    <input type="text" classNmae="form-control custom-input-btn" id="name" placeholder="Name" />
                                                </div>
                                                <div classNmae="form-group col-md-12">
                                                    <input type="email" classNmae="form-control custom-input-btn" id="email" placeholder="Email" />
                                                </div>
                                                <div classNmae="form-group col-md-12">
                                                    <input type="number" classNmae="form-control custom-input-btn" id="mobile" placeholder="Mobile" />
                                                </div>
                                            </div>
                                        </div>
                                        <div classNmae="form-group col-md-6">
                                            <textarea classNmae="form-control custom-text-area" id="text-area" placeholder="Type your comments"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" classNmae="btn slide_right custom-button"><b>SEND YOUR MESSAGE</b></button>
                                </form>
                            </div>
                            {/*End contact form part*/}
                        </div>
                        {/*End row*/}
                    </section>
                    {/*END Contact Us Content*/}

                     {/*--Iframe Section-- */}
                    <section classNmae="map-sec">
                        {/*<SimpleMap />*/}
                        {/*<Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.7829254851113!2d0.3532264159232775!3d51.443780323173556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b7dc29385d83%3A0x2f85d54dbb1e15c1!2sCombosoft!5e0!3m2!1sen!2sbd!4v1581237133948!5m2!1sen!2sbd" width="100%" height="450" frameborder="0" style="{{border:0}}" allowfullscreen=""></Iframe>*/}
                    </section>

                </main>
               {/*--End Contact content-- */}

                <Footer />
            </div>
        )
    }
}

export default Support;


//
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
//
//
// export class SimpleMap extends React.Component {
//
//     static defaultProps = {
//         center: {
//             lat: 59.95,
//             lng: 30.33
//         },
//         zoom: 11
//     };
//     render() {
//         return (
//             // Important! Always set the container height explicitly
//             <div style={{ height: '100vh', width: '100%' }}>
//                 <GoogleMapReact
//                     bootstrapURLKeys={{ key: AIzaSyDhLcPdoqHKfy4nRRheegQyTC18O-cvoTQ }}
//                     defaultCenter={this.props.center}
//                     defaultZoom={this.props.zoom}
//                 >
//                     <AnyReactComponent
//                         lat={59.955413}
//                         lng={30.337844}
//                         text="My Marker"
//                     />
//                 </GoogleMapReact>
//             </div>
//         );
//     }
// }



//
// class SimpleMap extends Component {
//     static defaultProps = {
//         center: {
//             lat: 59.95,
//             lng: 30.33
//         },
//         zoom: 11
//     };
//
//     render() {
//         return (
//             // Important! Always set the container height explicitly
//             <div style={{ height: '100vh', width: '100%' }}>
//                 <GoogleMapReact
//                     bootstrapURLKeys={{ key: AIzaSyDhLcPdoqHKfy4nRRheegQyTC18O-cvoTQ }}
//                     defaultCenter={this.props.center}
//                     defaultZoom={this.props.zoom}
//                 >
//                     <AnyReactComponent
//                         lat={59.955413}
//                         lng={30.337844}
//                         text="My Marker"
//                     />
//                 </GoogleMapReact>
//             </div>
//         );
//     }
// }
//
// export default SimpleMap;

