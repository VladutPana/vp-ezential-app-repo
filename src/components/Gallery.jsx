/* IMPORTS */

import Heading from "./Heading";
import { logos, galleryInfo } from "../constants";


const Gallery = () => {

    const [data1, data2, data3, data4, data5, data6] = galleryInfo;

  return (
    <div id="gallery">
      <div className="container lg:border lg:border-n-6 lg:shadow-[rgba(124,_62,_237,_0.1)_0px_0px_15px] ">
        <Heading title="It's for everyone !" text="This app is made for everyone to enjoy"/>

    <div className="relative">
        <div className="relative z-1 grid lg:grid-cols-3 lg:grid-rows-6 gap-7 mb-5 lg:mb-10 p-4 rounded-3xl overflow-hidden lg:p-10 xl:h-[46rem]">
            {/* 1st div */}
            <div className="relative min-h-[10rem] lg:col-span-1 lg:row-span-3 rounded-3xl overflow-hidden transition-all hover:scale-105 lg:hover:-translate-y-[2rem] lg:cursor-pointer">
                {/* border */}
                    <div className="rounded-3xl p-0.5 bg-conic-gradient h-full w-full"> 
                    <div className="rounded-3xl bg-black h-full w-full">
                {/* border */}
                <div className="absolute inset-0">
                    <img className="h-full w-full object-cover opacity-35" src={data1.bgImg}  alt="" />
                </div>
                <div className="absolute bottom-6 right-10 lg:top-10 lg:left-10">
                    <img src={data1.checkImg} width={50} height={50} alt="" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end">
                    <p className="text-n-1/60 mx-5 mb-5 lg:text-xl">  {data1.text}
                        <span className="font-bold text-n-1"> {data1.secondaryText}</span></p>
                    <div className="flex items-center ml-5 mb-5">
                        <div className="text-3xl">{data1.pricing}</div>
                        <div className="text-n-1/80 caption ml-2">{data1.thirdText} <br /> {data1.fourthText}</div>
                    </div>
                </div>

                </div>
                </div>
                

            </div>
                
            {/* 2nd div */}
            <div className="relative min-h-[10rem] lg:col-span-1 lg:row-span-2 rounded-3xl border border-n-6 overflow-hidden transition-all hover:scale-105 lg:cursor-pointer">
                <div className="absolute inset-0">
                    <img className="opacity-25 h-full w-full object-cover" src={data2.bgImg}  alt="" />
                </div>
                <div className="absolute top-[1rem] left-[1rem]">
                    <p className="text-n-1/60 mx-5 mb-5 mt-2 text-md"> {data2.text} <br />
                        <span className="font-bold text-n-1"> {data2.secondaryText} </span></p>
                </div>
                <div className="absolute top-[3rem] lg:top-[5rem] left-[2.5rem]">
                    <ul className="flex gap-10">
                        {logos.map((logo, index) => (
                            <li className="flex items-center justify-center flex-1 h-[8.5rem]" key={index}>
                                <img className="w-[2.3rem] lg:w-[2.8rem]" src={logo} alt="logo" />
                            </li>
                            ))}
                    </ul>
                </div>
            </div>

           {/* 3rd div */}                 
            <div className="relative min-h-[10rem] lg:col-span-1 lg:row-span-4 rounded-3xl flex flex-col items-center justify-center border border-n-6 overflow-hidden transition-all hover:scale-105 lg:hover:-translate-y-[2rem] lg:cursor-pointer lg:shadow-[0_5px_50px_rgba(124,_62,_237,_0.1)]">
                <div className="absolute inset-0">
                    <img className="opacity-25 h-full w-full object-cover" src={data3.bgImg}  alt="" />
                </div>       
                <img className="mb-5 mr-2" width={40} height={40} src={data3.checkImg} alt="" />
                <div className="z-2 font-bold text-n-1"> {data3.text} </div>
                <div className="z-2 text-n-1/60 text-md lg:mb-2"> {data3.secondaryText} </div>
            </div>

           {/* 4th div */}                 
            <div className="relative min-h-[10rem] lg:min-h-[5rem] col-span-1 row-span-1 rounded-3xl bg-gradient-to-br from-customTeal to-customPurple flex items-center justify-start transition-all hover:scale-105 lg:cursor-pointer">
                <img className="ml-5" src={data4.checkImg} width={50} height={50} alt="check" />
                <p className="ml-5 font-code text-xl text-n-1/60">{data4.text} <br/>
                     <span className="font-bold text-n-1">{data4.secondaryText}</span></p>
            </div>

            {/* 5th div */}
            <div className="relative min-h-[10rem] lg:col-span-2 lg:row-span-3 rounded-3xl border border-n-6 transition-all hover:scale-105 lg:cursor-pointer">
                <div className="absolute inset-0 lg:h-[70%]">
                    <img className="h-full w-full object-cover opacity-25" src={data5.bgImg} alt="" />
                </div>
                <div className="absolute flex items-end justify-start h-full w-full mx-5" >
                    <div className="relative flex items-center justify-center mb-12 lg:mb-5">
                        <img src={data5.checkImg} width={30} height={30} alt="" />
                        <div className="font-bold lg:text-5xl text-n-1 p-2 mr-5">{data5.text}</div>
                        <div className="text-n-1/60 lg:text-xl">{data5.secondaryText}</div>   
                        <div className="hidden lg:block font-bold text-n-1 lg:text-2xl md:pl-[5rem] lg:pl-[10rem]">{data5.thirdText}</div>
                    </div>
                </div>
            </div>

            {/* 6th div */}
            <div className="relative min-h-[10rem] lg:col-span-1 lg:row-span-2 overflow-hidden border border-n-6 rounded-3xl bg-gradient-to-br from-slate-800/40 to-black transition-all hover:scale-105 lg:hover:translate-x-[2rem] lg:cursor-pointer ">
                    <img className="absolute top-5 left-5" src={data6.checkImg} width={50} height={50} alt="" />
                    <p className="absolute bottom-5 left-5 text-n-1/60 lg:text-lg"> {data6.text} <br />
                        <span className="font-bold text-n-1"> {data6.secondaryText}</span></p>
                </div>
                </div>
            </div>

    </div>
        </div>

  )
}

export default Gallery;
