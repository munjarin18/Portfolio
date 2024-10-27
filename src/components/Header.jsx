import React, { useState } from "react";
import Flex from "./Flex";
import Container from "./Container";
import Logo from "../assets/Mun.png"
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";







const Header = () => {
  let [show, setShow]= useState(false)
  return (
    <header className='px-3 bg-[#72b626] items-center  '>
        <Container>
      <Flex className=" justify-center items-center">
        <div className="w-1/4">
          <div className="items-center">
            <img className="mx-3 lg:w-[40%]  " src={Logo} alt="" />
          </div>
        </div>
        <div className="w-3/4">
          <ul className={`lg:flex justify-center lg:space-x-5 lg:static text-center absolute duration-700 ease-in-out ${show == true ? 'lg:bg-[#72b626]  text-[#fff] items-center top-[60px] left-0 w-full ' : 'top-[100px] left-[-200px]'}`}>
          
            <li className="font-sans font-bold lg:text-[18px] text-[16px]
         text-[#262626]   hover:text-[orange]">
         <Link to='/'>Home</Link></li>
            <li className="font-sans font-bold lg:text-[18px] text-[16px]
         text-[#262626]  hover:text-[orange]">
         <Link to='/About'>About </Link>  </li>
            <li className="font-sans font-bold lg:text-[18px] text-[16px]
         text-[#262626] hover:text-[orange]"><Link to='/Portfolio'> Portfolio</Link></li>
            <li className="font-sans font-bold lg:text-[18px] text-[16px]
         text-[#262626]  hover:text-[orange]"><Link to='/Contact'>Contacts</Link></li>
            <li className="font-sans font-bold lg:text-[18px] text-[16px]
         text-[#262626]  hover:text-[orange]"><Link to="/Blog"> Blog</Link></li>

          </ul>
        </div>

        <div className="lg:hidden" onClick={()=>setShow(!show)}>
          {show == true ?  <RxCross2 /> :  <FaBars />}
        </div>


      </Flex>
    </Container>
    </header>
  );
};

export default Header;
