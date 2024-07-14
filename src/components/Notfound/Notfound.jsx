import React, { useEffect, useState } from 'react';
import Style from './Notfound.module.css';


export default function Notfound() {
    const [counter, setCounter] = useState(0);
    useEffect(()=>{

    } , []);
  return <>

  <div className='bg-white py-20'>

    <div className='container mz-auto'>
      <h1 className='pb-60 pt-20 text-center'>OPPS......, Not Found Page</h1>
    </div>
  </div>
   
  </>
}
