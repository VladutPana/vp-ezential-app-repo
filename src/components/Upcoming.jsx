/* IMPORTS */

import { upcoming } from "../constants";
import Heading from "./Heading";
import Button from "./Button";
import { Gradient } from "./Gradient";


const Upcoming = () => {
  return (
    <div className="overflow-hidden" id='upcoming'>
      <div className="container md:pb-10 lg:border lg:border-n-6 lg:shadow-[rgba(124,_62,_237,_0.1)_0px_0px_15px]">
          <Heading
            title="Looking into the future"
            text='What we are focused on next and what is to come' />  

            <div className="relative grid gap-6 md:grid-cols-2 md:gap-10 md:pb-[7rem]">
              <Gradient />
              <Gradient />
                {upcoming.map((item) => (
                    <div key={item.id} className={`md:flex odd:md:translate-y-[7rem] p-1 rounded-[2.5rem] lg:hover:scale-105 lg:hover:cursor-pointer lg:transition-all ${item.colorful ? 'bg-conic-gradient' : 'bg-n-6'}`}>
                        <div className="relative p-8 bg-n-99 rounded-[2rem] overflow-hidden xl:p-15">
                                <div className="mb-10 max-w-[27rem] md:mb-20">
                                    <img src={item.imageUrl} className="w-full" width={630} height={420} alt={item.title} />
                                </div>
                                <div className="flex flex-col items-center">
                                <h4 className="h4 mb-4">{item.title}</h4>
                                <p className="body-2 text-n-4">{item.text}</p>
                                </div>
                        </div>
                    </div>
                ))}
            </div>

             <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
                 <Button className='mb-10' href='' >Give it a try !</Button>
             </div>

      </div>
    </div>
  )
}

export default Upcoming;
