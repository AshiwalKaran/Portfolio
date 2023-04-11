import React,{useRef,useEffect} from "react";

const Header = () => {

  const headerRef=useRef(null);

  const menuRef=useRef(null);

  const stickyHeaderFunc=()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
        headerRef.current.classList.add('sticky_header');
      }
      else{
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }
  useEffect(()=>{
    stickyHeaderFunc();

    return window.removeEventListener('scroll',stickyHeaderFunc);

  },[]);

  const handleClick=(e)=>{
    e.preventDefault();

    const targetAttr=e.target.getAttribute('href');
    const location=document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top:location-80,
      left:0
    })
  }

  const toggleMenu=()=>menuRef.current.classList.toggle('show_menu');

  return (
    <header ref={headerRef} className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* --------------LOGO---------------- */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              KA
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">
                Karan Ashiwal
              </h2>
              <p className="text-smallTextColor text-p[14px] font-[500]">
               Portfolio
              </p>
            </div>
          </div>
          {/* -----------------logo end---------------- */}
          {/* -----------------menu start------------------- */}
          <div className="menu" ref={menuRef} onClick={toggleMenu} >
            <ul className="flex items-center gap-10">
              <li>
                <a onClick={handleClick} className="text-smallTextColor font-[600]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a onClick={handleClick} className="text-smallTextColor font-[600]" href="#experienceAndEducation">
                  Experience And Education
                </a>
              </li>
              <li>
                <a onClick={handleClick} className="text-smallTextColor font-[600]" href="#portfolio">
                  Projects
                </a>
              </li>
              <li>
                <a onClick={handleClick} className="text-smallTextColor font-[600]" href="#technologies">
                  Technologies
                </a>
              </li>
              <li>
                <a onClick={handleClick} className="text-smallTextColor font-[600]" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* ------------------menu end------------------ */}
          {/* ----------------------menu right------------------ */}
          <div className="flex items-center gap-4">
          <a target="_blank" href="https://drive.google.com/file/d/1wm8YFsGMO_bHRcUDffMW3r_-KwEyLRoJ/view?usp=share_link">
            <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300">
              <i className="ri-send-plane-line"></i>Resume
            </button>
            </a>
            <span onClick={toggleMenu} className="text-2xl text-smallTextColor md:hidden cursor-pointer">
              <i className="ri-menu-line"></i>
            </span>
          </div>
          {/* -------------menu end--------------------- */}
        </div>
      </div>
    </header>
  );
};

export default Header;
