/* IMPORTS */

import { logos } from "../constants";

const Logos = ({className}) => {
  return (
    <div className={className}>
        <h5 className="tagline mb-6 text-center text-n-1/50">Trusted by </h5>
        <ul className="flex">
            {logos.map((logo, index) => (
                <li className="flex items-center justify-center flex-1 h-[8.5rem]" key={index}>
                    <img className="w-[25%]" src={logo} alt="logo" />
                </li>
            )

            )}
        </ul>
    </div>
  )
}

export default Logos;
