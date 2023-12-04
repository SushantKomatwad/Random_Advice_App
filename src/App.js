import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [advice , setAdvice] = useState('');

  const fetchAdvice = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');

      const { advice } = response.data.slip;
      setAdvice(advice);

    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };


  useEffect(() => {
    fetchAdvice();
  }, []);


  return (
    <>
      <div className='flex justify-center  items-center h-screen '>
          <div className='shadow-2xl ring-4 ring-orange-500 bg-white w-[530px] h-[270px] rounded-2xl   flex flex-col justify-center '>
             <h1 className='font-bold text-2xl text-gray-800  mx-16'><span className='text-black'>ADVICE : </span>{advice}</h1>
             <div className='text-center mt-8'>
              <button className='bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-xl' onClick={fetchAdvice}>GIVE ME ADVICE !</button>
             </div>
          </div>
      </div>  
    </>
  )
}

export default App