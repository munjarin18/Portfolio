import React from "react";
import Container from "./Container";
import Orebi from "../assets/Orebi.png";
import Flex from "./Flex";
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >next</div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      prev
    </div>
  );
}

const Protfolio = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <section className="py-[30px]  ">
        <Container>
          <div className="">
            <h2 className="font-sans font-extrabold lg:text-[110px] text-center text-[70px] opacity-15 ">
              WORKS
            </h2>
            <h3 className="font-sans text-center font-extrabold lg:text-[50px] text-[30px] lg:mt-[-120px] mt-[-79px] text-[#343a40]">
              MY <span className="text-[#72b626]">PORTFOLIO</span>
            </h3>
          </div>

          <slider {...settings}>
            <div className=" flex justify-between space-x-3 py-10">
              <div className="">
                <a
                  className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] after:w-[100%] after:bg-[#72b626] after:opacity-90 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]'
                  href="#"
                >
                  <img className=" rounded-2xl" src={Orebi} alt="" />{" "}
                  <h2 className=" absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[10%] pl-[20%] z-20 opacity-0 hover:opacity-100 text-[#fff] lg:text-[36px] text-[28px] font-serif font-semibold ">
                    E-Commerce <h3 className=" text-[#000]">Website </h3>
                  </h2>
                </a>
              </div>

              <div className="">
                <a
                  className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] after:w-[100%] after:bg-[#72b626] after:opacity-90 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]'
                  href="#"
                >
                  <img className=" rounded-2xl" src={Orebi} alt="" />{" "}
                  <h2 className=" absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[10%] pl-[20%] z-20 opacity-0 hover:opacity-100 text-[#fff] lg:text-[36px] text-[28px] font-serif font-semibold ">
                    E-Commerce <h3 className=" text-[#000]">Website </h3>
                  </h2>
                </a>
              </div>

              <div className="">
                <a
                  className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] after:w-[100%] after:bg-[#72b626] after:opacity-90 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]'
                  href="#"
                >
                  <img className=" rounded-2xl" src={Orebi} alt="" />{" "}
                  <h2 className=" absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[10%] pl-[20%] z-20 opacity-0 hover:opacity-100 text-[#fff] lg:text-[36px] text-[28px] font-serif font-semibold ">
                    E-Commerce <h3 className=" text-[#000]">Website </h3>
                  </h2>
                </a>
              </div>

              <div className="">
                <a
                  className=' relative  after:absolute after:contain-[""] after:top-0 after:left-0 after:h-[0] after:w-[100%] after:bg-[#72b626] after:opacity-90 after:duration-300 after:ease-in-out after:rounded-2xl after:hover:h-[100%]'
                  href="#"
                >
                  <img className=" rounded-2xl" src={Orebi} alt="" />{" "}
                  <h2 className=" absolute top-[0] left-[0] h-[100%] w-[100%] duration-300 ease-in-out pt-[10%] pl-[20%] z-20 opacity-0 hover:opacity-100 text-[#fff] lg:text-[36px] text-[28px] font-serif font-semibold ">
                    E-Commerce <h3 className=" text-[#000]">Website </h3>
                  </h2>
                </a>
              </div>
            </div>
          </slider>
        </Container>
      </section>
    </>
  );
};

export default Protfolio;
