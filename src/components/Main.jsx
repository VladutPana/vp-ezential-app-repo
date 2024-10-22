/* IMPORTS */

import Button from './Button';
import { adventure } from '../assets';
import Logos from './Logos';
import {Gradient} from './Gradient';

const Main = () => {
  return (
      <div id='main' className='container relative pt-[12rem] -mt-[5.25rem]  lg:border lg:border-n-6 lg:shadow-[rgba(124,_62,_237,_0.1)_0px_0px_15px]'>
        {/* Text & button */}
        <div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[4rem]'> 
            <h1 className='h1 mb-6'>
                Welcome to <br/>
                <span className='inline-block relative uppercase font-code text-5xl italic [text-shadow:_0_4px_8px_#7c3aed]'>
                    Ezential.app
                  
                </span>
            </h1>

            <p className='body-1 max-w-[50rem] mx-auto mb-6 text-n-2 lg:mb-8'>
                At Ezential, we believe that health isn’t just about habits—it’s a journey to the best version of yourself. From daily wellness rituals to mindful living, we’re here to guide you every step of the way. Elevate your vitality, unlock your inner potential, and embrace the essentials of a balanced life. Let’s get started on this incredible journey together!
            </p>

            <Button href='' className='lg:mt-6'>
                Embark on this epic adventure !
            </Button>

        </div>

        {/* illustration div */}
    <div className='relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24'>
    <Gradient/>
        <div className='relative z-1 p-0.5 rounded-2xl bg-conic-gradient'>
            <div className='relative bg-slate-900 rounded-[2rem] '>
                    <div className='aspect-[33/40] rounded-b-[1rem] rounded-t-[1rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]'>
                        <img src={adventure} className="w-full scale-[1] translate-y-[25%] md:scale-[0.5] md:-translate-y-[10%] lg:-translate-y-[13%]" alt='adventure'/>
                    </div>
            </div>
        </div>
    </div>

        <Logos className='relative z-10 mt-20 lg:block '/>

      </div>
  )
}

export default Main;
