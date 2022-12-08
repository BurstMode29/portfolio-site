import React from "react";
import '../style.css';
import Pages from '../Routes';
import { Link } from "react-router-dom";


export const Nav = () => {
    return (
        <div>
            <div className="Navigation">
                <ul>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li>PROJECTS</li>
                </ul>
            </div>
        </div>
    )
};

const Home = () => {
    return (
        <div className="Home">
            <div className="leftPanel">
                <div className="Logo"><i class="ri-markup-line"></i> RAFEEQ WEIDEMAN</div>
                <div className="pages">
                    <ul>
                        <Link className="links" to='/'><li>Welcome</li></Link>
                        <Link className="links" to='/aboutme'><li>About Me</li></Link>
                        <Link className="links" to='/whatido'><li>What I Do</li></Link>
                        <Link className="links" to='/contact'><li>Get In Touch</li></Link>
                    </ul>
                </div>
            </div>

            <div className="rightPanel">
                <Nav />
                <div className="content">
                    <Pages />
                </div>
            </div>
        </div>
    )
}

export default Home;