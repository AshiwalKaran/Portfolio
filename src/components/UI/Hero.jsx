import React from "react";
import heroImg from "../../assets/images/hero.svg";
import profile from "../../assets/images/profile.png"
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pr-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* ------------hero left content----------- */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="texxt-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Karan Ashiwal <br />
              A Programmer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact ">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i className="ri-mail-line">Contact</i>
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smalltextColor"
              >
                See Portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i className="ri-apps-2-line"></i>
              </span>
              Hello there! I am a B.Tech graduate in Computer Science from Delhi Technological University .I am a quick learner and good at problem solving skills.I am a coding enthusiast and also develop cool websites. Want to secure a challenging position where I can effectively contribute my skills, and innovative ideas to gain knowledge in the work oriented environment.
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow me:
              </span>
              <span className="text-smallTextColor text-[18px] font-[600]">
                <a
                  target="_blank"
                  href="https://github.com/AshiwalKaran"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-github-line"></i>
                </a>
              </span>
              <span className="text-smallTextColor text-[18px] font-[600]">
                <a
                  href="#linkedin"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
              <span className="text-smallTextColor text-[18px] font-[600]">
                <a
                  href="#gmail"
                  className="text-smallTextColor text-[18px] font-[600]"
                >
                  <i className="ri-mail-line"></i>
                </a>
              </span>
            </div>
          </div>
          {/* -------------------hero left end------------ */}
          {/* ----------hero img------------- */}
          {/* ------------hero img end------------ */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={profile} alt="HeroImg" />
            </figure>
          </div>
          {/* ---------hero end-------------- */}
          {/* -------------hero content right---------- */}
          {/* <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-[700] text-[18px]">
                Success Rate
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={150} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[700] text-[18px]">
                Happy Clients
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={249} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[700] text-[18px]">
                Years of Experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={1} duration={6} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[700] text-[18px]">
                Projects Completed
              </h4>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
