import React from "react";
import './Login.css'


function Login(){
    return(
        <>
        <section className="shop1 container">
                <div className="row shop1 ">
                    <div className="col-12 watch">Login</div>
                </div>
        </section>

                <section className="container-fluid">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <div className="account">
                                <h3 className="acch3">New to our Shop?</h3>
                                <p className="mt-4 mb-4">New to our Shop?
                                There are advances being made in science and technology everyday, and a good example of this is the</p>
                                <button type="button" className="acc">CREATE AN ACCOUNT</button>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <div className="account2">
                                <h3 className="acch3">Welcome Back ! <br />
                                Please Sign in now</h3>
                                <input type="text"  placeholder="Username" className="inn mt-5"/> <br />
                                 <input type="text" placeholder="Password"className="inn mt-4" /> 
                                 <br />
                                <button type="button" className="butt mt-4 butt mb-3">LOG IN</button>
                                <p className="forget"><a href="#" >Forget Password?</a></p>
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
              
        
        </>
    )

}

export default Login