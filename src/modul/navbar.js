import React, { Component } from 'react';
class Navbar{
    
    render(){
        const scr = window.scrollY
        if(scr >= 500){
           const classState = "navbar navbar-scrolled";
        }else{
            const classState = "navbar";
        }
        return (
            <div className={classState} id="navbarScroll">
                
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
