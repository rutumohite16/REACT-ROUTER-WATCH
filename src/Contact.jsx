import React from "react";
import './Contact.css'


function Contact(){
    return(
        <>
        <section className="shop1 container">
                <div className="row shop1">
                    <div className="col-12 watch">Contact</div>
                </div>

                <section className="container">
            <div className="row">
                <div className="col-12 col-lg-8">
                    <div>
                        <div className="mb-5 mt-5">
                            <h3>Get in Touch</h3>
                        </div>
                        <form className="mb-5">
                            <div  className="mb-3">
                                <textarea rows={10} placeholder="Enter Message" required className="w-100"></textarea>
                            </div>
                            <div className="row">
                                 <div className="col-12 col-md-6 mb-3">
                                    <input type="text" placeholder="Enter your Name" className="w-100" required></input>
                                 </div>
                                 <div className="col-12 col-md-6 mb-3">
                                 <input type="email" placeholder="Enter your Email" className="w-100" required></input>
                                 </div>
                            </div>
                            <div className="mb-3">
                            <input type="text" placeholder="Enter your Subject" className="w-100" required></input>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-outline-danger ps-5 pe-5 pt-2 pb-2 send">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-12 col-lg-4 mt-lg-5 pt-lg-4  ">
                    <div className="row mt-lg-5 d-flex gap-5 ">
                        <div className="col-12 d-flex gap-3 align-items-center ps-5">
                            <div>
                            <i class="bi bi-house-door-fill fs-2"></i>
                            </div>
                            <div >
                                <p className="m-0 fw-bold">Buttonwood, California.</p>
                                <p className="m-0">Rosemead, CA 91770</p>
                            </div>
                        </div>
                        <div className="col-12 d-flex gap-3 align-items-center ps-5">
                            <div>
                            <i class="bi bi-tablet fs-2"></i>
                            </div>
                            <div  >
                                <p className="m-0 fw-bold">+1 253 565 2365.</p>
                                <p className="m-0">Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div className="col-12 d-flex gap-3 align-items-center ps-5">
                            <div>
                            <i class="bi bi-envelope fs-2"></i>
                            </div>
                            <div >
                                <p className="m-0 fw-bold">support@colorlib.com</p>
                                <p className="m-0">Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
     

     
      <footer className="footer container-fluid">
            <div className="container">
                <div className="row"> 
                    <div className="col-12 col-md-6 col-lg-3">
                        <p className="mb-5"><img src="images/logo2_footer (2).png" alt="" /></p>
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
        </section>

        
        
            
        
        </>
    )

}

export default Contact