import React from "react";
import './Shop.css'
import { Link } from "react-router-dom";



function Shop() {
    return (
        <>
            <section className="shop1 container">
                <div className="row shop1">
                    <div className="col-12 watch">Watch Shop</div>
                </div>
            </section>

            <section className="section4 container-fluid">
                <div className="container">

                    <div className="d-flex gap-5 high  mb-5 mt-5">
                  
                        <p className="arrivals"><a href="/shop">Newest Arrivals</a></p>
                        <p className="arrivals2"><a href="/shop">Price High to Low</a></p>
                        <p className="arrivals2"><a href="/shop">Most Popular</a></p>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 popular-img">
                            <img src="images/popular1.png" alt="" className="img-fluid" /> <br />
                            <div>
                            <div className="img-caption">
                                Thermo Ball Etip Gloves
                                </div>
                            <p className="pop-price">$ 45,743 <br />
                            <button type="button"className="bus ">
                            <Link to={"/Cart"}><i class="fa-solid fa-cart-shopping"></i></Link>
                           </button>

                            </p>
                            
                            </div>
                        
                            
                        </div>
                        
                        <div className="col-12 col-md-6 col-lg-4 popular-img">
                            <img src="images/popular2.png" alt="" className="img-fluid" />
                            <div className="img-caption">
                                Thermo Ball Etip Gloves
                            </div>
                            <p className="pop-price">$ 45,743
                            <br />
                            <button type="button"className="bus ">
                            <Link to={"/Cart"}><i class="fa-solid fa-cart-shopping"></i></Link>
                           </button>

                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 popular-img">
                            <img src="images/popular3.png" alt="" className="img-fluid" />
                            <div className="img-caption">
                                Thermo Ball Etip Gloves
                            </div>
                            <p className="pop-price">$ 45,743
                            <br />
                            <button type="button"className="bus ">
                            <Link to={"/Cart"}><i class="fa-solid fa-cart-shopping"></i></Link>
                           </button>

                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 popular-img">
                            <img src="images/popular4.png" alt="" className="img-fluid" />
                            <div className="img-caption">
                                Thermo Ball Etip Gloves
                            </div>
                            <p className="pop-price">$ 45,743
                            <br />
                            <button type="button"className="bus ">
                            <Link to={"/Cart"}><i class="fa-solid fa-cart-shopping"></i></Link>
                           </button>

                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 popular-img">
                            <img src="images/popular5.png" alt="" className="img-fluid" />
                            <div className="img-caption">
                                Thermo Ball Etip Gloves
                            </div>
                            <p className="pop-price">$ 45,743
                            <br />
                            <button type="button"className="bus ">
                            <Link to={"/Cart"}><i class="fa-solid fa-cart-shopping"></i></Link>
                           </button>

                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 popular-img">
                            <img src="images/popular6.png" alt="" className="img-fluid" />
                            <div className="img-caption">
                                Thermo Ball Etip Gloves
                            </div>
                            <p className="pop-price">$ 45,743
                            <br />
                            <button type="button"className="bus ">
                            <Link to={"/Cart"}><i class="fa-solid fa-cart-shopping"></i></Link>
                           </button>

                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section7 container-fluid">
                <div className="container">
                    <div className="mt-5 clr">
                    <div>
                    <div className="row ms-4 me-4">
                        <div className="col-12 col-md-6 col-lg-4">
                            <p className="icon mt-5"><i class="fa-solid fa-cube"></i></p>
                           <h3  className="icon-txt2">Free Shipping Method</h3>
                           <p className="icon-txt mb-5">aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <p className="icon mt-5"><i class="fa-solid fa-lock"></i></p>
                           <h3  className="icon-txt2">Free Shipping Method</h3>
                           <p className="icon-txt mb-5">aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <p className="icon mt-5"><i class="fa-solid fa-arrows-rotate"></i></p>
                           <h2 className="icon-txt2">Free Shipping Method</h2>
                           <p className="icon-txt mb-5">aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
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

export default Shop