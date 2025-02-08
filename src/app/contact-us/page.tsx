import {Header} from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import contact from "..//images/contact.jpg"
export default function Contact(){
  return (
    <div>
  <Header/>
  <div className="contact-container">
    <div className="left-contact">
      <h1 className="contact-font-size-50">Contact Us</h1>
      <form>
        <fieldset>
          <input className="form-field" type="text" placeholder="Enter Your Name"/>
        </fieldset>
        <fieldset>
          <input className="form-field" type="tel" placeholder="Enter Your Contact Number"/>
        </fieldset>
        <fieldset>
          <input className="form-field" type="email" placeholder="Enter Your Email"/>
        </fieldset>
        <fieldset>
          <textarea className="form-textarea" rows={5} cols={10}>

          </textarea>
        </fieldset>
        <fieldset>
          <button className="form-button">Submit</button>
        </fieldset>
        
      </form>
    </div>
    <div className="right-contact">
    <Image className="my-contact-image" src={contact} alt="/" />
    </div>
  </div>
  <Footer/>

  </div>
  );
}