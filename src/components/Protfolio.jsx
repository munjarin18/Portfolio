import React from "react";
import Container from "./Container";
import Orebi from "../assets/Orebi.jpg";
import Travel from "../assets/Travel.jpg"
import Hekto from "../assets/Hekto.jpg"
import Finsweet from "../assets/first.jpg"
import Coco from "../assets/Coco.jpg"
import Flex from "./Flex";
import Slider from "react-slick";
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";



function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="h-[50px] w-[50px] bg-[#72b626] rounded-full text-center leading-[50px] text-[25px] text-white absolute top-[50%] right-0  z-50 font-extrabold translate-y-[-40%]" >
   < GoChevronRight className="inline-block " />
    </div>
  );
}
function SamplePrevArrow(props) {
  const {  onClick } = props;
  return (
    <div onClick={onClick} className="h-[50px] w-[50px] bg-[#72b626] rounded-full text-center leading-[50px] text-[25px] text-white absolute top-[50%] left-0 z-50 font-extrabold translate-y-[-40%]" >
   <GoChevronLeft className="inline-block " />
    </div>
  );
}

const Protfolio = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  

    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      
    ]

   
  };

  return (
    <>
      <section className="py-[30px]  bg-[#FFF9E3]  animate-slide-in">
        <Container>
          <div className="py-20 lg:py-10">
            <h2 className="font-sans font-extrabold lg:text-[110px] text-center text-[70px] opacity-15 ">
              WORKS
            </h2>
            <h3 className="font-sans text-center font-extrabold lg:text-[50px] text-[30px] lg:mt-[-120px] mt-[-79px] text-[#343a40]">
              MY <span className="text-[#72b626]">PORTFOLIO</span>
            </h3>
          </div>

          <Slider className="pt-10 px-[30px] w-full" {...settings}>
         
              <div className="">
                <a
                  className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] after:w-[100%] after:bg-[#72b626] after:opacity-90 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]'
                  href="https://e-commerce-orebi.vercel.app/"
                >
                  <img className="rounded-2xl" src={Orebi} alt="" />{" "}
                  <h2 className=" absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[10%] pl-[20%] z-20 opacity-0 hover:opacity-100 text-[#fff] lg:text-[36px] text-[28px] font-serif font-semibold ">
                    OREBI <h3 className=" text-[#000]">Website </h3>
                  </h2>
                </a>
              </div>

              
              <div className="">
                <a
                  className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] after:w-[100%] after:bg-[#72b626] after:opacity-90 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]'
                  href="https://nepal-website-rho.vercel.app/"
                >
                  <img className=" rounded-2xl" src={Travel} alt="" />{" "}
                  <h2 className=" absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[10%] pl-[20%] z-20 opacity-0 hover:opacity-100 text-[#fff] lg:text-[36px] text-[28px] font-serif font-semibold ">
                    TRAVEL <h3 className=" text-[#000]">Website</h3>
                  </h2>
                </a>
              </div>

              <div className="">
                <a
                  className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] after:w-[100%] after:bg-[#72b626] after:opacity-90 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]'
                  href="https://coco-delta-two.vercel.app/"
                >
                  <img className=" rounded-2xl" src={Coco} alt="" />{" "}
                  <h2 className=" absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[10%] pl-[20%] z-20 opacity-0 hover:opacity-100 text-[#fff] lg:text-[36px] text-[28px] font-serif font-semibold ">
                    COCO SHOP<h3 className=" text-[#000]">Website</h3>
                  </h2>
                </a>
              </div>


              <div className="">
                <a
                  className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] after:w-[100%] after:bg-[#72b626] after:opacity-90 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]'
                  href="https://hekto-e-commerce-bice.vercel.app/"
                >
                  <img className=" rounded-2xl" src={Hekto} alt="" />{" "}
                  <h2 className=" absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[10%] pl-[20%] z-20 opacity-0 hover:opacity-100 text-[#fff] lg:text-[36px] text-[28px] font-serif font-semibold ">
                    HEKTO  <h3 className=" text-[#000]">Website </h3>
                  </h2>
                </a>
              </div>

              <div className="">
                <a
                  className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] after:w-[100%] after:bg-[#72b626] after:opacity-90 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]'
                  href="https://first-ruby-zeta.vercel.app/"
                >
                  <img className=" rounded-2xl" src={Finsweet} alt="" />{" "}
                  <h2 className=" absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[10%] pl-[20%] z-20 opacity-0 hover:opacity-100 text-[#fff] lg:text-[36px] text-[28px] font-serif font-semibold ">
                     FINSWEET <h3 className=" text-[#000]">Website </h3>
                  </h2>
                </a>
              </div>


              
             
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default Protfolio;
