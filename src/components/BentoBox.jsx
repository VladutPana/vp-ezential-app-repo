/* IMPORTS */

import { check, breakfast, diet, energizer } from "../assets";
import { bentoBoxText } from "../constants";
import { Gradient } from "./Gradient";
import Heading from "./Heading";

const BentoBox = () => {
  return (
    <div id="what's-new">
      <div className="container lg:border lg:border-n-6 lg:shadow-[rgba(124,_62,_237,_0.1)_0px_0px_15px]">
        <Heading title="What you are missing out on" text="Check out this extended preview of our app"/>

    <div className="relative">
            <Gradient />
            {/* first div flexed*/}
        <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto ">
                <img className="w-full my-[10rem] md:my-0 lg:w-[75%] h-full md:object-right" width={600} height={530} src={breakfast} alt="breakfast" />
            </div>

            <div className="absolute top-[5%] left-[25%] md:top-[10%] right-[5%] z-1 max-w-[17rem] ml-auto ">
                <h4 className="h4 mb-4"> Healthier meals </h4>
                <p className="body-2 mb-[3rem] text-n-3">You'll get meal preps and recipes based on your favorite foods !</p>
                <ul className="body-2">
                    {bentoBoxText.map((item, index) => (
                        <li className="flex items-start py-4 border-b border-n-6" key={index}>
                            <img width={24} height={24} src={check} alt="check" />
                            <p className="ml-4">{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        <div className="relative z-1 grid gap-5 lg:grid-cols-2 mb-5">
            {/* second div / first in grid */}
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                    <div className="absolute top-[15%] md:top-0">
                        <img src={diet} className="h-full w-full" alt="diet" height={750} width={630}/>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/30 lg:p-15">
                <h4 className="h4 mb-4"> A structured plan </h4>
                <p className="body-2 mb-[3rem] text-n-3">Our experts will give you a structured plan to follow based on your circumstances !</p>
                </div>
            </div>
            {/* third div / second in grid */}
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                    <div className="absolute inset-0">
                        <img src={energizer} className="h-full w-full" alt="energizer" height={750} width={630}/>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/50 lg:p-15">
                <h4 className="h4 mb-4"> Hydration is key </h4>
                <p className="body-2 mb-[3rem] text-n-3">We'll notify you so you don't have to worry about not being hydrated !</p>
                </div>
            </div>
            
        </div>
    </div>
      </div>
    </div>
  )
}

export default BentoBox;
