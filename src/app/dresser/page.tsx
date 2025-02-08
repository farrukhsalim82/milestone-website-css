import {Header} from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import dresser from "../images/dresser.webp"

export default function Dresser(){
  return (
    <div>
  <Header/>
  <div className="dresser-container">
    <div className="dresser-left">
    <Image className="my-bed-image2" src={dresser} alt="/" />
    </div>
    <div className="dresser-right">
    <h1 className="font-size-50">Dresser</h1>
    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

  </div>
  <Footer/>

  </div>
  );
}