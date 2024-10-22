/* IMPORTS */

import { credits, socials } from "../constants";

const Footer = () => {
  return (
    <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col lg:border lg:border-n-6 lg:shadow-[rgba(124,_62,_237,_0.1)_0px_0px_15px]">
      {/* left div */}
      <p className="caption text-n-4 lg:block">&copy;{new Date().getFullYear()}. All rights reserved</p>
      {/* center div */}
        <ul className="flex flex-col items-center text-n-4 caption lg:ml-[5rem]">
          <h1 className="text-n-1 uppercase italic lg:mt-5 mb-2">Credits: </h1>
          {credits.map((item) => (
            <li key={item.id} className="hover:scale-125 hover:text-slate-600 transition-all">
              <a className="underline italic" href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
            </li>
          ))}
        </ul>

            <div className="mb-10 md:my-[5rem]">
      {/* right div */}
    <ul className="flex gap-5 flex-wrap">
        {socials.map((item) => (
            <a className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-all hover:bg-slate-900 hover:scale-125" key={item.id} href='#main'>
                <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
        ))}
    </ul>
        </div>
    </div>
  )
}

export default Footer;
