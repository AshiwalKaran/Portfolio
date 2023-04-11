import React from "react";
import nodejs from "../../assets/images/nodejs.png";
import html from "../../assets/images/html-5.png";
import css from "../../assets/images/css-3.png";
import javascript from "../../assets/images/js.png";
import reactImg from "../../assets/images/react.png";
import github from "../../assets/images/github.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImg,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: nodejs,
      title: "NodeJs",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      src: github,
      title: "Github",
      style: "shadow-gray-500",
    },
  ];

  return (
    <div id="technologies" className="container">
      <div className="flex items-center justify-between flex-wrap">
        <div className="mb-7 sm:mb-0">
          <h3 className="text-headingColor text-[2rem] font-[700]">
            Technologies
          </h3>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-12">
          {techs?.map(({ id, src, title, style }) => (
            <div
            key={id}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-durration="1000"
              className="group  relative z-[1]"
            >
              <figure>
                <img className={`rounded-[8px] ${style}`} src={src} alt={title} />
                
              </figure>
              <div className=" w-full h-full bg-black/80 bg-opacity-100 rounded absolute top-0 left-0 z-[5] hidden group-hover:block">
              <p className="flex justify-center items-center   text-white py-2 px-4 rounded-[8px] font-[500] ease-in duration-200">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
