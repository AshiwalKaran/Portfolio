import React from "react";
import frontendImg from '../../assets/images/front-end.png'
import backendImg from '../../assets/images/backend.png'
import uiImg from '../../assets/images/design.png'
import appsImg from '../../assets/images/apps.png'

const ExperienceAndEducation = () => {
  return (
    <section id="experienceAndEducation">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            Experince and Eduation
          </h2>
          {/* <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi,
            repellat error quae eligendi, debitis sequi facere eius nesciunt
            omnis explicabo temporibus quidem molestiae consequatur cupiditate
            laudantium quis cumque.
          </p> */}
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* --------vertical line running through the middle----- */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>
              {/* --------left card---------- */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center ">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">Web Developer</h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]
                        leading-7">
                          Currently working as a web developer at Web creaters.
                          Involved in the frontend and backend development of the projects.<br/>
                          Duration: Apr 2022 - Present
                        </p>
                      </div>
                    </div>
                  </div>

                <div className="rounded-full bg-primaryColor border-white border-4  w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                <figure>
                    <img src={frontendImg} alt='frontEnd'/>
                </figure>

                </div>

                </div>
              </div>
              {/* ------right card---------- */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center ">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1300"
                        data-aos-delay='50'
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">Software Development Intern</h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]
                        leading-7">
                          Software development intern at Earnhance.
                          <br/>
                          Duration:Oct 2021-Jan 2022
                        </p>
                      </div>
                    </div>
                  </div>

                <div className="rounded-full bg-primaryColor border-white border-4  w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                <figure>
                    <img src={backendImg} alt='frontEnd'/>
                </figure>

                </div>

                </div>
              </div>
              {/* --------left card---------- */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center ">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-delay='100'
                        data-aos-duration="1400"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">In-House Intern </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]
                        leading-7">
                          In-House Intern at Delhi Technological University.
                          <br/>
                          Duration:Jun 2020 -Jul 2020
                        </p>
                      </div>
                    </div>
                  </div>

                <div className="rounded-full bg-primaryColor border-white border-4  w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                <figure>
                    <img src={uiImg} alt='frontEnd'/>
                </figure>

                </div>

                </div>
              </div>
              {/* ------right card---------- */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center ">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">B.Tech From Delhi Technological University</h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500]
                        leading-7">
                          B.Tech in Computer Science from Delhi Technological University.
                          <br/>
                          Duration:2017 - 2021
                        </p>
                      </div>
                    </div>
                  </div>

                <div className="rounded-full bg-primaryColor border-white border-4  w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                <figure>
                    <img src={appsImg} alt='frontEnd'/>
                </figure>

                </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default ExperienceAndEducation;
