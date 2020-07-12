// import React, { Component } from "react";
// import Navbar from '../components/navbar';
// import Footer from '../components/footer';
// import {Image} from 'react-bootstrap';
// import {Link} from 'react-router-dom';
//
//
// className Products extends Component {
//     render () {
//         return (
//             <div>
//                 <Navbar />
//
//
//
//                 {/*Product Content start */}
//
//                 <main>
//
//                     <section className="container-fluid product-hero-content">
//                         <article className="product-heading">
//                             <h1 className="p-heading">Gator Website Builder</h1> &nbsp;
//                             <hr className="product-heading-hr" />
//                         </article>
//                         <article className="text-center">
//                             <h1 className="p-heading">The first step to starting your business</h1>
//                             <p className="p-h-paragraph">HostGator's drag and drop website builder is designed to be easy, eCommerce- friendly, and perfect for your new business</p>
//                         </article>
//                         <div className="container mobile-img-section">
//                             <div className="row">
//                                 <div className="col-md-12 col-lg-4 text-right image-1">
//                                     <div className="first-img-div">
//                                         <Image className="pt-4" src="assets/images/wms/product-page_2.png" alt="IMAGE-1" />
//                                         <article className="first-article">
//                                             <h1>Starter</h1>
//                                             <p className="para-1">Perfect plan for getting started</p>
//                                             <h4>STARTING AT</h4>
//                                             <p className="price-1">$3.84/mo*</p>
//                                             <p className="para-2"><i className="fa fa-star"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FREE HOSTING</p>
//                                             <p className="para-3"><i className="fa fa-star"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DOMAIN NAME INCLUDED</p>
//                                             <p className="para-4"><i className="fa fa-star"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DRAG AND DROP BUILDER</p>
//                                             <p className="para-5"><i className="fa fa-star"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CUSTOMIZABLE TEMPLATES</p>
//                                             <p className="para-6"><i className="fa fa-star"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WEBSITE ANALYTICS</p>
//                                             <h2>NOW 50% OFF!</h2>
//                                             <a className="img" to="/" ><Image src="assets/images/button/button-1.png" /></a>
//                                         </article>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-12 col-lg-4 image-2">
//                                     <div className="middle-img-div">
//                                         <Image className="middle-img" src="assets/images/wms/product-page_3.png" alt="IMAGE-2" />
//                                         <article className="second-article">
//                                             <h1>Premium</h1>
//                                             <p className="line-one">Increase your site traffic</p>
//                                             <h4>STARTING AT</h4>
//                                             <p className="price-2">$5.99/mo*</p>
//                                             <p className="first-heading">EVERYTHING IN STARTER, PLUS</p>
//                                             <p className="para-1"><i className="fa fa-star"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRIORITY SUPPORT</p>
//                                             <h2>NOW 50% OFF!</h2>
//                                             <a className="img" to="/" ><Image src="assets/images/button/button-2.png" /></a>
//                                         </article>
//                                     </div>
//                                 </div>
//                                 <div className="col-md-12 col-lg-4 image-3">
//                                     <div className="last-img-div">
//                                         <Image className="pt-4" src="assets/images/wms/product-page_4.png" alt="IMAGE-3" />
//                                         <article className="third-article">
//                                             <h1>eCommerce</h1>
//                                             <p className="line-one">Do more, and sell products</p>
//                                             <h4>STARTING AT</h4>
//                                             <P className="price-3">$9.22/mo*</P>
//                                             <p className="first-heading">EVERYTHING IN PREMIUM, PLUS:</p>
//                                             <p className="para-1"><i className="fa fa-star"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ECOMMERCE FUNCTIONALITY</p>
//                                             <h2>NOW 50% OFF!</h2>
//                                             <a className="img" to="/" ><Image src="assets/images/button/button-3.png" /></a>
//                                         </article>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//
//                     <section className="section-2">
//                         <div className="container-fluid">
//                             <div className="row">
//                                 <article className="col-md-6 sec-2-heading">
//                                     <h1><b>Drag, drop, and publish. It really is that simple</b></h1>
//                                     <p>Seasoned pros and novice users alike will be amazed at how quickly and easily a new website can be built and launched with this powerful, yet simple website builder. Drag and drop your way into online success.</p>
//                                     <h4>Start your site for $3.84/month*</h4>
//                                     <a className="btn get-started-btn" to="/" >GET STARTED</a>
//                                 </article>
//                             </div>
//                         </div>
//                     </section>
//
//                     <section className="section-3">
//                         <div className="container-fluid">
//                             <article className="sec-3-heading">
//                                 <h1>Mobile-friendly templates for every kind of website</h1>
//                                 <p>Fully-customizable and guaranteed to look beautiful on any device we've got the right website template to bring your idea to life.</p>
//                             </article>
//                             <div className="row">
//                                 <div className="col-md-4 col-sm-6 text-center pb-4">
//                                     <Image src="assets/images/product-1.png" alt="product-1" />
//                                 </div>
//                                 <div className="col-md-4 col-sm-6 text-center pb-4">
//                                     <Image src="assets/images/product-2.png" alt="product-2" />
//                                 </div>
//                                 <div className="col-md-4 col-sm-6 text-center pb-4">
//                                     <Image src="assets/images/product-3.png" alt="product-3" />
//                                 </div>
//                                 <div className="col-md-4 col-sm-6 text-center pb-4">
//                                     <Image src="assets/images/product-4.png" alt="product-4" />
//                                 </div>
//                                 <div className="col-md-4 col-sm-6 text-center pb-4">
//                                     <Image src="assets/images/product-5.png" alt="product-5" />
//                                 </div>
//                                 <div className="col-md-4 col-sm-6 text-center pb-4">
//                                     <Image src="assets/images/product-6.png" alt="product-6" />
//                                 </div>
//                             </div>
//                             <article className="sec-3-bottom">
//                                 <h4>Start your site for $3.84/month*</h4>
//                                 <a className="btn get-started-btn">GET STARTED</a>
//                             </article>
//                         </div>
//                     </section>
//
//
//                     <section className="section-4">
//                         <div className="container-fluid">
//                             {/*1st image content*/}
//                             <div className="row">
//                                 <article className="col-md-12 col-lg-5 article first-article">
//                                     <hr className="hr-1" />
//                                     <h2 style={{fontWeight: "italic"}}>More tools to help<br />
//                                         you do more</h2>
//                                     <h4 style={{fontWeight: "italic"}}>Analytics, social, and productivity</h4>
//                                     <hr className="hr-2" />
//                                     <p>Easy-to-understand analytics ensure you're able to see at a glance exactly how well your website is performing with all Gator Website Builder accounts. Simple social media tools allow you to add live feeds from Instagram, Twitter, and Facebook in order to stay engaged. You can add G Suite productivity tools to your domain, enabling Gmail, Docs, Slides, and more.</p>
//                                     <h5 style={{fontWeight: "italic"}}>Get the best tools for $3.84/mo*</h5>
//                                     <Link className="btn get-started-btn" to="/" >BUY NOW</Link>
//                                 </article>
//                                 <div className="col-md-12 col-lg-7 text-right">
//                                     <Image className="image-one" src="assets/images/product-7.png" alt="IMAGE-7" />
//                                 </div>
//                             </div>
//                             {/*End 1st image content*/}
//
//                             {/*2nd image content*/}
//                             <div className="row med-screen-reverse">
//                                 <div className="col-md-12 col-lg-7">
//                                     <Image className="image-two" src="assets/images/product-8.png" alt="IMAGE-8" />
//                                 </div>
//                                 <article className="col-md-12 col-lg-5 article article-2 sec-thr-article">
//                                     <hr className="hr-2" />
//                                     <h2 style={{fontWeight: "italic"}}>More tools to help<br/>
//                                         you do more</h2>
//                                     <h4 style={{fontWeight: "italic"}}>Analytics, social, and productivity</h4>
//                                     <hr align="right" className="hr-3" />
//                                     <p>Easy-to-understand analytics ensure you're able to see at a glance exactly how well your website is performing with all Gator Website Builder accounts. Simple social media tools allow you to add live feeds from Instagram, Twitter, and Facebook in order to stay engaged. You can add G Suite productivity tools to your domain, enabling Gmail, Docs, Slides, and more.</p>
//                                     <h5 style={{fontWeight: "italic"}}>Get the best tools for $3.84/mo*</h5>
//                                     <a className="btn get-started-btn" to="/" >BUY NOW</a>
//                                 </article>
//                             </div>
//                             <!--// End 2nd image content-->
//
//                             <!-- 3rd image content-->
//                             <div className="row">
//                                 <article className="col-md-12 col-lg-5 article sec-thr-article">
//                                     <hr className="hr-1" />
//                                     <h2 style={{fontWeight: "italic"}}>More tools to help<br/>
//                                         you do more</h2>
//                                     <h4 style={{fontWeight: "italic"}}>Analytics, social, and productivity</h4>
//                                     <hr className="hr-2" />
//                                     <p>Easy-to-understand analytics ensure you're able to see at a glance exactly how well your website is performing with all Gator Website Builder accounts. Simple social media tools allow you to add live feeds from Instagram, Twitter, and Facebook in order to stay engaged. You can add G Suite productivity tools to your domain, enabling Gmail, Docs, Slides, and more.</p>
//                                     <h5 style={{fontWeight: "italic"}}>Get the best tools for $3.84/mo*</h5>
//                                     <a className="btn get-started-btn" to="/" >BUY NOW</a>
//                                 </article>
//                                 <div className="col-md-12 col-lg-7 text-right">
//                                     <Image className="image-one" src="assets/images/product-9.png" alt="IMAGE-9" />
//                                 </div>
//                             </div>
//                             <!--// End 3rd image content-->
//
//                         </div>
//                     </section>
//
//                     <Section className="section-5">
//                         <div className="container-fluid">
//                             <h1 className="table-heading">Compare to find the perfect plan for you!</h1>
//                             <div className="table-responsive">
//                                 <table className="product-table">
//                                     <thead>
//                                     <tr>
//                                         <th></th>
//                                         <th>
//                                             <h3 className="title">starter</h3>
//                                             <p>Starting at <b>$3.84/mo*</b></p>
//                                             <a className="btn table-btn" to="/" >Buy Now</a>
//                                         </th>
//                                         <th>
//                                             <h3 className="title">Premium</h3>
//                                             <p>Starting at <b>$5.99/mo*</b></p>
//                                             <a className="btn table-btn" to="/" >Buy Now</a>
//                                         </th>
//                                         <th>
//                                             <h3 className="title">eCommerce</h3>
//                                             <p>Starting at <b>$9.22/mo*</b></p>
//                                             <a className="btn table-btn" to="/" >Buy Now</a>
//                                         </th>
//                                     </tr>
//                                     </thead>
//                                     <tbody>
//                                     <tr>
//                                         <td>Pages</td>
//                                         <td>Unlimited</td>
//                                         <td>Unlimited</td>
//                                         <td>Unlimited</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Storage</td>
//                                         <td>Unmetered</td>
//                                         <td>Unmetered</td>
//                                         <td>Unmetered</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Bandwidth</td>
//                                         <td>Unmetered</td>
//                                         <td>Unmetered</td>
//                                         <td>Unmetered</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Free domain name registration</td>
//                                         <td>12 month term</td>
//                                         <td>12 month term</td>
//                                         <td>12 month term</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Ad vouchers</td>
//                                         <td>$200</td>
//                                         <td>$200</td>
//                                         <td>$200</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Analytics</td>
//                                         <td><i className="fa fa-times" aria-hidden="true"></i></td>
//                                         <td><i className="fa fa-check" aria-hidden="true"></i></td>
//                                         <td><i className="fa fa-times" aria-hidden="true"></i></td>
//                                     </tr>
//                                     <tr>
//                                         <td>SSL certificate</td>
//                                         <td><i className="fa fa-times" aria-hidden="true"></i></td>
//                                         <td><i className="fa fa-check" aria-hidden="true"></i></td>
//                                         <td><i className="fa fa-check" aria-hidden="true"></i></td>
//                                     </tr>
//                                     <tr>
//                                         <td>Connect existing domains</td>
//                                         <td><i className="fa fa-check" aria-hidden="true"></i></td>
//                                         <td><i className="fa fa-check" aria-hidden="true"></i></td>
//                                         <td><i className="fa fa-check" aria-hidden="true"></i></td>
//                                     </tr>
//                                     <tr>
//                                         <td>Password protection</td>
//                                         <td><i className="fa fa-times" aria-hidden="true"></i></td>
//                                         <td><i className="fa fa-check" aria-hidden="true"></i></td>
//                                         <td><i className="fa fa-check" aria-hidden="true"></i></td>
//                                     </tr>
//                                     <tr>
//                                         <td>HD video & audio</td>
//                                         <td><i className="fa fa-check" aria-hidden="true"></i></td>
//                                         <td><i className="fa fa-check" aria-hidden="true"></i></td>
//                                         <td><i className="fa fa-check" aria-hidden="true"></i></td>
//                                     </tr>
//                                     <tr>
//                                         <td>Save, view, or restore site history</td>
//                                         <td><i className="fa fa-times" aria-hidden="true"></i></td>
//                                         <td><i className="fa fa-times" aria-hidden="true"></i></td>
//                                         <td><i className="fa fa-check" aria-hidden="true"></i></td>
//                                     </tr>
//                                     <tr>
//                                         <td>Chat, email, & phone support</td>
//                                         <td><i className="fa fa-times" aria-hidden="true"></i></td>
//                                         <td><i className="fa fa-check" aria-hidden="true"></i></td>
//                                         <td><i className="fa fa-check" aria-hidden="true"></i></td>
//                                     </tr>
//                                     <tr>
//                                         <td>Priority support</td>
//                                         <td><i className="fa fa-check" aria-hidden="true"></i></td>
//                                         <td><i className="fa fa-check" aria-hidden="true"></i></td>
//                                         <td><i className="fa fa-check" aria-hidden="true"></i></td>
//                                     </tr>
//                                     <tr>
//                                         <td className="last-td">
//                                             Store/eCommerce
//                                             <div className="text-center">
//                                                 <p className="system">Inventory management</p>
//                                                 <p className="system">Shipping & tax calculator</p>
//                                                 <p className="system">Coupons</p>
//                                             </div>
//                                         </td>
//                                         <td className="last-td"><i className="fa fa-times" aria-hidden="true"></i></td>
//                                         <td className="last-td"><i className="fa fa-times" aria-hidden="true"></i></td>
//                                         <td className="last-td"><i className="fa fa-check" aria-hidden="true"></i></td>
//                                     </tr>
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </Section>
//
//                 </main>
//                 {/*End Contact content */}
//
//
//                 <Footer />
//             </div>
//         )
//     }
// }
//
//
// export default Products;