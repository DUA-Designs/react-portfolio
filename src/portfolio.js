import React from "react";
import {  useEffect,useState } from "react";
import emailjs from '@emailjs/browser';
 

export function Main(){
  const [date,setDate]=useState(new Date());

    useEffect(()=>{


        
 
 


 
        let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function quoteGenerator(){

    try {
      const response = fetch("https://dummyjson.com/quotes/random" );
       response.then((result)=> result.json()).then((data)=>{
        console.log(data);
      localStorage.setItem("quote",data.quote);
      localStorage.setItem("author",data.author);
         document.getElementById("quote").innerHTML=data.quote;
       document.getElementById("author").innerHTML=`Author-  ${data.author}`;
      
      });
    } catch (error) {
      console.error(error);
    }
   }
  let quote=localStorage.getItem("quote");
  let author=localStorage.getItem("author");
  if(quote){ 
    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=`Author-  ${author}`;
  }
  else{
    quoteGenerator();
  
  }
   
   
  
  
 setTimeout(()=>{
  setDate(new Date());
  if(date.getHours()===23 && date.getMinutes()===55 && date.getSeconds()===10){
    quoteGenerator();
  
  }
 },1000);
    }
        
         );


        function sendEmail(e){
            e.preventDefault();
          
            let inputName3=document.getElementById("inputName3").value;
            let inputEmail3=document.getElementById("inputEmail3").value;
            let message=document.getElementById("inputMessage").value;
            var templateParams = {
              from_name:  inputName3,
              emial_id:inputEmail3,
              to_name:"Aravind",
              message
           
          
          };
           
           
            emailjs.init("I4hRM78EXk7LdR9pC");
            emailjs.send('service_i12y271', 'template_l0cryvm',templateParams,"I4hRM78EXk7LdR9pC" ).then(function(response) {
                 alert('Your response has been recorded!', response.status, response.text);
              }, function(error) {
                 alert('FAILED...', error);
              });
          }
          function detailsInput(){
            document.getElementById("disappear").style.transform="scale(0)";
            document.getElementById("disappear").style.display="none";

 
          
           
           setTimeout(()=>{
            document.getElementById("git").style.transform="scale(1)";
           },500)
          }
    return (<>
    
    <nav className="navbar navbar-expand-lg position-fixed w-100 z-3  ">
        <div className="container-fluid  " id="navContainer">
          <a className="navbar-brand col-1" href="#dua" ><i className="fa-solid fa-image-portrait fa-lg"></i>  D.U.A <span className="sepe">|</span><span className="desi"> DESIGNS</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon  "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav w-25   justify-content-around " id="list-container">
              <li className="nav-item" id="link">
                <a className="nav-link active" aria-current="page" href="#about">About</a>
              </li>
              <li className="nav-item" id="link">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item" id="link">
                <a className="nav-link" href="#certifications">Certifications</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#others" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Others
                </a>
                <ul className="dropdown-menu ">
                  <li><a className="dropdown-item text-dark" href="#prod">Contact Me</a></li>
                  
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid py-5" id="about">
        <div className="row d-flex p-3 align-items-center">
             
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 my-2" id="aboutMe"> 
               
			<h1><span className="fs-6">Hi, I am </span>Uday Aravind.</h1>
            
			<h3><em>Aspiring Full Stack Developer.</em></h3>
			<h6>{"I create <"} <span id="textChange"></span> {"/>"} </h6>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 my-2"><p className="fs-6">Welcome to my Portfolio. Over here I showcase my
                extensive expertise to the world, including a diverse
                range of projects, certifications, and achievements. This 
                online portfolio will give an in-depth summary of my
                skills, work/project history providing a comprehensive
                view of my qualifications.
                </p></div>
                <div className="col-lg-8 col-md-10 col-xm-10 col-xs-10 shadow-lg text-center mx-auto rounded p-3 border-bottom   z-2" style={{backgroundColor: "rgb(209, 207, 207)",  color: "black"}} id="quoteContainer">
                  <h3 className="">Quote of the day</h3>

                  <em><i className="fa-solid fa-quote-left"></i> <blockquote id="quote" className="d-inline p-3" ></blockquote> <i className="fa-solid fa-quote-right"></i></em>
                  <p className="text-end" id="author" ></p>
                </div>
        </div>

      </div>
      <section id="projects" className="p-4   ">
        <h1 className="p-4 my-5 w-75 mx-auto bg-body-tertiary   text-black   shadow-lg border  rounded position-relative">Projects that honed my skills<i className="fas fa-project-diagram position-absolute top-0 translate-middle start-50 z-1  text-danger shadow" id="Icon"></i></h1>
      <div className="container text-center border rounded"  >
        
      
        <div className="row py-1" >
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-10 my-2 position-relative " id="box"><div className="shadow border border rounded p-4 bg-white"> 
                <div id="tech"  className="position-absolute"><a href="https://dua-designs.github.io/SurveyForm-fcc-/">  Built with HTML, CSS</a></div> 
                <a href="https://dua-designs.github.io/SurveyForm-fcc-/"> <img  src="https://dua-designs.github.io/portfolio/images/surveyform.png"  alt="project_Image"  className="img-fluid"/>
                    <p  id="caption">Survey Form</p>
                </a> </div>
                 
                  
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-10 my-2 position-relative " id="box"><div className="shadow border border rounded p-4 bg-white"> 
                <div id="tech"  className="position-absolute"><a href="https://dua-designs.github.io/tributepage/">  Built with HTML, CSS</a></div> 
                <a href="https://dua-designs.github.io/tributepage"> <img  src="https://dua-designs.github.io/portfolio/images/tribute.PNG"  alt="project_Image"  className="img-fluid"/>
                    <p  id="caption">Tribute Page</p>
                </a> </div>
                 
                  
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-10 my-2 position-relative " id="box"><div className="shadow border border rounded p-4 bg-white"> 
                <div id="tech"  className="position-absolute"><a href="https://dua-designs.github.io/Documentation/">  Built with HTML, CSS</a></div> 
                <a href="https://dua-designs.github.io/Documentation/"> <img  src="	https://dua-designs.github.io/portfolio/images/documentation.PNG"  alt="project_Image"  className="img-fluid"/>
                    <p  id="caption">Documentation</p>
                </a> </div>
                 
                  
            </div>
       
        
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-10 my-2 position-relative " id="box"><div className="shadow border border rounded p-4 bg-white"> 
                <div id="tech"  className="position-absolute"><a href="https://dua-designs.github.io/Productlandingpage/"> Built with HTML, CSS</a></div> 
                <a href="https://dua-designs.github.io/Productlandingpage/"> <img  src="https://dua-designs.github.io/portfolio/images/plp.PNG"  alt="project_Image"  className="img-fluid"/>
                    <p  id="caption">Product Landing Page</p>
                </a> </div>
                 
                  
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-10 my-2 position-relative " id="box"><div className="shadow border border rounded p-4 bg-white"> 
                <div id="tech"  className="position-absolute"><a href="https://dua-designs.github.io/RanQuoGen/"> Built with HTML, CSS, JavaScript </a></div> 
                <a href="https://dua-designs.github.io/RanQuoGen/"> <img  src="https://dua-designs.github.io/portfolio/images/quote5.PNG"  alt="project_Image"  className="img-fluid"/>
                    <p  id="caption">Random Quote Generator</p>
                </a> </div>
                 
                  
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-10 my-2 position-relative " id="box"><div className="shadow border border rounded p-4 bg-white"> 
                <div id="tech"  className="position-absolute"><a href="https://dua-designs.github.io/Drum_Machine/"> Built with HTML, CSS, JavaScript </a></div> 
                <a href="https://dua-designs.github.io/Drum_Machine/"> <img  src="	https://dua-designs.github.io/portfolio/images/drummachine.PNG"  alt="project_Image"  className="img-fluid"/>
                    <p  id="caption">Drum machine</p>
                </a> </div>
                 
                  
            </div>
        
        
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-10 my-2 position-relative " id="box"><div className="shadow border border rounded p-4 bg-white"> 
                <div id="tech"  className="position-absolute"><a href="https://dua-designs.github.io/Calculator/">  Built with HTML, CSS, JavaScript </a></div> 
                <a href="https://dua-designs.github.io/Calculator/"> <img  src="https://dua-designs.github.io/portfolio/images/calc.PNG"  alt="project_Image"  className="img-fluid"/>
                    <p  id="caption">Calculator</p>
                </a> </div>
                 
                  
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-10 my-2 position-relative " id="box"><div className="shadow border border rounded p-4 bg-white"> 
                <div id="tech"  className="position-absolute"><a href="https://dua-designs.github.io/25-5clock/">   Built with HTML, CSS, JavaScript </a></div> 
                <a href="https://dua-designs.github.io/25-5clock/"> <img  src="https://dua-designs.github.io/portfolio/images/clock.PNG"  alt="project_Image"  className="img-fluid"/>
                    <p  id="caption">25-5 Clock</p>
                </a> </div>
                 
                  
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-10 my-2 position-relative " id="box"><div className="shadow border border rounded p-4 bg-white"> 
                <div id="tech"  className="position-absolute"><a href="https://dua-designs.github.io/react_app/">  Built with HTML, CSS, JavaScript, React </a></div> 
                <a href="https://dua-designs.github.io/react_app/"> <img  src="	https://dua-designs.github.io/portfolio/images/fitpeoreact.PNG"  alt="project_Image"  className="img-fluid"/>
                    <p  id="caption">UI Design</p>
                </a> </div>
                 
                  
            </div>
         
      
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-10 my-2 position-relative " id="box"><div className="shadow border border rounded p-4 bg-white"> 
                <div id="tech"  className="position-absolute"><a href="https://dua-designs.github.io/bootstrapTemplate/">   Built with HTML, CSS, Bootstrap  </a></div> 
                <a href="https://dua-designs.github.io/bootstrapTemplate/"> <img  src="	https://dua-designs.github.io/portfolio/images/bootInspan.png"  alt="project_Image"  className="img-fluid"/>
                    <p  id="caption">Bootstrap Template</p>
                </a> </div>
                 
                  
            </div>
            </div>
          
        
        
       

      </div>
    </section>
    <section  id="certifications" className="py-4">
        <h1 className="p-4  w-75 mx-auto bg-body-tertiary  text-black   shadow border rounded position-relative">My Certifications <i className="fa fa-certificate position-absolute top-0 translate-middle start-50 z-1  text-danger shadow" id="Icon"></i></h1>
        <div id="carouselExampleRide" className="carousel slide p-5 " data-bs-ride="true">
            
            <div className="carousel-inner ">
              <div className="carousel-item active col-10">
                <img src="https://dua-designs.github.io/portfolio/images/certi.png" className="d-block  mx-auto img-fluid" alt="certifaction_Image"/>
              </div>
              <div className="carousel-item col-10">
                <img src="https://dua-designs.github.io/portfolio/images/javascript_certi.PNG" className="d-block   mx-auto img-fluid" alt="certifaction_Image"/>
              </div>
              <div className="carousel-item col-10">
                <img src="	https://dua-designs.github.io/portfolio/images/Fedl.PNG" className="d-block   mx-auto img-fluid" alt="certifaction_Image"/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
         
    </section>
    <footer >
        <section id="product" className="bg-dark py-5">
            <div className="container  position-relative" >
               
            <div className="row p-3 postiton-absolute"   >
               
                
            <div className="col-10 mx-auto p-2 "   id="git" >
              <form method="post"  onSubmit={(event)=>sendEmail(event)}   >
                <div className="row mb-3  p-2">
                  <label for="inputName3" className="col-sm-4 col-form-label">Name</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" id="inputName3" required />
                  </div>
                </div>
                <div className="row mb-3 p-2">
                  <label for="inputEmail3" className="col-sm-4 col-form-label ">Email</label>
                  <div className="col-sm-8">
                    <input type="email" className="form-control" id="inputEmail3" required  />
                  </div>
                </div>
                <div className="row mb-3 p-2">
                  <label for="inputMessage" className="col-sm-4 col-form-label ">Your Message</label>
                  <div className="col-sm-8">
                   <textarea name="" id="inputMessage" cols="30" rows="3" className="form-control"></textarea>
                  </div>
                </div>
                
                 
                <button type="submit" className="btn btn-danger d-block w-25 mx-auto" id="Submitme">Submit</button>
              </form>
          </div>
        </div>
        <div className="row"   id="disappear">
                    <div className="col-6 mx-auto text-center"  >
                        <h1><span  >UDAY</span><br/>
                        <span id="line"> ARAVIND</span></h1>
                       
                   </div>
                   <div className="col-10 mx-auto p-2" id="prod">
                    <h2 >Let's talk about your product</h2>
                    <em>How do you take your protien shake?</em> <br/>
                    <button className="btn   m-2    " id="touchbtn" onClick={detailsInput}>Get in touch now</button> 
                </div>

                </div>
    </div>


        </section>
        <section className="bg-black py-4" id="footLinks">
            <div className="container">
               <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12  " id="academy">
            &copy; Copyright 2023 <strong>Insapanner Academy</strong>. All Rights Reserved 
           <p className="  w-75 " id="designBy">Designed by <span  >Uday Aravind</span></p>
            </div>
            <div className="col ">
             
            </div>
            <div className="  col-lg-3 col-md-4 col-sm-5 col-xs-10  d-flex justify-content-around align-items-center py-2 ">
              <a href="#twitter"><i className="fa-brands fa-twitter  rounded"></i></a>
              <a href="https://www.facebook.com/dualifts/"><i className="fa-brands fa-facebook-f   rounded"></i></a>
              <a href="#instagram"><i className="fa-brands fa-instagram   rounded"></i></a>
              <a href="https://github.com/DUA-Designs"><i className="fa-brands fa-github   rounded"></i> </a>
              <a href="https://www.linkedin.com/in/dasari-uday-aravind-385636225/"><i className="fa-brands fa-linkedin-in   rounded"></i></a>
             
            </div>
          </div>
            </div>
          </section>
         
    </footer>
    <button
    type="button"
    className="btn   btn-floating z-2"
    id="btn-back-to-top"
    >
<i className="fas fa-arrow-up"></i>
</button>
    </>)
}
