import React from "react";
import './Home.css'


function Home() {
    return (
        <>
            <section className="section1 container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="text">Select Your New Perfect Style</h1>
                            <p className="text2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat culpa dolorum, consectetur ipsa pariatur provident explicabo rem unde velit.</p>

                            <button type="button" className="mb-5">Shop Now</button>

                        </div>
                        <div className="col-lg-3 d-none d-lg-block">
                            <img src="images/watch.png" alt="" />

                        </div>
                    </div>
                </div>
            </section>

            <section className="section2 container-fluid">
                <div className="container">
                    <h1 className="new">New Arrivals</h1>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <img src="images/new_product1.png" alt="" className="img-fluid" />
                            <p className="t1  mt-4">Thermo Ball Etip Gloves</p>
                            <p className="t2">$ 45,743</p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <img src="images/new_product2.png" alt="" className="img-fluid" />
                            <p className="t1 mt-4">Thermo Ball Etip Gloves</p>
                            <p className="t2">$ 45,743</p>

                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <img src="images/new_product3.png" alt="" className="img-fluid" />
                            <p className="t1 mt-4">Thermo Ball Etip Gloves</p>
                            <p className="t2 mb-5">$ 45,743</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section3 container-fluid">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 mb-5 ">
                        <img src="images/gallery1.png" alt="" className="img-fluid h-100" />

                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <img src="images/gallery2.png" alt="" className="img-fluid mb-5" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <img src="images/gallery3.png" alt="" className="img-fluid mb-5 " />
                        <img src="images/gallery4.png" alt="" className="img-fluid d-md-none d-lg-block" />
                    </div>
                </div>
            </section>

            <section className="section4 container-fluid">
                <div className="container">

                    <div className="text-center">
                        <h1 className="popular mt-5">Popular Items</h1>
                        <p className="pop-text mb-5">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 popular-img">
                            <img src="images/popular1.png" alt="" className="img-fluid" />
                            <div className="img-caption">
                                Thermo Ball Etip Gloves
                            </div>
                            <p className="pop-price">$ 45,743</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 popular-img">
                            <img src="images/popular2.png" alt="" className="img-fluid" />
                            <div className="img-caption">
                                Thermo Ball Etip Gloves
                            </div>
                            <p className="pop-price">$ 45,743</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 popular-img">
                            <img src="images/popular3.png" alt="" className="img-fluid" />
                            <div className="img-caption">
                                Thermo Ball Etip Gloves
                            </div>
                            <p className="pop-price">$ 45,743</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 popular-img">
                            <img src="images/popular4.png" alt="" className="img-fluid" />
                            <div className="img-caption">
                                Thermo Ball Etip Gloves
                            </div>
                            <p className="pop-price">$ 45,743</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 popular-img">
                            <img src="images/popular5.png" alt="" className="img-fluid" />
                            <div className="img-caption">
                                Thermo Ball Etip Gloves
                            </div>
                            <p className="pop-price">$ 45,743</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 popular-img">
                            <img src="images/popular6.png" alt="" className="img-fluid" />
                            <div className="img-caption">
                                Thermo Ball Etip Gloves
                            </div>
                            <p className="pop-price">$ 45,743</p>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <button type="button" className="pop-btn"><a href="#">VIEW MORE PRODUCTS</a></button>
                    </div>
                </div>
            </section>

            <section className="section5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <h1 className="choice1 mt-5">Watch of Choice</h1>
                            <p className="text2">Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>

                            <button type="button" className="pop-btn1 mb-5"><a href="#">SHOW WATCHES</a></button>
                        </div>
                        <div className="col-12 col-lg-6">
                            <img src="images/choce_watch1.png" alt="" className="img-fluid mb-5" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section6">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <img src="images/choce_watch2.png" alt="" className="img-fluid" />
                        </div>
                        <div className="col-12 col-lg-6">
                            <h1 className="choice1 mt-5">Watch of Choice</h1>
                            <p className="text2">Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>

                            <button type="button" className="pop-btn1 mb-5"><a href="#">SHOW WATCHES</a></button>
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

export default Home