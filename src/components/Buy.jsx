/* IMPORTS */

import Heading from "./Heading";
import { pricing } from "../constants";
import Button from "./Button";
import { check } from "../assets";

const Buy = () => {
  return (
    <div className="overflow-hidden" id='pricing'>
      <div className="container relative z-2 lg:border lg:border-n-6 lg:shadow-[rgba(124,_62,_237,_0.1)_0px_0px_15px]">
            <Heading title="Ready to change your future ?" text="Get started right here right now"/>

        <div className="relative">
            <div className="flex items-center justify-center gap-[1rem] max-lg:flex-wrap ">
                {pricing.map((item) => (
                    <div key={item.id} className={`w-[19rem] max-lg:w-full lg:w-full h-full px-6 border border-n-6 rounded-[2rem] even:py-14 odd:py-8 odd:my-4 ${item.colorful ? 'bg-gray-950' : 'bg-slate-900'}`}
                     >
                        <div className="flex flex-col items-center">
                            <h4 className={`h4 mb-4 ${item.first ? 'text-slate-50' : ''} ${item.second? 'text-purple-700' : ''} ${item.third ? 'text-rose-600' : ''}`}>
                                {item.title}
                            </h4>
                            <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">{item.description}</p>
                        </div>
                        <div className="flex items-center justify-center h-[5.5rem] mb-6">
                            {item.price && (
                                <>
                                <div className="text-[5.5rem] leading-none font-bold">{item.price}</div>
                                <div className="h3">€</div>
                                </>
                            )}
                        </div>
                            <Button className="w-full mb-6" href=''>
                                {item.price ? 'Get started' : 'Contact us'}
                            </Button>
                                <ul>
                                    {item.features.map((feature,index) => (
                                        <li className="flex items-center py-5" key={index}>
                                            <img src={check} width={24} height={24} alt="check" />
                                            <p className="body-2 ml-4">{feature}</p>
                                        </li>   
                                    ))}
                                </ul>
                    </div>
                ))}
            </div>
        </div>

                <div className="flex justify-center mt-15 mb-15">
                    <a className="text-xs font-code font-bold uppercase tracking-wider border-b" href='#main' >See the full details</a>
                </div>

    </div>
    </div>
  )
}

export default Buy;
