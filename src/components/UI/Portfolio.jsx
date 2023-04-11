import React, { useState } from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";

const Portfolio = () => {
    const [showModal,setShowModal]=useState(false);
    const [activeId,setActiveId]=useState(null);

    const showModalHandler=(id)=>{
        setShowModal(true);
        setActiveId(id);
    }

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700]">
              My Projects
            </h3>
          </div>

          <div className="flex items-center gap-4 flex-wrap mt-12">
            {data?.map((portfolio, index) => (
              <div data-aos='fade-zoom-in' data-aos-delay='50' data-aos-durration='1000' className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.3%] relative z-[1]">
                <figure>
                  <img
                    className="rounded-[8px]"
                    src={portfolio.imgUrl}
                    alt=""
                  />
                </figure>
                <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                  <div className="w-full h-full flex items-center justify-center">
                  <button onClick={()=>showModalHandler(portfolio.id)} className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200">See Details</button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {
        showModal && <Modal setShowModal={setShowModal} activeId={activeId}/>
      }
    </section>
  );
};

export default Portfolio;
