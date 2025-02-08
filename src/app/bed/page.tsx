import {Header} from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import bed from "../images/bed.webp"

export default function Bed(){
  return (
    <div>
  <Header/>
  <div className="bed-container">
    <div className="bed-left">
    <Image className="my-bed-image2" src={bed} alt="/" />
    </div>
    <div className="bed-right">
    <h1 className="font-size-50">Beds</h1>
    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

  </div>
  <Footer/>

  </div>
  );
}