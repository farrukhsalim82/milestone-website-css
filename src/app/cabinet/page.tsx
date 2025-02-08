import {Header} from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import cabinets from "..//images/cabinet.webp"

export default function Couches(){
  return (
    <div>
  <Header/>
  <div className="cabinets-container">
    <div className="cabinets-left">
    <Image className="my-bed-image2" src={cabinets} alt="/" />
    </div>
    <div className="cabinets-right">
    <h1 className="font-size-50">Cabinets</h1>
    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

  </div>
  <Footer/>

  </div>
  );
}