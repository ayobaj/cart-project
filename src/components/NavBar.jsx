/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { IoIosCart } from "react-icons/io";
import { HiHome } from "react-icons/hi2";

const NavBar = ({quantity}) => {
  return (
    <div className="navbar w-[100%] h-[80px] bg-indigo-900 flex justify-end items-center font-medium">
      <div className="links flex flex-row mr-[50px] items-center text-white gap-5 text-[20px] ">
      <Link to= '/'><HiHome /></Link>
      <div className="flex items-center gap-1">
        <span><Link to= '/cart'><IoIosCart/></Link></span>
        <span className="text-indigo-500 pb-5">{quantity}</span>
      </div>
      
      </div>
    </div>
  )
}

export default NavBar
