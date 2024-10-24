import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Munjarin from "../assets/Munjarin.jpg"
import { ReactTyped } from "react-typed";
import { FaHome, FaFacebookSquare, FaLinkedin, FaGithubSquare,FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";





const Banner = () => {
  return (
    <section  className=' lg:py-[100px] py-[50px] bg-[#FFF9E3] animate-slide-in px-2' >
        <Container>
            <Flex className="justify-around flex-wrap">
                <div className="lg:w-[45%]">
                 <div className="">
                 <img className="lg:rounded-[18px]  w-full  rounded-full shadow-2xl shadow-stone-950  " src={Munjarin} alt="" />
                 </div>
                </div>

                <div className="lg:w-[55%] w-full">
                  <div  className="lg:ml-14 lg:py-0 py-5">
                    <div className="relative before:absolute before:contents-[''] before:top-[20px] before:left-[18px] before:w-[30px] before:h-[4px] before:bg-[#72b626] before:rounded-2xl">
                    <h5 className='lg:text-[30px] text-[24px] font-sans  font-bold  ml-[60px]  text-[#72b626] '> I am, </h5>
                    </div>
                  
                  <ReactTyped className='lg:text-[50px] text-[28px] font-serif  font-bold  ml-[20px]  text-[#72b626] ' strings={["Munjarin Akter"]} typeSpeed={200} backSpeed={150} loop={true} />

                  <h3 className='lg:text-[32px] text-[24px] font-sans   text-[#343a40] font-semibold  ml-[20px]  '>Front-End Developer with React JS </h3>

                  <p className='font-sans lg:text-[18px] font-medium text-[#767676] lg:w-full w-[90%] lg:mt-[16px] ml-[20px] '> As a frontend developer with over 2 years of experience, I specialize in creating visually appealing and user-friendly web applications. My expertise lies in translating design wireframes into high-quality code and developing responsive, scalable, and performant websites. Proficient in HTML, CSS, JavaScript, Redux, API and modern frameworks like React . I am passionate about using technology to solve complex problems .</p>
                  
                  <div className="flex lg:space-x-10 space-x-5 pt-[70px] ml-5 ">
                  <a className='py-4 px-4 bg-[#343a40] rounded-full text-[32px] text-[#fff]  duration-300 hover:bg-[#72b626] ease-in-out  p-[14px]' href='https://www.facebook.com/munjarin.aowasti18/' target='blank'><FaFacebookSquare /></a>
                  <a  className='py-4 px-4 bg-[#343a40] rounded-full text-[32px] text-[#fff]  duration-300 hover:bg-[#72b626] ease-in-out  p-[14px]' href='https://www.linkedin.com/in/munjarin-akter-5b13a220b/' target='blank'><FaLinkedin /></a>
                  <a  className='py-4 px-4 bg-[#343a40] rounded-full text-[32px] text-[#fff]  duration-300 hover:bg-[#72b626] ease-in-out  p-[14px]' href='#' target='blank'><FaGithubSquare /></a>
                  <a  className='py-4 px-4 bg-[#343a40] rounded-full text-[32px] text-[#fff]  duration-300 hover:bg-[#72b626] ease-in-out  p-[14px]'  href='#' target='blank'><FaTwitter /></a>
                  <a  className='py-4 px-4 bg-[#343a40] rounded-full text-[32px] text-[#fff] duration-300 hover:bg-[#72b626] ease-in-out  p-[14px]'  href='https://www.instagram.com/moonjuice.18/' target='blank'><FaInstagramSquare /></a>
                  </div>
           
                 

                  </div>

                  <div className="mt-12 lg:ml-20 ml-5">

                  <a href='#'>

                  <div className=" relative flex justify-between lg:w-[30%] w-[70%] h-12 items-center py-4  px-3 border-2 border-[#72b626] rounded-full cursor-pointer duration-300 ease-in-out text-[#767676]  hover:text-white before:absolute before:content-[''] before:top-0 before:right-0 before:h-full before:w-[30%] before:rounded-full before:bg-[#72b626] before:duration-300 before:ease-in-out before:hover:w-full ">
                  
                  <span className='font-sans text-[16px] font-medium mr-2  z-50  '>More About Me</span>
                   
                  <FaArrowRight className='text-[20px] z-50 text-[#fff]  '/>
                  
                  </div>


                  </a>


                  </div>


                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Banner