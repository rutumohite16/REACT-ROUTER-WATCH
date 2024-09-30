import React from "react";
import './Nav.css';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <>
            <nav className="container">
                <div className="nav mb-4 mt-5">
                    <div>
                    <p><img src="images/logo (3).png" alt="" /></p>
                    </div>
                    <div className="d-none d-lg-block ">
                        <ul className=" d-flex gap-5">
                            <li className="ul">
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li className="ul">
                                <Link to={"/shop"}>Shop</Link>
                            </li>
                            <li className="ul">
                                <Link to={"/about"}>About</Link>
                            </li>
                            <li className="ul">
                                <Link to={"/latest"}>Latest</Link>
                            </li>
                            <li className="ul">
                                <Link to={"/blog"}>Blog</Link>
                            </li>
                            <li className="ul">
                                <Link to={"/contact"}>Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- offcanvas --> */}

                    <div class=" d-lg-none text-dark">
                        <button
                            type="button"
                            class="btn btn-outline-secondary "
                            data-bs-toggle="offcanvas"
                            data-bs-target="#menu"
                        >
                            <i class="fa-solid fa-bars"></i>
                        </button>
                        <div class="offcanvas offcanvas-end w-75" id="menu">
                            <div class="offcanvas-header">
                                <button
                                    type="button"
                                    class="btn btn-close"
                                    data-bs-dismiss="offcanvas"
                                ></button>
                            </div>
                            <div class="offcanvas-body ">
                                <ul className="d-flex flex-column gap-3 ">
                                    <li>
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to={"/shop"}>Shop</Link>
                                    </li>
                                    <li>
                                        <Link to={"/about"}>About</Link>
                                    </li>
                                    <li>
                                        <Link to={"/latest"}>Contact</Link>
                                    </li>
                                    <li>
                                        <Link to={"/blog"}>Blog</Link>
                                    </li>
                                    
                                    <li>
                                        <Link to={"/contact"}>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <ul className="d-flex gap-5 ul">
                            <li>
                                <Link to={"/search"}><i class="fa-solid fa-magnifying-glass"></i></Link>
                            </li>
                            <li>
                                <Link to={"/login"}><i class="fa-solid fa-user"></i></Link>
                            </li>
                            <li>
                                <Link to={"/Cart"}><i class="fa-solid fa-cart-shopping"></i></Link>
                            </li>
                        </ul>
                    </div>



                </div>

            </nav>

        </>
    )
}

export default Nav