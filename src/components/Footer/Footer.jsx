import React, { useEffect, useState } from 'react';
import Style from './Footer.module.css';


export default function Footer() {
    const [counter, setCounter] = useState(0);
    useEffect(()=>{

    } , []);
  return <>
  <div className="bg-sky-950">
    <div className="container mx-auto px-5 py-10">
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3 text-center'>
      <div className="col-span-1">
                <div className="p-4 text-white"><h2>Location</h2><p className="pt-3">2215 John Daniel Drive</p><p className="pt-2">Clark, MO 65243</p></div>
      </div>
      
      <div className="col-span-1">
                <div className="p-4 text-white"><h2>Around The Web</h2> <i className="fa-brands fa-facebook px-2 text-xl pt-3"></i><i className="fa-brands fa-twitter px-2 text-xl pt-3"></i><i className="fa-brands fa-linkedin px-2 text-xl pt-3"></i><i className="fa-solid fa-globe px-2 text-xl pt-3"></i></div>

      </div>
      <div className="col-span-1">
                <div className="p-4 text-white"><h2>About The Freelancer</h2><p className="pt-3">Freelance is a free to use, licensed Bootstrap theme created by Route</p></div>
      </div>
      </div>
    </div>
  </div>
  <div className='bg-gray-950'>
    <div className="container mx-auto text-white">
      <p className='text-center py-6'>Copyright © Your Website 2021</p>
    </div>
  </div>
  </>
}
