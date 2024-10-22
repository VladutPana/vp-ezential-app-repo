/* IMPORTS */

import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from '../assets/svg/MenuSvg';
import { useState } from "react";
import { zen } from "../assets";


const Navbar = () => {

    const [hoveredItem, setHoveredItem] = useState(null);
    const [openNavigation, setopenNavigation] = useState(false);
    const toggleNavigation = () => {
        if(openNavigation){
            setopenNavigation(false);
        } else{
            setopenNavigation(true);
        }
    };

    const handleClick = () =>{
        setopenNavigation(false); // automatic closing button
    };

  return (
    <div className={`fixed w-full top-0 left-0 z-50 border-b border-n-6 lg:bg-n-99/90 ${openNavigation ? 'bg-n-99' : 'bg-n-99/90'} lg:shadow-[rgba(124,_62,_237,_0.1)_0px_0px_15px]`}>
            {/* left div */}
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <a className="flex items-center xl:mr-[2.5rem]" href='#main'>
                <img src={zen} width={25} height={25}  alt="logo" />
                <p className="font-code text-xl ml-2 transition-colors hover:text-color-1 ">Ezential.app</p>
            </a>
            {/* center div */}
            <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-0 left-0 right-0 bottom-0 bg-n-99 lg:static lg:flex lg:mx-auto lg:bg-transparent `}>
                <div className="relative z-2 flex flex-col items-center m-auto justify-center lg:flex-row">
                    {navigation.map((item) => (
                        <a key={item.id}
                         href={item.url}
                         onClick={handleClick}
                         onMouseEnter={() => setHoveredItem(item.id)}
                         onMouseLeave={() => setHoveredItem(null)}
                         className={`flex items-center justify-center text-center relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? 'lg:hidden' : ''} px-6 py-6 md:py-8 lg:text-sm lg:font-semibold xl:px-12 lg:w-[10rem] lg:h-[6rem] lg:hover:text-3xl`}>
                            {hoveredItem === item.id ? item.kanji : item.title} 
                        </a>
                    ))}
                </div>     
            </nav>
            {/* right divs */}  
              <a href="#signup" className="button hidden mr-8 text-n-1 transition-colors hover:text-color-1 lg:flex"> New account</a>
              <Button className="hidden lg:flex" href="#login">
                    Sign in
              </Button>
            {/* mobile menu */}
              <Button className="ml-auto px-3 lg:hidden" onClick={toggleNavigation} >
                <MenuSvg openNavigation={openNavigation}/>
              </Button>

        </div>
    </div>
  )
}

export default Navbar;
