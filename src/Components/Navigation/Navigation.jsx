import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>{
    return(
        <div>
            <div className="d-flex justify-content-evenly fw-bolder fs-4 mt-5 text-decoration-none ">
                <div>Logo</div>
                <div><Link className="text-decoration-none text-dark" to="Home">Home</Link></div>
                <div><Link className="text-decoration-none text-dark" to="Products">Products</Link></div>
                <div><Link className="text-decoration-none text-dark" to="About">About Us</Link></div>
                <div><Link className="text-decoration-none text-dark" to="ContactUs">Contact Us</Link></div>
            </div>
        </div>
    )
}

export default Nav