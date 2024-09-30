import React from "react";
import './Cart.css'


function Cart() {
    return (
        <>
            <section className="shop1 container">
                <div className="row shop1 ">
                    <div className="col-12 watch">Cart List</div>
                </div>
                </section>
                <div className="container mt-5 d-none d-lg-block">
                    <div className="row">
                        <div className=" col-6 col-lg-6">
                            <p className="fs-5 fw-6 mb-5">Product</p>
                            <div className="d-flex">
                                <p ><img src="images/card1.png" alt="" className="cartimg img-fluid" /></p>
                                <p className="ms-5 mt-4">Minimalistic shop for multipurpose use</p>
                            </div>
                        </div>
                            <div className=" col-6 col-lg-2">
                            <p className="fs-5 fw-6 mb-5">Price</p>
                            <div>
                                <p>$360.00</p>
                            </div>
                            </div>

                        <div className=" col-2">
                            <p className="fs-5 fw-6 mb-5">Quantity</p>
                            <div className="d-flex text-center">
                                <p className="one d-flex align-items-center justify-content-center">1</p>
                                <div className="one text-center">
                                    <p><i class="fa-solid fa-plus"></i> <br /><i class="fa-solid fa-minus"></i></p>
                                    <p></p>
                                </div>
                            </div>
                        </div>

                        <div className=" col-2">
                            <p className="fs-5 fw-6 mb-5">Total</p>
                            <p>$720.00</p>
                        </div>
                    </div>
                    <hr />

                    <div className="row mt-5">
                        <div className="col-6">
                            <div className="d-flex">
                            <p ><img src="images/card2.png" alt="" className="cartimg img-fluid" /></p>
                            <p className="ms-5 mt-4">Minimalistic shop for multipurpose use</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <p>$360.00</p>
                            </div>
                        </div>
                        <div className=" col-2">
                            <div className="d-flex text-center">
                                <p className="one d-flex align-items-center justify-content-center">1</p>
                            <div className="one text-center">
                                <p><i class="fa-solid fa-plus"></i> <br /><i class="fa-solid fa-minus"></i></p>
                                <p></p>
                            </div>
                            </div>
                        </div>
                        <div className=" col-2">
                            <p>$720.00</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row mt-5">
                        <div className=" col-12 col-lg-6">
                        <div className="lastbttn mt-5">
                          <p ><button type="button" className="xyz">Update Cart</button></p>
                        </div>
                        </div>
                        <div className="col-2">
                           
                        </div>
                        <div className="col-2">
                           
                        </div>
                        <div className=" col-2">
                        <div className="lastbttn mt-5">
                          <p><button type="button" className="xyz">Close Coupon</button></p>
                        </div>
                        </div>
                    </div>
                    <hr />

                    <div className="row mt-5">
                        <div className="col-6">
                        
                        </div>
                        <div className="col-2">
                           
                        </div>
                        <div className=" col-2">
                            <p className="mt-3">Subtotal</p>
                        </div>
                        <div className="col-2">
                        <p></p>$2160.00
                        </div>
                    </div>
                   <hr />

                   <div className="row mt-5">
                        <div className="col-6">
                        
                        </div>
                        <div className="col-2">
                           
                        </div>
                        <div className="col-2">
                            <p className="mt-3">Shipping</p>
                        </div>
                        <div className="col-2">
                        <p>Flat Rate: $5.00 </p>
                        <p>Free Shipping</p>
                        <p>Flat Rate: $10.00</p>
                        <p>Local Delivery: $2.00</p>
                        <div className="lastbttn mt-5">
                          <p><button type="button" className="xyz">Update Details</button></p>
                        </div>
                        </div>
                        <hr />
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-6">
                        
                        </div>
                        <div className="col-2">
                           
                        </div>
                        <div className="col-2">
                        <div className="lastbttn">
                          <p><button type="button" className="xyz">Continue Shopping</button></p>
                        </div>
                           
                        </div>
                        <div className="col-2">
                        <div className="lastbttn">
                          <p><button type="button" className="xyz">Proceed To Checkout</button></p>
                        </div>
                        </div>
                    </div>
                    <hr />
                </div>

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

export default Cart