import React from "react";
import { Routes, Route } from "react-router";
import { Content } from "./pages/Content";
import { AboutMe } from "../src/pages/AboutMe";
import { WhatIDo } from "./pages/WhatIDo";
import { Contact } from "./pages/Contact";

const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/whatido" element={<WhatIDo />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default Pages;