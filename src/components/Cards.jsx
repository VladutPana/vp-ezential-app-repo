/* IMPORTS */

import { benefits } from "../constants";
import Heading from "./Heading";
import card from '../assets/benefits/card.svg';

const Cards = () => {
  return (
    <div id="features">
      <div className="container relative z-2 lg:border lg:border-n-6 lg:shadow-[rgba(124,_62,_237,_0.1)_0px_0px_15px]">
        <Heading className="md:max-w-md lg:max-w-2xl" title='Here is why you should choose us' />
        <div className="flex flex-wrap gap-10 mb-10">
            {benefits.map((item) => (
            <div className="block relative pb-4 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] lg:hover:scale-105 lg:transition-all" style ={{backgroundImage: `url(${card})`}} key = {item.id}> 
                    <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] cursor-pointer ">
                        <h5 className="h5 mb-5">{item.title}</h5>
                        <p className="body-2 mb-6 text-n-3">{item.text}</p>
                        <div className="flex items-center mt-auto">
                            <img className="opacity-50" src={item.iconUrl} alt={item.title} width={48} height={48}/>
                            <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase"> Explore {`->`} </p>
                        </div>
                    </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Cards;