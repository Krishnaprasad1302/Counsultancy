import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Body/Body";
import Nav from "../Navigation/Navigation";
import Paragraphs from "../Paragraphs/Paragraphs";
import ImageDetails from "../Products/DescriptionProducts";


const HomeOfComponents =()=>{
    return(
        <BrowserRouter>
        {/* <Nav></Nav> */}
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="Home" element={<Home></Home>}></Route>
                <Route path="/product/:id" element={<ImageDetails  />} />

                <Route></Route>
            </Routes>
            
        </BrowserRouter>
    )
}

export default HomeOfComponents