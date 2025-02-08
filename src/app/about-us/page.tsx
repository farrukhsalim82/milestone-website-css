import {Header} from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import aboutus from "..//images/about.jpg"
export default function About(){
  return (
    <div>
  <Header/>
  <div className="container">
<div className="left-about">  
<Image className="my-about-image" src={aboutus} alt="/" />
</div>
<div className="right-about">
  <h1 className="abt-us"><b>About Us</b></h1>
  <br></br>
  <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
     laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
       non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
</div>
  </div>
  <Footer/>

  </div>
  );
}