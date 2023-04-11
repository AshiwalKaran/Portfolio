import React from "react";

const Footer = () => {
  const curDate = Date.now();
  const dt = new Date(curDate);
  const year = dt.getFullYear();

  return (
    <footer className="bg-[#12141e]">
      {/* ---------footer top------------- */}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-20 ">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] md-5 md:text-[2rem] ">
              Let's get Connect
            </h2>
            {/* <a href="#contact ">
              <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                <i className="ri-mail-line"> Hire Me</i>
              </button>
            </a> */}
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px] ">
                Follow Me:
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center ">
                <a
                  target="_blank"
                  href="https://github.com/AshiwalKaran"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i className="ri-github-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center ">
                <a
                  href="#linkedin"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center ">
                <a
                  href="#mail"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i className="ri-mail-line"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] md-5 md:text-[2rem] ">
              Have a Question?
            </h2>
            <div className="flex flex-col gap-4 flex-wrap md:gap-8 mt-10">
              <div className="flex items-center gap-4">
                <i class="ri-phone-line text-gray-300 font-[500] text-[18px]"></i>
                <p className="text-gray-300 font-[500] text-[18px]">
                  1234567891
                </p>
              </div>
              <div className="flex items-center gap-4">
                <i class="ri-map-pin-line text-gray-300 font-[500] text-[18px]"></i>
                <p className="text-gray-300 font-[500] text-[18px]">
                  Peera Garhi, New Delhi-110087
                </p>
              </div>
              <div className="flex items-center gap-4">
                <i class="ri-mail-line text-gray-300 font-[500] text-[18px]"></i>
                <p className="text-gray-300 font-[500] text-[18px]">
                  xyz@gmail.com
                </p>
              </div>
            </div>

            {/* <a href="#contact ">
              <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                <i className="ri-mail-line"> Hire Me</i>
              </button>
            </a> */}
          </div>
        </div>
      </div>
      {/* -----------footer top end------------- */}
      {/* --------------------footer bottom --------------- */}
      <div className="bg-[#1b1e29] py-2 mt-14 ">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-center">
            {/* <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
              <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center  ">KA
              </span>
              <div className='leading-[20px]'>
              <h2 className="text-gray-200 font-[500] text-[18px] ">
              Karan Ashiwal
              </h2>
              <p className="text-gray-400 text-[14px] font-[500] ">
                  Personal Portfolio
              </p>

              </div>

              </div>
            </div> */}
            <div>
              <p className="text-gray-400 font-[500] text-[14px]">
                Copyright &#169; {year} developed by Karan Ashiwal- All right
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* --------------footer bottom end------------- */}
    </footer>
  );
};

export default Footer;
