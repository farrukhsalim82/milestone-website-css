import Link from "next/link"
import Image from "next/image";
import img from "../images/furniture2.jpg"
import bed from "../images/bed.webp"
import storage from "../images/storage.webp"
import couches from "../images/couches.jpg"
import bookcases from "../images/bookcases.webp"
import dresser from "../images/dresser.webp"
import cabinets from "..//images/cabinet.webp"
import furniture from "..//images/furniture3.png"

type IData={
    title:string;
    description:string;
}
const data: IData[]=[
    {title:"Ubaid" , description:"Hello from Ubaid"},
    {title:"Ahmer" , description:"Hello from Ubaid"},
    {title:"Anas" , description:"Hello from Ubaid"},
]



export default function Body() {
  return (
   <div className="imagecontainer">
    <div>
    <Image src={img} alt="/" />
      </div>
      <div className="categories">
        <h1 className="font-size-50"><b>Our Categories</b></h1>
        <div className="upper-boxes">
            
        <div className="beds scale-up-center ">
        <Image className="my-bed-image" src={bed} alt="/" />
            <h1 className="font-settings">Beds</h1>
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  </p>
            <br></br>
            <div className="text-center ">
            <button className="btn-style"><Link href={"/bed"}>Read More</Link></button>
            </div>
        </div>
        <div className="storage scale-up-center ">
        <Image className="my-storage-image" src={storage} alt="/" />
        <h1 className="font-settings">Storage</h1>
        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  </p>
            <br></br>
            <div className="text-center ">
            <button className="btn-style"><Link href={"/storage"}>Read More</Link></button>
            </div>
        </div>
        <div className="couches scale-up-center ">
        <Image className="my-couches-image" src={couches} alt="/" />
        <h1 className="font-settings">Couches</h1>
        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  </p>
            <br></br>
            <div className="text-center ">
            <button className="btn-style"><Link href={"/couches"}>Read More</Link></button>
            </div>
        </div>
        </div>
        <div className="lower-boxes ">
        <div className="bookcases scale-up-center ">
        <Image className="my-bookcases-image" src={bookcases} alt="/" />
            <h1 className="font-settings">Book Cases</h1>
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  </p>
            <br></br>
            <div className="text-center ">
            <button className="btn-style"><Link href={"/bookcases"}>Read More</Link></button>
            </div>
        </div>
        <div className="dresser scale-up-center ">
        <Image className="my-dresser-image" src={dresser} alt="/" />
        <h1 className="font-settings">Dresser</h1>
        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  </p>
            <br></br>
            <div className="text-center ">
            <button className="btn-style"><Link href={"/dresser"}>Read More</Link></button>
            </div>
        </div>
        <div className="cabinets scale-up-center ">
        <Image className="my-cabinets-image" src={cabinets} alt="/" />
        <h1 className="font-settings">Cabinets</h1>
        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  </p>
            <br></br>
            <div className="text-center ">
            <button className="btn-style"><Link href={"/cabinet"}>Read More</Link></button>
            </div>
        </div>
        </div>
      </div>
      {/* <div className="value">
        <div className="value-left">
<Image className="my-value-image" src={furniture} alt="/" />
</div>
<div className="value-right">
    <h1 className="value-font-50">Our Values</h1>
    <br></br>
    <p className="value-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
      </div> */}
   </div>
      
  );
}
