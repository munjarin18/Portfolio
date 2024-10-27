import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaDownload } from "react-icons/fa6";
import ProgressBar from 'react-bootstrap/ProgressBar';





const About = () => {
  // const [value,setValue]=useState(0)

  // let incerment=()=>{
  //   if(value<=100){
  //     let add=value+1
  //   setValue(add)

  //   }
    
  // }
  
  // setInterval(()=>{
  //   incerment()
    
  // },100)
  
  return (
 
    <section  className='lg:py-24  bg-[#fff] animate-slide-in px-3'>
      <Container>
       <div className="">
       <h2 className='font-sans font-extrabold lg:text-[110px] text-center text-[70px] opacity-15 '>RESUME</h2>
       <h3 className='font-sans text-center font-extrabold lg:text-[57px] text-[45px] lg:mt-[-135px] mt-[-93px] text-[#343a40]'>About <span className='text-[#72b626]'>Me !</span></h3>
       </div>
        
        <Flex className='justify-around flex-wrap items-center'>
          <div className="lg:w-[45%] w-full lg:mt-[70px] mt-6 ">
           <h1 className='font-sans font-bold text-[#343a40] lg:text-[30px] py-14 pb-5 '>PERSONAL INFOS</h1>
            <div className="lg:flex justify-around">
             <div className="w-[45%] ">

              <div className="pb-3">
                <h2 className='font-sans text-[16px] font-medium text-[#666]'>First Name : <span className='font-sans font-semibold text-[16px]  text-[#343a40]'> Munjarin </span> </h2>
              </div>
              <div className="py-[15px]">
                <h2 className='font-sans text-[16px] font-medium text-[#666]'>Last Name : <span className='font-sans font-semibold text-[16px]  text-[#343a40]'> Akter </span> </h2>
              </div>

              <div className="py-[15px]">
                <h2 className='font-sans text-[16px] font-medium text-[#666]'>Age : <span className='font-sans font-semibold text-[16px]  text-[#343a40]'> 23 Years </span> </h2>
              </div>

              <div className="py-[15px]">
                <h2 className='font-sans text-[16px] font-medium text-[#666]'>Nationality : <span className='font-sans font-semibold text-[16px]  text-[#343a40]'> Bangladeshi </span> </h2>
              </div>
              <div className="py-[15px]">
                <h2 className='font-sans text-[16px] font-medium text-[#666]'>Freelance : <span className='font-sans font-semibold text-[16px]  text-[#343a40]'> Available </span> </h2>
              </div>


             </div>
              <div className="w-[45%] ">

              <div className="pb-3">
                <h2 className='font-sans text-[16px] font-medium text-[#666]'>Address : <span className='font-sans font-semibold text-[16px]  text-[#343a40]'> Dhaka,Bangladesh </span> </h2>
              </div>
              <div className="py-[15px]">
                <h2 className='font-sans text-[16px] font-medium text-[#666]'>Phone : <span className='font-sans font-semibold text-[16px]  text-[#343a40]'> +8801870305524 </span> </h2>
              </div>

              <div className="py-[15px]">
                <h2 className='font-sans text-[16px] font-medium text-[#666]'>Email : <span className='font-sans font-semibold text-[16px]  text-[#343a40]'> aktermunjarin@gmail.com </span> </h2>
              </div>

              <div className="py-[15px]">
                <h2 className='font-sans text-[16px] font-medium text-[#666]'> langages : <span className='font-sans font-semibold text-[16px]  text-[#343a40]'>Bangla,English,Hindi </span> </h2>
              </div>
              <div className="py-[15px]">
                <h2 className='font-sans text-[16px] font-medium text-[#666]'> skype : <span className='font-sans font-semibold text-[16px]  text-[#343a40]'> munjarin.akter  </span> </h2>
              </div>


             </div>
            </div>

            <div className="mt-12">
              <a href='https://drive.google.com/file/d/1PXHGI4Us_225b430vm26Ny1m0z0tAyR0/view?usp=sharing'>
              <div className=" relative flex justify-between lg:w-[40%] w-[70%] h-12 items-center py-4  lg:px-4 px-2 border-2 border-[#72b626] rounded-full cursor-pointer duration-300 ease-in-out text-[#767676]  hover:text-white before:absolute before:content-[''] before:top-0 before:right-0 before:h-full before:w-[30%] before:rounded-full before:bg-[#72b626] before:duration-300 before:ease-in-out before:hover:w-full  ">
              
              <h2 className='font-sans font-semibold lg:text-[17px] text-[12px]  z-50 '>DOWNLOAD CV</h2>
              <FaDownload className='lg:text-[20px] text-[14px] z-50 text-[#fff] ' />
              </div>
              </a>
            </div>



          </div>


          <div className="lg:w-[45%] w-full lg:mt-[70px] mt-6">
          <div className="lg:flex justify-around ">
           <div className="lg:w-[45%] w-[150px]">
           <div className="p-[20px]  border-2 border-[#72b626] rounded-xl duration-300 ease-in-out lg:hover:mt-[-5px] ">
            <div className="">
              <div className="flex">
                <h2 className='font-sans font-bold text-[#72b626] text-[56px]'>01</h2>
                <h4 className='font-sans text-[#72b626] font-semibold text-[35px] '>+</h4>
              </div>
              <div className="relative before:absolute before:contents-[''] before:lg:top-[10px] before:top-[-3px] before:left-[-14px] before:w-[30px] before:h-[2px] before:bg-[#767676] ">
              <h3 className='text-[16px]  font-sans w-[150px] text-[#767676] font-medium px-8'>YEARS OF EXPERIENCE</h3>
              </div>
             
            </div>
           </div>
           </div>

           <div className="lg:w-[45%] w-[150px] mt-3 lg:mt-0">
           <div className="p-[20px]  border-2 border-[#72b626] rounded-xl duration-300 ease-in-out lg:hover:mt-[-5px] ">
            <div className="">
              <div className="flex">
                <h2 className='font-sans font-bold text-[#72b626] text-[56px]'>15</h2>
                <h4 className='font-sans text-[#72b626] font-semibold text-[35px] '>+</h4>
              </div>
              <div className="relative before:absolute before:contents-[''] before:lg:top-[10px] before:top-[-3px] before:left-[-14px] before:w-[30px] before:h-[2px] before:bg-[#767676] ">
              <h3 className='text-[16px]  font-sans w-[150px] text-[#767676] font-medium px-8'>COMPLETED PROJECTS</h3>
              </div>
            </div>
           </div>
           </div>

          </div>

          <div className="lg:flex justify-around py-7 ">
           <div className="lg:w-[45%] w-[150px] ">
           <div className="p-[20px]  border-2 border-[#72b626] rounded-xl duration-300 ease-in-out lg:hover:mt-[-5px] ">
            <div className="">
              <div className="flex">
                <h2 className='font-sans font-bold text-[#72b626] text-[56px]'>10</h2>
                <h4 className='font-sans text-[#72b626] font-semibold text-[35px] '>+</h4>
              </div>
              <div className="relative before:absolute before:contents-[''] before:lg:top-[10px] before:top-[-3px] before:left-[-14px] before:w-[30px] before:h-[2px] before:bg-[#767676] ">
              <h3 className='text-[16px]  font-sans w-[150px] text-[#767676] font-medium px-8'>HAPPY CUSTOMER</h3>
              </div>
            </div>
           </div>
           </div>

           <div className="lg:w-[45%] w-[150px] mt-3 lg:mt-0">
           <div className="p-[20px]  border-2 border-[#72b626] rounded-xl duration-300 ease-in-out lg:hover:mt-[-5px] ">
            <div className="">
              <div className="flex">
                <h2 className='font-sans font-bold text-[#72b626] text-[56px]'>05</h2>
                <h4 className='font-sans text-[#72b626] font-semibold text-[35px] '>+</h4>
              </div>
              <div className="relative before:absolute before:contents-[''] before:lg:top-[10px] before:top-[-3px] before:left-[-14px] before:w-[30px] before:h-[2px] before:bg-[#767676] ">
              <h3 className='text-[16px]  font-sans w-[150px] text-[#767676] font-medium px-8'>AWARD WON</h3>
              </div>
            </div>
           </div>
           </div>

          </div>
          </div>

        </Flex>
        <div className="">
            <div className="relative after:absolute after:content-[''] after:h-[2px] lg:after:w-[500px] after:w-[200px] after:right-[50%] after:translate-x-[50%] after:bottom-[-100px] after:bg-[#767676]"></div>
          </div>
          <div className="">
            <h2 className='font-sans font-bold text-[50px] mt-[130px] text-center text-[#767676]'>My skills</h2>
          </div>

         <div className="lg:flex justify-around  ">
          <div className="lg:w-[45%] w-full mt-10">
            <div className="flex justify-between">
           
           <div className="lg:w-[45%] ">
           <div className=" relative  p-[20px]  border-[10px]  hover:border-[#72b626] rounded-[50%] h-[130px] w-[130px] duration-300 ease-in-out  items-center justify-center align-middle bg-[3.6deg]">
   
            <div className="">
              <h3 className='absoulate text-center py-[15px] text-[30px] text-[#767676]'>25%</h3>
            </div>
            </div>
            <span className=' absolute pl-10 pt-5   font-sans text-[18px] text-[#767676] '>HTML</span>
           </div>
          
            
           <div className="lg:w-[45%] ">
           <div className=" relative  p-[20px]  border-[10px]  hover:border-[#72b626] rounded-[50%] h-[130px] w-[130px] duration-300 ease-in-out">
            <div className="">
              <h3 className='absoulate text-center py-[15px] text-[30px] text-[#767676]'>90%</h3>
            </div>
            </div>
            <span className='absolute pl-5 pt-5   font-sans text-[18px] text-[#767676]'>JAVSSCRIPT</span>
           </div>

            </div>
            

          </div>
          <div className="lg:w-[45%] w-full mt-10 ">
          <div className="flex justify-between">
           
           <div className="lg:w-[45%]">
           <div className=" relative  p-[20px]  border-[10px]  hover:border-[#72b626] rounded-[50%] h-[130px] w-[130px] duration-300 ease-in-out">
            <div className="">
              <h3 className='absoulate text-center py-[15px] text-[30px] text-[#767676]'>95%</h3>
            </div>
            </div>
            <span className='absolute pl-12 pt-5 font-sans text-[18px] text-[#767676]'>CSS</span>
           </div>
          
            
           <div className="lg:w-[45%]">
           <div className=" relative  p-[20px]  border-[10px]  hover:border-[#72b626] rounded-[50%] h-[130px] w-[130px] duration-300 ease-in-out">
            <div className="">
              <h3 className='absoulate text-center py-[15px] text-[30px] text-[#767676]'>65%</h3>
            </div>
            </div>
            <span className=' absolute pl-11 pt-5  font-sans text-[18px] text-[#767676]  '>PHP</span>
           </div>

            </div>
          </div>
         </div>



         <div className="lg:flex justify-around ">
          <div className="lg:w-[45%] w-full mt-10">
            <div className="flex justify-between">
           
           <div className="lg:w-[45%] mt-10">
           <div className=" relative  p-[20px]  border-[10px]  hover:border-[#72b626] rounded-[50%] h-[130px] w-[130px] duration-300 ease-in-out">
            <div className="">
              <h3 className='absoulate text-center py-[15px] text-[30px] text-[#767676]'>90%</h3>
            </div>
            </div>
            <span className=' absolute pl-10 pt-5   font-sans text-[18px] text-[#767676]  '>REACT</span>
           </div>
          
            
           <div className="lg:w-[45%] mt-10">
           <div className=" relative  p-[20px]  border-[10px]  hover:border-[#72b626] rounded-[50%] h-[130px] w-[130px] duration-300 ease-in-out">
            <div className="">
              <h3 className='absoulate text-center py-[15px] text-[30px] text-[#767676]'>85%</h3>
            </div>
            </div>
            <span className=' absolute pl-8 pt-5   font-sans text-[18px] text-[#767676]  '>BOOTSTRAP</span>
           </div>

            </div>
            

          </div>
          <div className="lg:w-[45%] w-full mt-10  ">
          <div className="flex justify-between">
           
           <div className="lg:w-[45%] mt-10 ">
           <div className=" relative  p-[20px]  border-[10px]  hover:border-[#72b626] rounded-[50%] h-[130px] w-[130px] duration-300 ease-in-out">
            <div className="">
              <h3 className='absoulate text-center py-[15px] text-[30px] text-[#767676]'>20%</h3>
            </div>
            </div>
            <span className=' absolute pl-10 pt-5   font-sans text-[18px] text-[#767676]  '>NEXT.JS</span>
           </div>
          
            
           <div className="lg:w-[45%] mt-10">
           <div className=" relative  p-[20px]  border-[10px]  hover:border-[#72b626] rounded-[50%] h-[130px] w-[130px] duration-300 ease-in-out">
            <div className="">
              <h3 className='absoulate text-center py-[15px] text-[30px] text-[#767676]'>20%</h3>
            </div>
            </div>
            <span className=' absolute pl-8 pt-5   font-sans text-[18px] text-[#767676]  '>ANGULAR</span>
           </div>

            </div>
          </div>
         </div>

         


      </Container>
    </section>
  )
}

export default About