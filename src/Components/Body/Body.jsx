import React from "react";
import "./Body.css"
import Paragraphs from "../Paragraphs/Paragraphs";
import Products from "../Products/Products";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import Help from "../Help/Help";
const Home = () => {
    return (
        <div>
            <div className="HomeBg">
                <div className="TransText">Consultancy</div>
                <div><dt className="TagLine">Elevate, Innovate, Dominate.</dt></div>
            </div>
            <Paragraphs></Paragraphs>
            <Products></Products>
            {/* <Menu></Menu> */}
            <Help></Help>
            <Footer></Footer>
        </div>
    )
}

export default Home