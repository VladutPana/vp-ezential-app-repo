/* IMPORTS */

import {check } from "../assets";
import { perksContent, perksText2 } from "../constants";
import adventuring from '../assets/perks/adventuring.svg';
import Button from "./Button";

const Perks = () => {
  return (
        <div id='perks' className="container py-12 lg:flex lg:border lg:border-n-6 lg:shadow-[rgba(124,_62,_237,_0.1)_0px_0px_15px] ">

            {/* left div */}
            <div className="max-w-[25rem] ">
                <h2 className="h2 mb-4 md:mb-8">Limitless possibilities !</h2>
                <ul className="max-w-[22rem] mb-10 md:mb-14">
                    {perksContent.map((item) => (
                        <li className="mb-3 py-3" key={item.id}>
                            <div className="flex items-center">
                                <img src={check} width={24} height={24} alt='check' />
                                <h6 className="body-2 ml-5">{item.title}</h6>
                            </div>
                                {item.text && (
                                    <p className="body-2 mt-3 text-n-4">{item.text}</p>
                                )}
                        </li>
                    ))}
                </ul>
                <Button>
                    Still not convinced ?
                </Button>
            </div>

            {/* right div */}
            <div className="lg:ml-[25%] xl:w-[40%] mt-4">
                    <p className="body-2 mb-4 text-n-4 lg:w-[22rem] lg:mx-auto">{perksText2}</p>
                    <img className="lg:mt-24" src={adventuring} alt="adventuring" />
                </div>
            </div>
  )
}

export default Perks;
