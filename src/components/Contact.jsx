import React from "react";
import Container from "./Container";
import { IoIosMailOpen } from "react-icons/io";
import { MdWifiCalling3 } from "react-icons/md";
import { FaHome, FaFacebookSquare, FaLinkedin, FaGithubSquare, FaInstagramSquare, FaTwitter,} from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <section className=" lg:py-20 py-10 px-3">
        <Container>
          <div className="">
            <h2 className="font-sans font-extrabold lg:text-[120px] text-center lg:pt-0 pt-[45px] text-[70px] opacity-15 ">
              CONTACT
            </h2>
            <h3 className="font-sans text-center font-extrabold lg:text-[57px] text-[30px] lg:mt-[-135px] mt-[-75px] text-[#343a40]">
              GET IN <span className="text-[#72b626]">TOUCH !</span>
            </h3>
          </div>

          <div className=" lg:flex justify-between mt-16">
            <div className="lg:w-[35%] w-full">
              <div className="">
                <h2 className="text-[#525151] font-bold text-[36px]">
                  DON'T BE SHY !
                </h2>
                <p className="text-[#767676] font-semibold text-[20px] mt-3">
                  Feel free to get in touch with me. I am always open to
                  discussing new projects, creative ideas or opportunities to be
                  part of your visions.
                </p>
              </div>
              <div className="flex mt-11 space-x-3 items-center">
                <div className="">
                  <IoIosMailOpen className="text-[45px] text-[#72b626]" />
                </div>
                <div className="">
                  <h2 className="text-[#767676] font-medium text-[18px]">
                    MAIL ME
                  </h2>
                  <h3 className="text-[#444] font-semibold text-[16px]">
                    aktermunjarin@gmail.com
                  </h3>
                </div>
              </div>

              <div className="flex mt-8 space-x-3 items-center">
                <div className="">
                  <MdWifiCalling3 className="text-[45px] text-[#72b626]" />
                </div>
                <div className="">
                  <h2 className="text-[#767676] font-medium text-[18px]">
                    CALL ME
                  </h2>
                  <h3 className="text-[#444] font-semibold text-[16px]">
                    +8801870305524
                  </h3>
                </div>
              </div>

              <div className="flex lg:space-x-3 space-x-3 pt-[30px]  ">
                <a
                  className="h-[42px] w-[42px] bg-[#eee] rounded-[50%] text-[18px] text-[#666] items-center  duration-300 hover:bg-[#72b626] hover:text-[#fff] ease-in-out  p-[12px]"
                  href="https://www.facebook.com/munjarin.aowasti18/"
                  target="blank"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  className="h-[42px] w-[42px] bg-[#eee] rounded-[50%] text-[18px] text-[#666] items-center  duration-300 hover:bg-[#72b626] hover:text-[#fff] ease-in-out  p-[12px]"
                  href="https://www.linkedin.com/in/munjarin-akter-5b13a220b/"
                  target="blank"
                >
                  <FaLinkedin />
                </a>

                <a
                  className="h-[42px] w-[42px] bg-[#eee] rounded-[50%] text-[18px] text-[#666] items-center  duration-300 hover:bg-[#72b626] hover:text-[#fff] ease-in-out  p-[12px]"
                  href="#"
                  target="blank"
                >
                  <FaGithubSquare />
                </a>

                <a
                  className="h-[42px] w-[42px] bg-[#eee] rounded-[50%] text-[18px] text-[#666] items-center  duration-300 hover:bg-[#72b626] hover:text-[#fff] ease-in-out  p-[12px]"
                  target="blank"
                >
                  <FaInstagramSquare />
                </a>
              </div>
            </div>

            <div className="lg:w-[65%] w-full pl-3">
              <form action="">
                <div className="lg:flex justify-between pl-3 mt-5">
                  <div className="lg:w-[32%] w-full">
                    <input
                      className="h-[50px] w-full text-[14px] border-2 border-[#72b626] rounded-3xl pl-8 lg:mt-0 mt-2"
                      type="text"
                      placeholder="YOUR NAME"
                    />
                  </div>
                  <div className="lg:w-[32%] w-full">
                    <input
                      className="h-[50px] w-full text-[14px] border-2 border-[#72b626] rounded-3xl pl-8 lg:mt-0 mt-2"
                      type="text"
                      placeholder="YOUR EMAIL"
                    />
                  </div>
                  <div className="lg:w-[32%] w-full">
                    <input
                      className="h-[50px] w-full text-[14px] border-2 border-[#72b626] rounded-3xl pl-8 lg:mt-0 mt-2"
                      type="text"
                      placeholder="YOUR SUBJECT"
                    />
                  </div>
                </div>

                <div className="w-full px-3  mt-5">
                  <label
                    for=""
                    className="text-[#666] font-semibold text-[18px]"
                  >
                    Your Messege :
                  </label>
                  <textarea className="w-full h-48 border-2 border-[#72b626] resize-none rounded-3xl pl-2 pt-2  "></textarea>
                </div>
              </form>

              <div className=" relative flex justify-between lg:w-[30%] w-[70%] h-12 items-center py-4  mt-5 px-3 border-2 border-[#72b626] rounded-full cursor-pointer duration-300 ease-in-out text-[#767676]  hover:text-white before:absolute before:content-[''] before:top-0 before:right-0 before:h-full before:w-[25%] before:rounded-full before:bg-[#72b626] before:duration-300 before:ease-in-out before:hover:w-full ">
                <span className="font-sans text-[16px] font-medium mr-2  z-50  ">
               SEND MESSAGE
                </span>

                <BsFillSendFill className="text-[25px] z-50 text-[#fff]  " />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
