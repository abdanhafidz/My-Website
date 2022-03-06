

import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Projects from "./projects";
import './App.css';
import  "./logo.png";
import "./grid1.png";
import "./icon-cpp.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const projects = new Projects;

function LandingpageMain(){
  return(
    <div>
<div data-aos="zoom-in-up">
<div className="card-projects">
<a href="https://neso.forpelindo.com/2021" className="link-none">
<img src={require('./neso.png')}/>
<h4>NESO Student Online 2021</h4>
<h5 className="card-projects-description">Science event landing page organized by Yayasan Pelatihan Sains Pelajar Indonesia</h5>
</a>
</div>
<div className="card-projects">
<a href="https://neso.forpelindo.com/" className="link-none">
<img src={require('./neso-main.png')}/>
<h4>NESO Student Online Website</h4>
<h5 className="card-projects-description">Science event landing page organized by Yayasan Pelatihan Sains Pelajar Indonesia</h5>
</a>
</div>
<div className="card-projects">
<a href="https://osmc.forpelindo.com" className="link-none">
<img src={require('./osmc.png')}/>
<h4>OSMC Main Website</h4>
<h5 className="card-projects-description">Math event landing page organized by Yayasan Pelatihan Sains Pelajar Indonesia</h5>
</a>
</div>
<div className="card-projects">
<a href="https://osmc.forpelindo.com/2020" className="link-none">
<img src={require('./osmc-2020.png')}/>
<h4>OSMC 2020</h4>
<h5 className="card-projects-description">Math event landing page organized by Yayasan Pelatihan Sains Pelajar Indonesia</h5>
</a>
</div>
<div className="card-projects">
<a href="https://osmc.forpelindo.com/2021" className="link-none">
<img src={require('./osmc-2021.png')}/>
<h4>OSMC 2021</h4>
<h5 className="card-projects-description">Math event landing page organized by Yayasan Pelatihan Sains Pelajar Indonesia</h5>
</a>
</div>
<div className="card-projects">
<a href="https://presition.forpelindo.com/" className="link-none">
<img src={require('./presition.png')}/>
<h4>PRESITION Main Website</h4>
<h5 className="card-projects-description">Science event landing page organized by Yayasan Pelatihan Sains Pelajar Indonesia</h5>
</a>
</div>

<div className="card-projects">
<a href="http://presition.forpelindo.com/2021" className="link-none">
<img src={require('./presition-2021.png')}/>
<h4>PRESITION 2021</h4>
<h5 className="card-projects-description">Science event landing page organized by Yayasan Pelatihan Sains Pelajar Indonesia</h5>
</a>
</div>

<div className="card-projects">
<a href="http://presition.forpelindo.com/2021" className="link-none">
<img src={require('./feez-01.png')}/>
<h4>FeezFest 2022 - FLC</h4>
<h5 className="card-projects-description"><strong className="anim-text-primary">Under Development</strong> Computer Science Logic event landing page</h5>
</a>
</div>


<div className="card-projects">
<a href="http://presition.forpelindo.com/2021" className="link-none">
<img src={require('./feez-01.png')}/>
<h4>FeezFest 2022 - FCPL</h4>
<h5 className="card-projects-description"><strong className="anim-text-primary">Under Development</strong> Competitive Programming event landing page</h5>
</a>
</div>
</div>
</div>
);
}

function Port(){
  return(
  <ul className="timeline" id="portfolio">


	<li data-aos="zoom-in-up" data-aos-duration="1000">
		<div className="direction-r" >
			<div className="flag-wrapper">
				<span className="flag">Full-Stack Developer</span>
				<span className="time-wrapper"><span className="time">2020 - Present</span></span>
			</div>
			<div className="desc">At <a className="text-white" href="https://forpelindo.com"><strong>Yayasan Pelatihan Sains Pelajar Indonesia</strong></a>
      National Education Foundation ,empowering and developing Indonesian students' talents in the field of science
      
      
      </div>
		</div>
	</li>
  

	<li data-aos="zoom-in-up" data-aos-duration="1000">
		<div className="direction-l">
			<div className="flag-wrapper">
				<span className="flag">Website Developer</span>
				<span className="time-wrapper"><span className="time">2021 - Present</span></span>
			</div>
			<div className="desc">At <a className="text-white" href="https://evalatorksn.com/"><strong>EvalatorKSN</strong></a>, 
a forum that focuses on education as a provider of information, a forum for the development and training of Indonesian students on the interests and talents of the Olympics or competitions, especially the National Science Competition organized by the Indonesian Ministry of Education and Culture</div>
		</div>
	</li>


	<li data-aos="zoom-in-up" data-aos-duration="1000">
		<div className="direction-r">
			<div className="flag-wrapper">
				<span className="flag">Founder</span>
				<span className="time-wrapper"><span className="time">2021 - Present</span></span>
			</div>
			<div className="desc"><a className="text-white" href="https://abdanhafidz.com/qb"><strong>The Quzuu Exam Platform</strong></a> self-developed platform, used in organizing try outs, practice questions, quizzes . Has been used in organizing the National Science Competition Try Out in Informatics</div>
		</div>
	</li>
  


  
	<li data-aos="zoom-in-up" data-aos-duration="1000">
		<div className="direction-l">
			<div className="flag-wrapper">
				<span className="flag">CEO & Founder</span>
				<span className="time-wrapper"><span className="time">Coming Soon</span></span>
			</div>
			<div className="desc"><a className="text-white" href="#"><strong>Feez Edutech Platform</strong></a> potential education and skill development platform
for students in Indonesia in the field of technology and digital innovation.</div>
		</div>
	</li>

  
</ul>);
}



function appendProjects(app,selector){
  var s = document.getElementsByClassName("radio-projects-active")[0];
  s.classList.remove("radio-projects-active");
  var s2 = document.getElementsByClassName("radio-text-active")[0];
  s2.classList.remove("radio-text-active");
  var sel = document.getElementById(selector);
  sel.classList.add("radio-projects-active");
  var sel2 = document.getElementById(selector+"-text");
  sel2.classList.add("radio-text-active");
 document.getElementById("pro-dom").innerHTML=app;
}

function Home() {
  
  return (
    <>
       <div className="first-section">
    <h1 className="title-name" data-aos="fade-up" data-aos-duration="1000">Hi I 'm Abdan Hafidz</h1>
    <h1 className="title-name" data-aos="fade-up" data-aos-duration="1000">Junior Website Developer</h1>
    <div className="dynamic-middle"> <a href="#more"><button className="btn-primary">More About Me</button></a></div>
     
    </div>
    <div className="grid1"></div>
    <h1 align="center" className="title-name">I also do</h1>
    <div className="alsodo">
      <div className="cp">
        <h1 className="text-danger title-name"><li>Competitive Programming</li> </h1>
        
        
        
        </div>
        <div className="infor">
        <h1 className="text-info title-name"><li>Informatics Olympiad</li> </h1>
        
        
        
        </div>
        <div className="cr">
        <h1 className="text-success title-name"><li>Content Creator</li> </h1>
        
        
        
        </div>
    
        <div className="grid2"></div>


    </div>
  <div className="second-section" id="about">
    <h1 align="center" className="title-name" data-aos="flip-left"     data-aos-duration="1000">Abdan Hafidz, Glad To See You! <p align="center" className="code-pro">🎓 SMAN 58 JAKARTA | 💬 INDONESIA & ENGLISH  </p></h1>

    <p align="center" className="text-primary"  data-aos="fade-right" data-aos-duration="1000">For more or less 3 years I have explored my coding skills to the end to pursue website development and the last 2 years I have worked in several institutions in the section of website development, IT division, full-stack development. And since I was in high school, I began to deepen my abilities in the field of computer science, until in the end I often won several National level competitions in the field of computer science or better known as Informatics in my country. I often have fun on the competitive programming platforms codeforces, atcoder, TLX, Vjduges and others. Not infrequently I also take part in National competitions with competitive programming categories and website design :) I do social media content creating too.</p>
    <div className="middle ctc" align="center">
      <div className="middle-sub-4">
      
      <a href="https://codeforces.com/profile/mengCP" target="_blank"  data-aos="fade-up"><button className="btn-white-oval btn-rip ripple">My Codeforces</button> </a>
      </div>
     <div className="middle-sub-4">
    <a href="https://tlx.toki.id/profiles/abdan123" target="_blank" data-aos="fade-up" ><button className="btn-white-oval btn-rip ripple">TLX</button>   </a>
      </div>
      <div className="middle-sub-4">
      <a href="https://github.com/abdanhafidz" target="_blank" data-aos="fade-up" ><button className="btn-white-oval btn-rip ripple">Github</button> </a>
      </div>
      </div>
  
  </div>
  <div className="first-section" id="skills">
    <div className="middle">
    <div className="big-circle">
  
  </div>
    <h1 className="title-name" data-aos="fade-right">My Skills</h1>

    <br></br>

    <h2 className="skills-title" >Competitive Programming</h2>
    <div className="sub-bar">
      <div className="bar-cp" data-aos="loading"></div>
    <div className="sub-bar-img"> <img src={require('./icon-cpp.png')} /></div>
</div>

<h2 className="skills-title">Backend-Development</h2>
    <div className="sub-bar">
      <div className="bar-be"></div>
    <div className="sub-bar-img"> 
    <img src={require('./php.png')} />
    <img src={require('./js.png')} />
    <img src={require('./be-3.png')} />
    <img src={require('./mysql.png')} />
    
    </div>


</div>


<h2 className="skills-title">Frontend-Development</h2>
    <div className="sub-bar"><div className="bar-fe"></div>
    <div className="sub-bar-img"> 
    <img src={require('./fe-1.png')} />
    <img src={require('./fe-2.png')} />
    <img src={require('./jquery.png')} />
    <img src={require('./wp.png')} />
    </div>
    </div>
    <h2 className="skills-title">Graphic Design</h2>
    <div className="sub-bar"><div className="bar-gd"></div>
    <div className="sub-bar-img"> 
    <img src={require('./gd-1.png')} />
    <img src={require('./gd-2.png')} />
  
    
    </div>
    </div>
    <div className="big-circle-left">
  
  </div>
    <h1 className="title-name title-port"  align="center">Portfolio</h1>
  
    <Port></Port>
  
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br><br></br>
<br></br>
<br></br>

<div className="middle-sub-6" id="projects">
<h1 className="title-name" >My Projects</h1>
<p   className="text-primary">Some Things I’ve Built</p>

<div className="radio-group">
<div className="radio-projects radio-projects-active" id="landingpage" onClick={()=> appendProjects(projects.landingpage(),"landingpage")}></div> 
<div className="radio-text radio-text-active"  id="landingpage-text">Landing Page</div>
</div>
<div className="radio-group">
<div className="radio-projects " id="webapps" onClick={()=> appendProjects(projects.websiteApps(),"webapps")}></div> 
<div className="radio-text " id="webapps-text">Website Apps</div>
</div>
<div className="radio-group">
<div className="radio-projects" id="companyweb" onClick={()=> appendProjects(projects.companyweb(),"companyweb")}></div> 
<div className="radio-text" id="companyweb-text" >Company Website</div>
</div>
<div className="radio-group">
<div className="radio-projects"></div> 
<div className="radio-text">Fun & Creative Games</div>
</div>
      </div>
      <div className="middle-sub-6 fit" id="pro-dom">
     <LandingpageMain></LandingpageMain>
            
           
        
             
            

      </div>

</div>

  



  </div>
  <div className="first-section services">
  <h1 align="center" className="title-name">Get In Touch</h1>
  <p align="center">Although I’m not currently looking for any new opportunities, my inbox is always open. <br></br>Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
  <br></br>
 
  <div className="btn-middle">
  <div className="socials">
  <a href="https://github.com/abdanhafidz" target="_blank" data-aos="fade-up" ><img src={require('./Githubi.png')} /></a>
  <a href="https://www.linkedin.com/in/abdan-hafidz-909113163/z" target="_blank" data-aos="fade-up" ><img src={require('./LinkedIni.png')} /></a>
  <a href="mailto:abdan.hafidz@gmail.com" target="_blank" data-aos="fade-up" > <img src={require('./Emaili.png')} /></a>
  <a href="https://instagram.com/abdan_hafidz" target="_blank" data-aos="fade-up" ><img src={require('./Instagrami.png')} /></a>
    </div> 
    <br>
    </br>
  
    <a target="_blank" href="https://api.whatsapp.com/send?phone=62895601077613&text=Halo%20Abdan,%20saya%20ingin%20melakukan%20diskusi%20anda%20terkait%20projek%20berikut%20%5Bsilahkan%20jelaskan%20keperluan%20anda%5D"><button className="btn-primary-outline">Contact Me</button></a></div>
 
  </div>
    </>
  );
}
AOS.init();


function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
class App extends  React.Component  { 
  
  ShowNavMobile(){
    var target = document.getElementById("navlink");
    var status = target.getAttribute("class");
    if(status == "nav-link nav-link-hide"){
    target.classList.remove("nav-link-hide");
    }else{
      target.classList.add("nav-link-hide");
    }
  }

  ShowSubNav(){
    var target = document.getElementById("sub-nav-first");
    var status = target.getAttribute("class");
    if(status == "subnav subnav-hide"){
    target.classList.remove("subnav-hide");
    }else{
      target.classList.add("subnav-hide");
    }
  }
  render(){
    
    return(
    <div className="sabeb">
  
    <div className="navbar">
    <Link className="navbar-brand" to="." ><img src={'./logo.png'} /></Link>
 
    <div className="nav-link nav-link-hide" id="navlink">
          <div className="nav-item">
          <a href="#about">About Me</a>
          </div>
           <div className="nav-item">
         <a href="#skills">Skills</a>
          </div>
          <div className="nav-item">
         <a  onClick={()=> this.ShowSubNav()}>Products</a>
         
          </div>
         
          <div className="nav-item">
          <a href="#portfolio">Portofolio</a>
          </div>
          <div className="nav-item">
          <a href="#projects"> Projects </a>
          </div>
        
          <div className="nav-item">
          <a href="https://abdanhafidz.com/blog" target="_blank"> Blog </a>
          </div>
    </div>

    <div className="subnav subnav-hide" id="sub-nav-first">
    <a href="https://abdanhafidz.com/qb" target="_blank">
      <div className="sub-sub-nav"> 
      <div className="sub-nav-sub-left">
      <img src="https://abdanhafidz.com/qb/_public/assets/quzzulogo.png" className="img-p"></img>
      </div>
     
      <div className="sub-nav-sub-right">
        <h3 className="subnav-title">Quzuu Online Exam Platform</h3>
        <p className="subnav-text">Check this out, online exam platform. You can also grind some questions or quiz on here!</p>
        </div>
        </div>
        </a>
        <a href="https://tryout.abdanhafidz.com/" target="_blank">
        <div className="sub-sub-nav"> 
      <div className="sub-nav-sub-left">
      <img src={require('./ksn.png')} className="img-p"></img>
      </div>
      <div className="sub-nav-sub-right">
        <h3 className="subnav-title">Try Out KSNK Informatika</h3>
        <p className="subnav-text">National Science Competition (Regencies stage) preparation test</p>
        </div>
        </div>
        </a>
      </div>
      <a onClick={()=> this.ShowNavMobile()} >

    <div className="bar" >
  <span className="icon-bar">

  </span>


  </div>
  </a>

</div>




  
 <Home/>
<footer className="footer-main">&copy; 2022 Designed & Built By Abdan Hafidz <br></br>  </footer>

  </div>

 
    )
  }
}

var buttons = document.getElementsByClassName('btn-rip');

Array.prototype.forEach.call(buttons, function(b){
  b.addEventListener('click', createRipple);
})

function createRipple(e)
{
  if(this.getElementsByClassName('ripple').length > 0)
    {
      this.removeChild(this.childNodes[1]);
    }
  
  var circle = document.createElement('div');
  this.appendChild(circle);
  
  var d = Math.max(this.clientWidth, this.clientHeight);
  circle.style.width = circle.style.height = d + 'px';
  
  circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
  circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';
  
  circle.classList.add('ripple');
}

export default App;
