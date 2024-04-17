import React from "react";
import {  useEffect,useState } from "react";
import emailjs from '@emailjs/browser';
import  {dicegame,weatherAppDemo,quizAppDemo,DD,Pic1,Pic2,Pic3,Pic4,Pic5,Pic6,infotrixs, Roxiler, Roxiler1, Roxiler2, Roxiler3,shorts, dev, maze, brain, project, certification, lines, waveBeam, thickLines, energy, me} from './media';
import axios from 'axios';
 
 import './lightSaber.css';
 
 import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Lottie from 'react-lottie';
import { motion,  useMotionValue } from "framer-motion"
 
 
 const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: lines,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

 const projects=[
  {icon:<i className="fa-solid fa-play"></i>,git:"https://github.com/DUA-Designs/HelloAR",demo:"https://dua-designs.github.io/HelloAR/",completion:"February 2024",name:"Shorts App",desc:"Shorts App allows you to add videos that are oriented vertically and also scroll through the available ones. The working is similar to youtube shorts. This project is made with React App and it is a coding challenge given to me by HelloAR.",video:shorts},
  {icon:<i className="fa-solid fa-table-columns"></i>,git:"https://github.com/DUA-Designs/roxilerBackend",demo:"https://roxilerfront-end.onrender.com/",completion:"February 2024",name:"Transaction Dashboard",desc:"Functional Sales Dashboard featuring table for showing the items, sections for Statistics and barChart for price Ranges. This project is based on MERN Stack and it is a coding challenge given to me by  GEEKS-FOR-GEEKS for ROXILER company recruitment.",carousel:[Roxiler,Roxiler1,Roxiler2,Roxiler3]},
  {icon:<i className="fi fi-ss-cloud-code"></i>,git:"https://github.com/DUA-Designs/WeatherDashboard",demo:"https://dua-designs.github.io/WeatherDashboard/",completion:"January 2024",name:"Weather Dashboard",desc:"Fully functional Weather Dashboard offering wide range of data. Provide input details to get weather data.",carousel:[Pic1,Pic2,Pic3,Pic4,Pic5,Pic6]},
 {icon:<i className="fa-solid fa-cloud"></i>,git:"https://github.com/DUA-Designs/weatherAPI",demo:"https://dua-designs.github.io/weatherAPI/",completion:"January 2024",name:"Current Weather",desc:"The Weather App uses a weather API to get the information using javascrit fetch. The data is then displayed as innerHTML of the  html elements. You will have to type the city name for which you want to get current weather details.",video:weatherAppDemo,linkedIn:"https://www.linkedin.com/posts/uday-aravind-dasari-385636225_infotrixs-infotrixsteam-infotrixsinternship-activity-7149757564606427136-yUzN?utm_source=share&utm_medium=member_desktop"},
 {icon:"",git:"https://github.com/DUA-Designs/quizApp",demo:"https://dua-designs.github.io/quizApp/",completion:"December 2023",name:"Quiz App",desc:"This is a template of a quiz App that I have designed. This quiz contains multiple choice questions and algorithms with code executable interface. To execute the code I have implemented a Java compiler API and UI has been designed with react,html,css. This personal project was a real tough one to create and I guess every challenge accomplished is a unique piece of development in me.",video:quizAppDemo},
 {link:"https://dua-designs.github.io/diceGame",name:"Dice Game",img:dicegame,tech:"Built with HTML, CSS, Bootstrap, JavaScript, React"},{link:"https://dua-designs.github.io/toDoApp/",img:"https://dua-designs.github.io/myportfolio/images/toDoApp.png",name:"ToDo List App",tech:"Built with HTML, CSS, Bootstrap, JavaScript, React"},
{link:"https://dua-designs.github.io/bootstrapTemplate/",name:"Bootstrap Template",img:"	https://dua-designs.github.io/portfolio/images/bootInspan.png",tech:"Built with HTML, CSS, Bootstrap"},
 {link:"https://dua-designs.github.io/react_app/",name:"UI Design",img:"	https://dua-designs.github.io/portfolio/images/fitpeoreact.PNG",tech:"Built with HTML, CSS, JavaScript, React"},
{link:"https://dua-designs.github.io/25-5clock/",name:"25-5 Clock",img:"https://dua-designs.github.io/portfolio/images/clock.PNG",tech:"Built with HTML, CSS, JavaScript"},
{link:"https://dua-designs.github.io/Calculator/",name:"Calculator",img:"https://dua-designs.github.io/portfolio/images/calc.PNG",tech:"Built with HTML, CSS, JavaScript"},
{link:"https://dua-designs.github.io/Drum_Machine/",name:"Drum machine",img:"https://dua-designs.github.io/portfolio/images/drummachine.PNG",tech:"Built with HTML, CSS, JavaScript"},
{link:"https://dua-designs.github.io/RanQuoGen/",name:"Random Quote Generator",img:"https://dua-designs.github.io/portfolio/images/quote5.PNG",tech:"Built with HTML, CSS, JavaScript"},
{link:"https://dua-designs.github.io/Productlandingpage/",name:"Product Landing Page",img:"https://dua-designs.github.io/portfolio/images/plp.PNG",tech:"Built with HTML, CSS"},
{link:"https://dua-designs.github.io/Documentation/",name:"Documentation",img:"https://dua-designs.github.io/portfolio/images/documentation.PNG",tech:"Built with HTML, CSS"},
{link:"https://dua-designs.github.io/tributepage",name:"Tribute Page",img:"https://dua-designs.github.io/portfolio/images/tribute.PNG",tech:"Built with HTML, CSS"},
{link:"https://dua-designs.github.io/SurveyForm-fcc-/",name:"Survey Form",img:"https://dua-designs.github.io/portfolio/images/surveyform.png",tech:"Built with HTML, CSS"}

];

//const skills=[{Language:"HTML",level:90,icons:<i class="fa-brands fa-html5"></i>},{Language:"CSS",level:85,icons:<i class="fa-brands fa-css3-alt"></i>},{Language:"JavaScript",level:80,icons:<i class="fa-brands fa-js"></i>},{Language:"React",level:75,icons:<i class="fa-brands fa-react"></i>},{Language:"Java",level:70,icons:<i class="fa-brands fa-java"></i>},{Language:"Bootstrap",level:65,icons:<i class="fa-brands fa-bootstrap"></i>},{Language:"jQuery",level:50,icons:""}];
 
 const category=["Programming Languages","Web Development Technologies","Front-end Technologies"];
 const subCat={"Programming Languages":["JavaScript","Java"],"Web Development Technologies":["React"],"Front-end Technologies":["HTML","CSS","Bootstrap","jQuery"]};
 const individuals={"JavaScript":{icon:<i className="fa-brands fa-js"></i>,lvl:80},"Java":{icon:<i className="fa-brands fa-java"></i>,lvl:60},"HTML":{icon:<i className="fa-brands fa-html5"></i>,lvl:90},"CSS":{icon:<i className="fa-brands fa-css3-alt"></i>,lvl:90},"React":{icon:<i className="fa-brands fa-react"></i>,lvl:70},"Bootstrap":{icon:<i className="fa-brands fa-bootstrap"></i>,lvl:70},"jQuery":""};
 
 
 

export function Main(){
  const [quoteCheck,setQuoteCheck]=useState(0);
  const [quote,setQuote]=useState([]);
  const [bright,setBright]=useState(false);
  const [processing,setProcessing]=useState(false); 
 
   
  const [toggleValue,setToggleValue]=useState(true);

       function handleClick(e){
        e.preventDefault();
        setToggleValue(!toggleValue);
       }
 

    useEffect(()=>{
      /*if(x===1){
        const url = 'https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes?category=inspirational';
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '6fbfebbdc6msh5f6f5ee3beae5d2p1fc4d9jsn61a0a7629cf5',
            'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com'
          }
        };
        
        try {
          const response =fetch(url, options);
          response.then(res=>res.json()).then(data=> data);
           
          
        } catch (error) {
          console.error(error);
        }
        x++;
      }
      */
        let mybutton = document.getElementById("btn-back-to-top");
        let myApp=document.getElementById("myApp");
        let mrNav=document.getElementById("mrNav");

        function scrollFunction() {
          if(myApp.scrollTop>1){
            mrNav.classList.add("makeSticky");
          }
          
          if (
               myApp.scrollTop> 50  
          ) {
            mybutton.classList.add("makeVisible");
          } else {
            mybutton.classList.remove("makeVisible");
          }

          if(myApp.scrollTop>document.getElementById("about").offsetHeight*(0.7) ){
            handleLevel("JavaScript");
          }
           if(myApp.scrollTop>document.getElementById("about").offsetHeight*(0.8) ){
            handleLevel("Java");
          }
           if(myApp.scrollTop>document.getElementById("about").offsetHeight*(0.9) ){
            handleLevel("React");
          }
           if(myApp.scrollTop>document.getElementById("about").offsetHeight*(1.2 ) ){
            handleLevel("HTML");
            handleLevel("CSS")
          }
           if(myApp.scrollTop>document.getElementById("about").offsetHeight*(1.3) ){
            handleLevel("Bootstrap");
          }
        }
        // When the user clicks on the button, scroll to the top of the document
        mybutton.addEventListener("click", backToTop);
        
        function backToTop() {
         myApp.scrollTop=0;
        }

// When the user scrolls down 20px from the top of the document, show the button
myApp.onscroll = function () {
  scrollFunction();
    };



    
});

useEffect(()=>{
  if(quoteCheck===0){
   
    async function quoteGenerator(){


      try {
        const response =await fetch("https://dummyjson.com/quotes/random" );
        const data = await response.json(); 
          
        localStorage.setItem("quote", data.quote);
        localStorage.setItem("author",data.author);
        setQuote([data.quote,`Author -  ${data.author}`]);
       setTimeout(()=> setQuoteCheck(1),2000);
         } catch (error) {
        console.error(error);
      }
     }
    let quote= localStorage.getItem("quote");
    let author=localStorage.getItem("author");
    if(quote){ 
      
      
    setQuote([quote,`Author -  ${author}`]);
    setTimeout(()=> setQuoteCheck(1),2000);
    }
    else{
      quoteGenerator();
    
    }
    let date=new Date();
    let prevDate=localStorage.getItem("prevDateItem");
  if(prevDate){
    if( date.getDate()!== Number(prevDate)){
      localStorage.setItem("prevDateItem",date.getDate()+"");
       setQuoteCheck(0);
      quoteGenerator();
    }
    
  
  }
  else{
    localStorage.setItem("prevDateItem","0");
    
    }
  }

  const moveCursor = (e) => {   
    cursorX.set(e.clientX -32)
      cursorY.set(e.clientY -32)
  }
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }

 
} ,[]);


 

      async  function sendEmail(e){
            e.preventDefault();
            

            
            setProcessing(true);
               
         

          
            let inputName=document.getElementById("inputName3") ;
            let inputEmail=document.getElementById("inputEmail3"); 
            let message=document.getElementById("inputMessage"); 
            let resp=document.getElementById("response");
            let pResponse=document.getElementById("pResponse");
           

            var templateParams = {
              from_name:  inputName.value,
              emial_id:inputEmail.value,
              to_name:"Aravind",
              message:message.value
           
          
          };

             let acknowledged= await axios.get(`https://portfoliobackend-mmkw.onrender.com/sendData?userName=${inputName.value.trim()}&userEmail=${inputEmail.value.trim()}&userMessage=${message.value.trim()}`);
              console.log(acknowledged.data);
             
           
           
           emailjs.init("I4hRM78EXk7LdR9pC");
           let response=await emailjs.send('service_i12y271', 'template_l0cryvm',templateParams,"I4hRM78EXk7LdR9pC" );
           
           resp.classList.toggle("showMe");
           await new Promise(resolve=>setTimeout(()=>resolve("This is just for loading time"),200));
           if(response.status===200){
            pResponse.innerHTML=`I got your message <i class="fa-solid fa-check"></i>`;
           await new Promise(resolve=>setTimeout(()=>resolve("This is just for loading time"),1000));
          inputEmail.value="";
          inputName.value="";
          message.value=""; 
           }
           else{
            pResponse.innerHTML=`Failed to get your message. Please try again. <i class="fa-solid fa-xmark"></i>`;
           }
          

           setTimeout(()=>{
            pResponse.innerHTML="";
            resp.classList.toggle("showMe");
          },5000);
          setProcessing(false);
            
        }
          function detailsInput(){
            document.getElementById("disappear").classList.add("activate");

           
           

 
          
           
           setTimeout(()=>{
            document.getElementById("git").classList.add("makeVisible"); 
           },700);
          }
        //   function handleBrightness(){

            
        //       document.getElementById("mrNav").classList.toggle("darkMode");
        //       document.getElementById("theme").classList.toggle("darkMode");
        //       document.getElementById("navContainer").classList.toggle("darkMode");
        //       document.getElementById("skills").classList.toggle("darkMode");
        //       document.getElementById("mySkills").classList.toggle("darkMode");
        //        let skillsContainer=document.querySelectorAll(".skills-container");
        //        console.log(skillsContainer);
        //          for(let i=0;i<skillsContainer.length;i++){
        //           skillsContainer[i].classList.toggle("darkMode");
        //          }
        //          document.getElementById("projects").classList.toggle("darkMode");
        //          document.getElementById("honed").classList.toggle("darkMode");
        //          document.getElementById("certifications").classList.toggle("darkMode");
        //          document.getElementById("myCerti").classList.toggle("darkMode");
        //          document.querySelector(".navbar-toggler").classList.toggle("darkMode");
        //          document.getElementById("categories").classList.toggle("darkMode");

            
        //      setBright(!bright);
        //   }
        async function  handleLevel(sub){
          let id=`percent${sub}`;
        if(Number(document.getElementById(id).innerHTML)!== individuals[sub].lvl && document.getElementById(id).innerHTML===""){
                  for(let i=1;i<=individuals[sub].lvl;i++){
                   document.getElementById(id).innerHTML=`${i} %`;
                   document.getElementById(`line${sub}`).style.width=`${i}%`;
                   let comparator=window.screen.width<=768?document.getElementById(`lan${sub}`).offsetWidth+20 :document.getElementById(`lan${sub}`).offsetWidth+30;
                   
                   if(document.getElementById(`line${sub }`).offsetWidth>comparator){
                    document.getElementById(id).classList.add("showMe");
                    document.getElementById(id).style.width=`${i}%`;
                   }
                   await new Promise(resolve=>setTimeout(()=>resolve("This is for loading time"),40));
                  }
                }
        }

     
 const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
 
 const [cursorVariant,setCursorVariant]=useState("default");
const variants={default:{  },
    text:{
         height: 80,
    width: 80,
  
    

    },techStack:{  height: 80,
    width: 80,},
    theme:{
      width:50,height:50
    },navLinks:{height:80,width:80}
  }  
    const textEnter = () =>{setCursorVariant("text");
 
    } 
const textLeave = () =>{ setCursorVariant("default");
        
}
const  techStack=()=>setCursorVariant("techStack");
const themeEnter=()=>setCursorVariant("theme");
const navLinks=()=>setCursorVariant("navLinks");
 
 

    return ( <div  id="myApp" className={toggleValue?"darkGradient":"devRow"} >  
    < motion.div className="cursor"   style={{
    translateX: cursorX,
    translateY: cursorY,
  }}   variants={variants}
       animate={cursorVariant} />
  
    
    <nav className="navbar navbar-expand-lg   " id="mrNav">
        <div className="container  d-flex  position-relative  " id="navContainer">
          <a className="navbar-brand col-1" href="https://dua-designs.github.io/react-portfolio/"  onMouseEnter={textEnter} onMouseLeave={textLeave}>   D.U.A <span className="sepe">|</span><span className="desi"> DESIGNS</span></a>
          {/* <button className=" btn " id="theme" onClick={handleBrightness} title={bright?"Switch to Lightmode":"Switch To Darkmode"}  onMouseEnter={themeEnter} onMouseLeave={textLeave}>{bright?<i className="fi fi-bs-brightness"></i>:<i className="fa-solid fa-moon"></i>}</button> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon  " id="navToggler"></span>
          </button>
          <div className="collapse navbar-collapse  " id="navbarNavDropdown">
            <ul className="navbar-nav col-lg-4 col-md-4 col-sm-6 col-xs-12   justify-content-around " id="list-container">
              
              <li className="nav-item" >
                <motion.a className="nav-link active" aria-current="page" href="#about" onMouseEnter={navLinks} onMouseLeave={textLeave} whileTap={{scale:0.8}}  > About </motion.a>
              </li>
              <li className="nav-item" >
                <motion.a className="nav-link" href="#projects" onMouseEnter={navLinks} onMouseLeave={textLeave} whileTap={{scale:0.8}}  >Projects</motion.a>
              </li>
              <li className="nav-item" >
                <motion.a className="nav-link" href="#certifications" onMouseEnter={navLinks} onMouseLeave={textLeave} whileTap={{scale:0.8}}  >Certifications</motion.a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#others" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Others
                </a>
                <ul className="dropdown-menu ">
                  <li><a className="dropdown-item text-dark" href="#prod">Contact Me</a></li>
                  <li><a className="dropdown-item text-dark" href="https://drive.google.com/file/d/1W_mLR2AKTj-g3g8srwzDJsawjR9i2JVo/view?usp=sharing" target="blank">View My Resume</a></li>
                  
                </ul>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    
 

      <section className="container py-5 my-2 position-relative rounded     " id="about">

 
                                    

        <div className="row  p-3 align-items-center ">
             
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12   py-3 mx-auto  rounded  text-center" id="aboutMe"> 
               <h1><span className="fs-4">Hi, I am </span>Uday Aravind.</h1>
                <h3><em>Aspiring Full Stack Developer.</em></h3>
                <h6>{"I create <"} <span id="textChange"></span><span id="blinkingCursor">&nbsp;</span> {"/>"} </h6>
            </div>
            
            {/* <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 my-2 p-1  rounded  ">
               <p  >
                Welcome to my Portfolio!<br></br>
                Over here I showcase my
                extensive expertise to the world, including a diverse
                range of projects, certifications, and achievements. This 
                online portfolio will give an in-depth summary of my
                skills, work/project history providing a comprehensive
                view of my qualifications.
                </p></div> */}
                <div className="col-lg-8 col-md-10 col-xm-10 col-xs-10    text-center mx-auto rounded p-1  position-relative    "   id="quoteContainer">
                <i className="fa-solid fa-quote-left position-absolute start-0 top-0 m-2"></i>
                <i className="fa-solid fa-quote-right position-absolute bottom-0 end-0  m-2"></i>
                  <h3 className="">Quote of the day</h3>

                  {quoteCheck===1?<div className="  d-grid align-items-center p-1 text-center"  >  <span id="quote" className="   p-2" >{quote[0]}
                  <br/><span className="  mt-1 mb-3  " id="author" >{quote[1]}</span>
                  </span>  
                  </div>:
                  <div className="lds-ripple   my-1"><div></div><div></div></div>} 
                </div>
        </div>

      </section>
       

    
  <section className="container    py-4">

                  
            
             <div className="row         rounded py-4   ">
          
               <div className="  mx-auto  d-flex flex-wrap justify-content-around align-items-center">
               <div  className="   ">
                  
                                <ul className="workingList  ">
                                  <li  >
                                    <div class="icon"><div class='pulse'></div></div>
                                    <div class="title">Current Status</div>
                                    <div class="descr">   Working</div>
                                  </li>
                                  
                                </ul>
 
               </div>
                    <div className="   "> 
                    
                     
                            <ul class="statusList alternating-colors   ">
                                  <li>
                                    <strong>Designation</strong>
                                    <p>Web Developer</p>
                                  </li>
                                  <li>
                                    <strong>Company</strong>
                                    <p>G-Rank Digital Services Private Limited</p>
                                  </li>
                                  <li>
                                    <strong>Timeline</strong>
                                    <p>28th Feb 2024 - Now</p>
                                  </li>
                                  
                                </ul>
                    </div>
                    <div className="  "><img src={dev} alt="dev" className="devImg d-block mx-auto "/></div>
               </div>
             </div>
         </section>

    

      <section id="skills" className="py-5 ">
        <div className="container ">
          {/* <h1 className="     rounded position-relative mx-auto    " id="mySkills" ><span className="  position-absolute translate-middle top-0 start-50           text-danger" id="Icon" onMouseEnter={techStack} onMouseLeave={textLeave}><i className="fa-solid fa-brain"></i> <div class="brainContainer"></div></span>Tech Stack</h1> */}
          
          <div>
               <ul className="workingList  balloons">
                                  <li  >
                                    <div class="icon"><img src={brain} alt="brainImage" className="img-fluid brainImg balloonImg"></img>
                                     </div>
                                       
                                    
                                    <div class="title">Tech Stack   </div>
                                     
                                   
                                  </li>
                                  
               </ul>       
               
          {/* <div className="playerContainer">
                                         <Player
                                         autoplay
                                         loop
                                         
                                         src={thickLines} className="lines"/></div> */}
                                
                                <div className="dots"></div>
          </div>
          <div className="row     ">
           {/*skills.map((item,index)=> <div className="col-lg-8 col-md-10 col-sm-12 col-xs-12 mx-auto p-2 d-flex justify-content-around my-1 skills-container" key={index} ><div className="col-2 skills-icons"  >{item.icons}</div><div className="col-4 skill-type"  ><h4>{item.Language}</h4></div><div  className="col-4 bar"><div className="track" style={{width:`${item.level}%`}}></div></div></div>)*/}
             <div className=" col-12  text-start      rounded" id="categories">
              <ul className="row    headUL ">
              
              
               {category.map((item,index)=>
                  <li key={ index} className="       my-3 headList">{"< "+item+" />"}
                   <ul className="subUL">
                    {subCat[item].map((sub,subIndex)=><li key={subIndex} className="subList col-lg-12 col-md-12 col-sm-12 col-11   my-3" ><div className="d-flex position-relative   align-items-center" id="subContainer"><span id={`lan${sub}`}>{sub} {individuals[sub].icon}</span> <span id={`percent${sub}`} className="percentText text-end   position-absolute"></span><span className="skillLevel position-absolute bottom-0 start-0" id={`line${sub}`}></span></div></li>)}
                   </ul>
                  </li>
               )}
               
                 
                
                  
              </ul>
              <div className="confidence">
                <div className="textContainer    rounded p-2">
                  <span>L</span><span>e</span><span>v</span><span>e</span><span>l</span><span>&nbsp;</span>
                  <span>O</span><span>f</span><span>&nbsp;</span>
                  <span>C</span><span>o</span><span>n</span><span>f</span><span>i</span><span>d</span><span>e</span><span>n</span><span>c</span><span>e</span>
                </div>
                <div className="lineHighlighter"></div>

              </div>
               
              </div>
          </div>
        </div>
      </section>

      <section id="projects" className="p-1 container   ">
        {/* <h1 className="p-4 my-5 w-75 mx-auto       shadow-lg border  rounded position-relative" id="honed">Projects that honed my skills<i className="fas fa-project-diagram position-absolute top-0 translate-middle start-50 z-1  text-danger shadow" id="Icon"></i></h1> */}
         <div>
               <ul className="workingList balloons ">
                                  <li  >
                                    <div class="icon "><img src={project} alt="balloonImg" className="img-fluid  balloonImg"></img> </div>
                                    <div class="title">Projects</div>
                                   
                                  </li>
                                  
               </ul>
                                <div className="dots"></div>
          </div>
        
      <div className="   text-center   rounded  projectList"  >
      <p style={{color:"white"}} className="p-3">Sorted from latest</p>

       
        
      
        <div className="row  "  >
        {projects.map((item,index)=> item.desc? 
                                  <div className="col-12   rounded   p-lg-4 p-md-2 p-sm-1 p-xs-0     d-flex flex-wrap  my-2 p-1" key={index}>
                                    <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12 p-2  ">
                                      {item.video?<video autoPlay    muted loop  className="col-12   rounded "  ><source src={item.video}></source></video>:
                                             <div id="carouselExampleSlidesOnly" className="carousel slide  " data-bs-ride="carousel">
                                             <div className="carousel-inner">
                                               <div className="carousel-item active">
                                                 <img src={item.carousel[0]} className="d-block w-100   rounded" alt="..."/>
                                               </div>
                                               {item.carousel.map((carouselItem,caroIndex)=>{
                                                if(caroIndex>0){
                                                  return (<div className="carousel-item"  key={caroIndex}>
                                                 <img src={carouselItem} className="d-block w-100   rounded" alt="..."/>
                                               </div>);
                                               }
                                               else{
                                                return "";
                                               }
                                               })
                                              }
                                               
                                             </div>
                                           </div>    
                                      }
                                    </div>
                                  <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 p-lg-4 p-md-2 p-sm-1 p-xs-0 my-2" id="projectDescription">
                                    <h4 className=" ">{item.name}({item.completion}) {item.icon}</h4><p className="col-12 p-lg-4 p-md-2 p-sm-1 p-xs-0 ">{item.desc}</p>
                                    {item.linkedIn?<div className="p-1 m-1"><a className="btn btn-dark  blendMode" href={item.linkedIn}>Working Detail <i className="fa-solid fa-circle-info"></i></a></div>:""}
                                    <div className="d-flex justify-content-around col-12 "><a href={item.git} className="btn btn-dark col-5  blendMode">Code <i className="fa-brands fa-github"></i></a><a href={item.demo} className="btn btn-dark col-5 blendMode">Live Demo <i className="fa-solid fa-arrow-up-right-from-square"></i></a></div></div>
                                  </div>:


                                  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-10 my-2 position-relative " id="box" key={index}>
                                    <div className="      rounded p-2  "> 
                                   <div id="tech"  className="position-absolute"><a   href={item.link}>{item.tech}</a></div> 
                                    <a href={item.link}> <img  src={item.img}  alt="project_Image"  className="img-fluid rounded"/>
                                       <p  id="caption">{item.name}</p>
                                      </a> 
                                      </div>
                                  </div> 
                                  
                      )}
            </div>
          
        
        
       

      </div>
    </section>
    <section  id="certifications" className="py-5">
        {/* <h1 className="p-4  w-75 mx-auto   shadow border rounded position-relative" id="myCerti">My Certifications <i className="fa fa-certificate position-absolute top-0 translate-middle start-50 z-1  text-danger shadow" id="Icon"></i></h1> */}
        <div>
               <ul className="workingList balloons ">
                                  <li  >
                                    <div class="icon "><img src={certification} alt="balloonImg" className="img-fluid  balloonImg"></img> </div>
                                    <div class="title">Certifications</div>
                                   
                                  </li>
                                  
               </ul>
                                <div className="dots"></div>
          </div>
        <div id="carouselExampleRide" className="carousel slide border rounded  container py-2 " data-bs-ride="true">
            
            <div className="carousel-inner    ">
              <div className="carousel-item active col-lg-10 col-md-10 col-sm-12 col-xs-12  ">
                <img src={infotrixs} className=" img-fluid rounded" alt="certifaction_Image"/>
              </div>
              <div className="carousel-item  col-lg-10 col-md-10 col-sm-12 col-xs-12  ">
                <img src="https://dua-designs.github.io/portfolio/images/certi.png" className= "img-fluid rounded" alt="certifaction_Image"/>
              </div>
              
              <div className="carousel-item col-lg-10 col-md-10 col-sm-12 col-xs-12 ">
                <img src="https://dua-designs.github.io/portfolio/images/javascript_certi.PNG" className=" img-fluid rounded" alt="certifaction_Image"/>
              </div>
              <div className="carousel-item col-lg-10 col-md-10 col-sm-12 col-xs-12  ">
                <img src="	https://dua-designs.github.io/portfolio/images/Fedl.PNG" className=" img-fluid rounded" alt="certifaction_Image"/>
              </div>
              <div className="carousel-item col-lg-10 col-md-10 col-sm-12 col-xs-12  ">
                <img src="https://dua-designs.github.io/myportfolio/images/30daysReact.png" className=" img-fluid rounded" alt="certifaction_Image"/>
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
        <section id="product" className="   ">
            <div className="container  position-relative" >
               
            <div className="row p-2   " id="git"  >
               
                
            <div className="col-10 mx-auto p-2 py-2"     >
              <form method="post"  onSubmit={(event)=>sendEmail(event)}    id="contactForm" >
                <div className="row mb-3  p-2">
                  <label className="col-sm-4 col-form-label">Name</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" id="inputName3" required />
                  </div>
                </div>
                <div className="row mb-3 p-2">
                  <label  className="col-sm-4 col-form-label ">Email</label>
                  <div className="col-sm-8">
                    <input type="email" className="form-control" id="inputEmail3" required  />
                  </div>
                </div>
                <div className="row mb-3 p-2">
                  <label   className="col-sm-4 col-form-label ">Your Message</label>
                  <div className="col-sm-8">
                   <textarea name="" id="inputMessage" cols="30" rows="3" className="form-control" required></textarea>
                  </div>
                </div>
               
                
                 
                <button   className="btn   d-block w-25 mx-auto g-recaptcha" type="submit" id="Submitme" 
         >{processing?<i id="spinner" className="fa-solid fa-compact-disc"></i>:"Submit"}</button>
                <div id="response" ><p id="pResponse" className="fs-3"></p></div>
              </form>
          </div>
        </div>

        <div className="row  "   id="disappear">
                    <div className="col-lg-6 mx-auto text-center"  >
                        <h1><span  >UDAY</span><br/>
                        <span id="line"> ARAVIND</span></h1>
                       
                   </div>
                   <div className="col-10 mx-auto p-2" id="prod">
                    <h2 >Let's talk about your product</h2>
                    <em>How do you take your protien shake?</em> <br/>
                    <button className="btn  btn-dark  m-2    " id="touchbtn" onClick={detailsInput}>Get in touch now</button> 
                </div>

                </div>
    </div>


        </section>
    <div class="modal  modal-lg fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-3" id="exampleModalLabel">About Aravind</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      
                      <div className="col-12" class="myImage"><img src={me} alt="Its Me" className="img-fluid"  ></img></div>
   
   <div className="aboutMeParas">  <p>Transitioned into Software after Graduating a different stream. I stumbled upon 'Frontend Technologies' and they have captivated me with how diverse the logic can be. Endless possibilities of the interfaces that could  be created.</p>
     <p>
     
     Through intense effort of 6 months I became a Web Developer. Presently, working for <br/>  <a href="https://www.grank.co.in/" target="_blank" rel="noreferrer">G-Rank Digital Services Private Limited.</a>  </p>
    

       <p>I am very open to conversations. Hit me up anytime.</p></div>
       
                       
                 
         
     
     
     
      </div>
      <div class="modal-footer">
         
      </div>
    </div>
  </div>
</div>

       


        <section className="position-relative lightSaber">
       <div className="container">
         <div className="row">
         <div className="col-lg-6 col-md-6 guideToLight">
          <h1>Hard to see visitor? Activate Noble Phantasom and brighten the sky.</h1>
          <h4>I feel the energy from here  </h4>
         </div>
         <div className="col-lg-6 col-md-6 moreMe">
                   
                   <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">More About Me</button>

 
 


         </div>
         </div>
         
       </div>
                          
          <div class="tooltip">
            Click the lightsaber
        </div>
           
          <div class={toggleValue? "lightsaber" : "lightsaber lightsaber--on"}>
            <div class="lightsaber__light">
              <div class="lightsaber__line"></div>
              <div class="lightsaber__line"></div>
              <div class="lightsaber__line"></div>
            </div>
            <div class="lightsaber__handle" onClick={handleClick}>
              <svg id="handle-svg"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 900 371.55">
              <defs>
                  <style dangerouslySetInnerHTML={{__html: `
                    .cls-1{fill: #4e4f51;}
                    .cls-2{fill: #231f20;}
                    .cls-3{fill: #58595b;}
                    .cls-4{fill: #3b3a3c;}
                    .cls-5{fill: #323031;}
                    .cls-6{fill: #3a3825;}
                    .cls-7{fill: #454547;}
                    .cls-8{fill: #626366;}
                    .cls-9{fill: #217ca2;}
                    .cls-10,.cls-13{fill: #353435;}
                    .cls-11{fill: #3e3e3f;}
                    .cls-12{fill: #383738;}
                    .cls-13{stroke: #353435;stroke-linejoin:round;stroke-width:2px;}
                    .cls-14{fill: #77787b;}
                    .cls-15{fill: none;stroke:#d0181f;stroke-miterlimit:10;stroke-width:6.01px;}
                    .cls-16{fill: #404041;}
                    .cls-17{fill: #0d0d0d;}
                    `
                   }} />
              </defs><title>kylo</title>
              <rect class="cls-1" x="813.22" y="12.41" width="43.06" height="91.44" />
              <rect class="cls-1" x="813.22" y="267.7" width="43.06" height="91.44" />
              <rect class="cls-2" x="537.69" y="127.08" width="25.48" height="118.15" />
              <path class="cls-2" d="M641.35,113.94s13.56,5.38,21.79,28.35,16.7,32.73,17.72,43.87,22,46.26,22,53.73,4.51,15.05,27,13.52,42.05-2.76,33.54-26.93,6.57-10.65,2-21.16-8.54-29.49-18.06-28.76-17.52-21.8-26.53-31.32-30.13-32.45-54.84-31.3H641.35Z" transform="translate(0 0)" /><polygon class="cls-3" points="703.26 165.02 691.44 165.02 680.45 138.86 692.27 138.86 703.26 165.02" /><rect class="cls-4" x="717.13" y="219.02" width="8.57" height="30.1" /><rect class="cls-4" x="666.09" y="203.29" width="102.07" height="7.77" /><polygon class="cls-4" points="691.85 165.02 680.04 165.02 669.05 138.86 680.86 138.86 691.85 165.02" /><rect class="cls-3" x="708.75" y="219.02" width="8.57" height="30.1" /><path class="cls-5" d="M762,222.33c4.51,21-7.76,18.27-33,21.53s-26.67-7.13-26.67-7.13v21.65h69.48l-3.59-35Z" transform="translate(0 0)" /><polygon class="cls-6" points="766.4 173.27 656.1 194.04 656.1 169.97 766.4 149.19 766.4 173.27" /><polygon class="cls-6" points="741.03 136.22 630.73 151.55 630.73 133.78 741.03 118.44 741.03 136.22" /><polygon class="cls-6" points="782.52 222.24 672.22 237.58 672.22 219.8 782.52 204.47 782.52 222.24" /><rect class="cls-3" x="666.09" y="165.02" width="81.38" height="7.77" /><rect class="cls-7" x="666.09" y="172.66" width="94.06" height="5.95" /><rect class="cls-7" x="646.4" y="129.47" width="94.06" height="5.88" /><rect class="cls-7" x="697.11" y="109.13" width="7.77" height="81.38" transform="translate(472.41 829.22) rotate(-83.47)" /><rect class="cls-7" x="666.09" y="210.94" width="102.07" height="5.95" /><rect class="cls-8" x="666.09" y="226.48" width="102.07" height="5.95" /><rect class="cls-3" x="649.34" y="123.07" width="59.41" height="2.14" /><rect class="cls-3" x="657.91" y="132.72" width="59.41" height="6.14" /><rect class="cls-8" x="695.37" y="118.02" width="2.14" height="72.52" transform="translate(463.94 828.66) rotate(-83.47)" /><rect class="cls-8" x="663.27" y="178.61" width="102.39" height="2.14" /><rect class="cls-9" x="666.94" y="224.9" width="102.39" height="4.14" transform="translate(-5.54 18.33) rotate(-1.46)" /><rect class="cls-8" x="663.27" y="187.96" width="102.39" height="2.14" /><rect class="cls-7" x="673.88" y="232.42" width="102.39" height="2.14" /><polygon class="cls-9" points="774.25 213.52 677.45 198.25 677.45 190.48 774.25 205.75 774.25 213.52" /><rect class="cls-7" x="663.27" y="192.23" width="102.39" height="2.14" /><path class="cls-4" d="M797,117.94H782.52V254.38H797a4,4,0,0,1-4,4H560.73a4,4,0,0,1-4-4V117.94a4,4,0,0,1,4-4h80.62s13.56,5.39,21.79,28.36,16.7,32.72,17.72,43.86,22,46.26,22,53.75,4.51,15,27,13.52,42.05-2.76,33.54-26.93,6.57-10.65,2-21.17-8.55-29.5-18.06-28.76-17.52-21.81-26.53-31.32c-8.61-9.07-28.28-30.42-51.55-31.3H793A4,4,0,0,1,797,117.94Z" transform="translate(0 0)" /><rect class="cls-4" x="663.27" y="190.09" width="102.39" height="2.14" /><rect class="cls-5" x="793.03" y="103.85" width="45.89" height="30.64" /><rect class="cls-10" x="246.83" y="123.07" width="294.87" height="126.17" /><rect class="cls-4" x="246.83" y="123.07" width="294.87" height="19.21" /><rect class="cls-4" x="246.83" y="149.81" width="294.87" height="19.21" /><rect class="cls-4" x="246.83" y="176.55" width="294.87" height="19.22" /><rect class="cls-4" x="246.83" y="203.29" width="294.87" height="19.21" /><rect class="cls-4" x="246.83" y="230.03" width="294.87" height="19.21" /><rect class="cls-2" x="452.19" y="165.02" width="4.11" height="15.54" /><rect class="cls-2" x="460.41" y="165.02" width="4.11" height="15.54" /><rect class="cls-2" x="468.63" y="165.02" width="4.11" height="15.54" /><rect class="cls-2" x="452.19" y="118.82" width="4.11" height="8.51" /><rect class="cls-2" x="460.41" y="118.82" width="4.11" height="8.51" /><rect class="cls-2" x="468.63" y="118.82" width="4.11" height="8.51" /><rect class="cls-2" x="452.19" y="244.99" width="4.11" height="8.51" /><rect class="cls-2" x="460.41" y="244.99" width="4.11" height="8.51" /><rect class="cls-2" x="468.63" y="244.99" width="4.11" height="8.51" /><rect class="cls-2" x="452.19" y="218.7" width="4.11" height="15.54" /><rect class="cls-2" x="460.41" y="218.7" width="4.11" height="15.54" /><rect class="cls-2" x="468.63" y="218.7" width="4.11" height="15.54" /><rect class="cls-1" x="448.08" y="165.02" width="4.11" height="15.54" /><rect class="cls-1" x="456.3" y="165.02" width="4.11" height="15.54" /><rect class="cls-1" x="464.52" y="165.02" width="4.11" height="15.54" /><rect class="cls-1" x="472.74" y="165.02" width="65.08" height="15.54" /><rect class="cls-1" x="448.08" y="118.82" width="4.11" height="8.51" /><rect class="cls-1" x="456.3" y="118.82" width="4.11" height="8.51" /><rect class="cls-1" x="464.52" y="118.82" width="4.11" height="8.51" /><rect class="cls-1" x="472.74" y="118.82" width="65.08" height="8.51" /><rect class="cls-1" x="448.08" y="244.99" width="4.11" height="8.51" /><rect class="cls-1" x="456.3" y="244.99" width="4.11" height="8.51" /><rect class="cls-1" x="464.52" y="244.99" width="4.11" height="8.51" /><rect class="cls-1" x="472.74" y="244.99" width="65.08" height="8.51" /><rect class="cls-1" x="448.08" y="218.7" width="4.11" height="15.54" /><rect class="cls-1" x="456.3" y="218.7" width="4.11" height="15.54" /><rect class="cls-1" x="464.52" y="218.7" width="4.11" height="15.54" /><rect class="cls-1" x="472.74" y="218.7" width="65.08" height="15.54" /><path class="cls-1" d="M691.47,246.65a9.91,9.91,0,0,1-9.91,9.91H573.39a9.91,9.91,0,0,1-9.91-9.91h0a9.91,9.91,0,0,1,9.91-9.91H681.56a9.91,9.91,0,0,1,9.91,9.91h0Z" transform="translate(0 0)" /><path class="cls-10" d="M610.24,246.65a6.76,6.76,0,0,1-6.76,6.76H573.94a6.76,6.76,0,0,1-6.76-6.76h0a6.76,6.76,0,0,1,6.76-6.76h29.54a6.76,6.76,0,0,1,6.76,6.76h0Z" transform="translate(0 0)" /><rect class="cls-4" x="573.94" y="239.89" width="5.91" height="13.52" /><rect class="cls-4" x="585.76" y="239.89" width="5.91" height="13.52" /><rect class="cls-4" x="597.57" y="239.89" width="5.91" height="13.52" /><path class="cls-10" d="M687.62,246.65a6.76,6.76,0,0,1-6.76,6.76H651.32a6.76,6.76,0,0,1-6.76-6.76h0a6.76,6.76,0,0,1,6.76-6.76h29.54a6.76,6.76,0,0,1,6.76,6.76h0Z" transform="translate(0 0)" /><rect class="cls-4" x="651.32" y="239.89" width="5.91" height="13.52" /><rect class="cls-4" x="663.14" y="239.89" width="5.91" height="13.52" /><rect class="cls-4" x="674.95" y="239.89" width="5.91" height="13.52" /><rect class="cls-2" x="803.54" y="143.54" width="63.08" height="84.47" /><rect class="cls-4" x="866.63" y="137.48" width="33.38" height="96.59" /><polygon class="cls-4" points="856.28 143.54 856.28 125.21 836.92 125.21 836.92 134.49 822.23 134.49 822.23 124.14 827.57 124.14 827.57 111.66 803.54 111.66 803.54 143.54 856.28 143.54" /><path class="cls-4" d="M856.28,143.23c0,7-11.8,12.6-26.37,12.6s-26.37-5.64-26.37-12.6S856.28,136.27,856.28,143.23Z" transform="translate(0 0)" /><path class="cls-4" d="M788.19,105.85V3.74s1.84-8.94,17.36.82c18.86,11.86,37,28.21,37,28.21v73.09H788.19Z" transform="translate(0 0)" /><rect class="cls-7" x="831.33" y="98.92" width="30.04" height="28.68" rx="2" ry="2" /><rect class="cls-5" x="793.03" y="235.06" width="45.89" height="32.64" /><polygon class="cls-4" points="856.28 228.01 856.28 246.34 836.92 246.34 836.92 237.06 822.23 237.06 822.23 247.41 827.57 247.41 827.57 259.89 803.54 259.89 803.54 228.01 856.28 228.01" /><rect class="cls-2" x="782.52" y="117.94" width="21.02" height="136.44" /><path class="cls-4" d="M856.28,228.32c0-7-11.8-12.6-26.37-12.6s-26.37,5.64-26.37,12.6S856.28,235.28,856.28,228.32Z" transform="translate(0 0)" /><path class="cls-4" d="M788.19,267.7V367.81s1.84,8.94,17.36-.82c18.86-11.85,37-28.21,37-28.21V267.7H788.19Z" transform="translate(0 0)" /><rect class="cls-7" x="831.33" y="243.95" width="30.04" height="28.68" rx="2" ry="2" /><rect class="cls-11" y="129.09" width="40.06" height="114.15" /><rect class="cls-2" x="40.06" y="129.09" width="206.78" height="114.14" /><path class="cls-12" d="M236.81,129.09c0-12.64-71.81-10.95-116.81-10.95s-67.5-12-75.64-11S29,129.09,29,129.09H236.81Z" transform="translate(0 0)" /><path class="cls-4" d="M236.81,243.23c0,12.64-71.81,10.95-116.81,10.95s-67.5,12-75.64,11S29,243.23,29,243.23H236.81Z" transform="translate(0 0)" /><path class="cls-4" d="M236.81,214.3c0,12.64-71.81,10.95-116.81,10.95s-67.5,12-75.64,11S29,214.3,29,214.3v11s7.18,20.9,15.32,21.9,30.64-11,75.64-11,116.81,1.69,116.81-10.95v-11Z" transform="translate(0 0)" /><path class="cls-13" d="M29,214.3s7.18,20.9,15.32,21.9,30.64-11,75.64-11,116.81,1.69,116.81-10.95v-7.91H40.06v7.91H29Z" transform="translate(0 0)" /><path class="cls-14" d="M258.46,177.77h8.77a4,4,0,0,1,4,4v8.77a4,4,0,0,1-4,4h-8.77a4,4,0,0,1-4-4v-8.77A4,4,0,0,1,258.46,177.77Z" /><path class="cls-14" d="M70.21,177.77H79a4,4,0,0,1,4,4v8.77a4,4,0,0,1-4,4H70.21a4,4,0,0,1-4-4v-8.77A4,4,0,0,1,70.21,177.77Z" /><rect class="cls-12" x="74.6" y="173.81" width="188.24" height="24.7" rx="4.01" ry="4.01" /><circle class="cls-14" cx="88.62" cy="186.16" r="8.39" /><path class="cls-2" d="M241.27,189.79H123.32c-2.67,0-6.32,2.16-8.15,4.83l-2.66,3.88H99.87c2.67,0,6.32-2.16,8.16-4.84l3.6-5.24c1.83-2.67,5.48-4.83,8.15-4.83H240.43Z" transform="translate(0 0)" />
              <rect class="cls-14" x="47.56" y="118.1" width="12.02" height="12.02" rx="2" ry="2" />
              <rect class="cls-14" x="47.56" y="242.45" width="12.02" height="12.02" rx="2" ry="2" />
              <path class="cls-15" d="M100,129.09s0.15-18.52,32.95-8.25,86.86,4.38,120.74,15.23,144.15,8.73,173.39,0,78.77,2.58,119.49-7,85.06-9.05,100.3-14.23c20.67-7,25.47,6.06,25.16,14.6" transform="translate(0 0)" /><path class="cls-8" d="M168.72,139.31a3.2,3.2,0,0,1-3.2,3.2h0a3.2,3.2,0,0,1-3.2-3.2V122.88a3.2,3.2,0,0,1,3.2-3.2h0a3.2,3.2,0,0,1,3.2,3.2v16.43Z" transform="translate(0 0)" /><path class="cls-13" d="M236.81,158c0-12.64-71.81-10.95-116.81-10.95s-67.5-12-75.64-11S29,158,29,158V147s7.18-20.9,15.32-21.9,30.64,11,75.64,11S236.81,134.39,236.81,147v11Z" transform="translate(0 0)" /><path class="cls-4" d="M29,158s7.18-20.9,15.32-21.9,30.64,11,75.64,11S236.81,145.38,236.81,158v7.91H40.06V158H29Z" transform="translate(0 0)" /><rect class="cls-14" x="47.56" y="158.02" width="12.02" height="56.28" rx="2" ry="2" /><circle class="cls-14" cx="248.82" cy="186.16" r="8.39" /><rect class="cls-5" x="243.98" y="184.19" width="9.68" height="3.93" /><rect class="cls-5" x="83.78" y="184.19" width="9.68" height="3.93" /><rect class="cls-5" x="86.65" y="181.32" width="3.93" height="9.68" /><rect class="cls-5" x="246.86" y="181.32" width="3.93" height="9.68" /><path class="cls-8" d="M305.42,151.64a3.2,3.2,0,0,1-3.2,3.2h0a3.2,3.2,0,0,1-3.2-3.2V135.21a3.2,3.2,0,0,1,3.2-3.2h0a3.2,3.2,0,0,1,3.2,3.2v16.43Z" transform="translate(0 0)" /><path class="cls-8" d="M638.83,129.29a3.2,3.2,0,0,1-3.2,3.2h0a3.2,3.2,0,0,1-3.2-3.2V112.85a3.2,3.2,0,0,1,3.2-3.2h0a3.2,3.2,0,0,1,3.2,3.2v16.43Z" transform="translate(0 0)" /><path class="cls-1" d="M803.54,149.24A12.51,12.51,0,1,1,791,136.72,12.52,12.52,0,0,1,803.54,149.24Z" transform="translate(0 0)" /><path class="cls-2" d="M788,141.23v16h-6.61a12.5,12.5,0,0,1,0-16H788Z" transform="translate(0 0)" /><rect class="cls-4" x="788.02" y="143.23" width="8.18" height="12.02" /><path class="cls-16" d="M805.54,155.25c-3.17,5.92-9.34,2.84-9.34,2.84v-17.7s6.17-3.09,9.34,2.84v12Z" transform="translate(0 0)" /><path class="cls-17" d="M836.93,166.57H735.21c3.92,5.85,7.93,10.31,12.26,10,9.41-.74,13.44,17.84,17.92,28.42h71.53a4,4,0,0,0,4-4v-30.4A4,4,0,0,0,836.93,166.57Z" transform="translate(0 0)" /><rect class="cls-4" x="835.24" y="160.49" width="27.37" height="50.58" rx="4" ry="4" /></svg>
              <div class="lightsaber__light-left">
                <div class="lightsaber__spark up"></div>
                <div class="lightsaber__spark up"></div>
                <div class="lightsaber__spark up"></div>
                <div class="lightsaber__spark down"></div>
                <div class="lightsaber__spark down"></div>
                <div class="lightsaber__spark down"></div>
                <div class="lightsaber__ripple"></div>
                <div class="lightsaber__ripple"></div>
              </div>
              <div class="lightsaber__light-right">
                <div class="lightsaber__spark up"></div>
                <div class="lightsaber__spark up"></div>
                <div class="lightsaber__spark up"></div>
                <div class="lightsaber__spark down"></div>
                <div class="lightsaber__spark down"></div>
                <div class="lightsaber__spark down"></div>
                <div class="lightsaber__ripple"></div>
                <div class="lightsaber__ripple"></div>
              </div>
            </div>
            <div class="sparks">
              <div class="lightsaber__spark up"></div>
              <div class="lightsaber__spark up"></div>
              <div class="lightsaber__spark up"></div>
              <div class="lightsaber__spark up"></div>
              <div class="lightsaber__spark up"></div>
              <div class="lightsaber__spark up"></div>
              <div class="lightsaber__spark up"></div>
              <div class="lightsaber__spark up"></div>
              <div class="lightsaber__spark up"></div>
              <div class="lightsaber__spark up"></div>
              <div class="lightsaber__spark up"></div>
              <div class="lightsaber__spark up"></div>
              <div class="lightsaber__spark up"></div>
              <div class="lightsaber__spark down"></div>
              <div class="lightsaber__spark down"></div>
              <div class="lightsaber__spark down"></div>
              <div class="lightsaber__spark down"></div>
              <div class="lightsaber__spark down"></div>
              <div class="lightsaber__spark down"></div>
              <div class="lightsaber__spark down"></div>
              <div class="lightsaber__spark down"></div>
              <div class="lightsaber__spark down"></div>
              <div class="lightsaber__spark down"></div>
              <div class="lightsaber__spark down"></div>
              <div class="lightsaber__spark down"></div>
              <div class="lightsaber__spark down"></div>
              <div class="lightsaber__spark down"></div>
            </div>
            <div class="ripples">
              <div class="lightsaber__ripple"></div>
              <div class="lightsaber__ripple"></div>
              <div class="lightsaber__ripple"></div>
              <div class="lightsaber__ripple"></div>
              <div class="lightsaber__ripple"></div>
              <div class="lightsaber__ripple"></div>
              <div class="lightsaber__ripple"></div>
              <div class="lightsaber__ripple"></div>
            </div>
          </div>
        
        </section>
        <section className="  py-4" id="footLinks">
            <div className="container">
               <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12  my-3  " id="academy">
         
           <p className="  w-75 py-3" id="designBy">   &copy; Copyright 2024 <span  > Dua-Designs</span></p>
            </div>
            <div className="col ">
             
            </div>
            <div className="myLinks  col-lg-1 col-md-1 col-sm-5 col-xs-10  d-flex justify-content-around align-items-center py-2 my-3">
              {/* <a href="#twitter" target="blank"><i className="fa-brands fa-twitter  rounded"></i></a>
              <a href="https://www.facebook.com/dualifts/" target="blank"><i className="fa-brands fa-facebook-f   rounded"></i></a>
              <a href="#instagram"><i className="fa-brands fa-instagram   rounded"></i></a> */}
              <a href="https://github.com/DUA-Designs" target="blank"><i className="fa-brands fa-github   rounded"></i> </a>
              <a href="https://www.linkedin.com/in/uday-aravind-dasari-385636225/" target="blank"><i className="fa-brands fa-linkedin-in   rounded"></i></a>
             
            </div>
          </div>
            </div>
          </section>
         
    </footer>
    <button
    type="button"
    className="btn   btn-floating  "
    id="btn-back-to-top"
    >
<i class="fi fi-br-angle-up"></i>
</button>
    </div>)
}
