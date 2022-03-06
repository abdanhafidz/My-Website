import React, { Component } from 'react';
class Navbar{
    render(){
        return (
            <div className="navbar">
            <div className="nav-link">
                  <div className="nav-item">
                    <a href="about/">About Me</a>
                  </div>
                  <div className="nav-item">
                  <a href="about/">Skills</a>
                  </div>
                  <div className="nav-item">
                  <a href="about/">Products</a>
                  </div>
                  <div className="nav-item">
                  <a href="about/">Portofolio</a>
                  </div>
                  <div className="nav-item">
                  <a href="about/"> Projects </a>
                  </div>
                  <div className="nav-item">
                  <a href="about/"> Socials </a>
                  </div>
                  <div className="nav-item">
                  <a href="about/"> Blog </a>
                  </div>
            </div>


    </div>
        );
    }
}

export default Navbar;
