import React from "react";
import './Latest.css'


function Latest(){
    return(
        <>
        <section className="shop1 container">
                <div className="row shop1">
                    <div className="col-12 watch">Watch Shop</div>
                </div>
            </section>

            <section className=" container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <img src="public/images/gallery1.png" alt="" className="img-fluid gallery"/>
                            <div className="foam  mt-5">
                        Foam filling cotton slow <br />
                            rebound pillows
                        </div>
                        <div className="growth  mt-5">
                        Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources. Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness. Credibly innovate granular internal or organic sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas. with optimal networks.
                        </div>

                        <div className="mt-5">
                            <button type="button" className="cart mb-5 ">Add To Cart</button>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" promotions container-fluid">
                <div className="container">
                    <div className="row mb-5 mt-5">
                        <div className="col-lg-12">
                            <h3 className="updates mb-4 mt-5">Get promotions & updates!</h3>
                            <p>Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources credibly innovate granular internal.</p>
                           <button type="button" className=" email mb-5  btn1 btn1-outline-secondary text-white mt-5">Enter Your Email</button>
                        </div>

                    </div>

                </div>
            </section>

            <footer className="footer container-fluid">
            <div className="container">
                <div className="row"> 
                    <div className="col-12 col-md-6 col-lg-3">
                        <p className="mb-5"><img src="public/images/logo2_footer (2).png" alt="" /></p>
                        <p className="last-para">Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <h2 className="mb-5">Quick Links</h2>
                        <div className="mb-3">
                        <a href="#">About</a> <br />
                        </div>
                       <div className="mb-3">
                       <a href="#">Offers & Discounts</a> <br />
                       </div>
                        <div className="mb-3">
                        <a href="#">Get Coupon</a> <br />
                        </div>
                       <div  className="mb-5" >
                       <a href="#">Contact Us</a>
                       </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <h2 className="mb-5">New Products</h2>
                        <div className="mb-3">
                        <a href="#">Woman Cloth</a> <br />
                        </div>
                        <div className="mb-3">
                            <a href="#">Fashion Accessories</a> <br />
                        </div>
                        <div className="mb-3">
                        <a href="#">Man Accessories</a> <br />
                        </div>
                       <div className="mb-5">
                       <a href="#">Rubber made Toys</a>
                       </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <h2 className="mb-5">Support</h2>
                        <div className="mb-3">
                        <a href="#">Frequently Asked Questions</a> <br />
                        </div>
                        <div className="mb-3">
                        <a href="#">Terms & Conditions</a> <br />
                        </div>
                        <div className="mb-3">
                        <a href="#">Privacy Policy</a> <br />
                        </div>
                       <div className="mb-5">
                       <a href="#">Report a Payment Issue</a>
                       </div>
                    </div>
                </div>
            </div>
        </footer>

        <div className="container-fluid">
            <div className="container">
                <div className="copy">
                    <div>
                    <p>Copyright ©2024 All rights reserved | This template is made with <span><i class="fa-solid fa-heart"></i></span>  by <span className="Rutu"><a href="#">Rutuja Mohite</a></span></p>
                    </div>
                    <div className="d-flex gap-4 brands">
                    <div >
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                    <div>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    </div>
                    <div>
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    </div>
                    <div>
                        <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )

}

export default Latest