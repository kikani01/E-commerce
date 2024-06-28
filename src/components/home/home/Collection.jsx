import React from 'react'

function Collection() {
  return (
    <div>
        <div className='h-[500px] w-[92%] ml-[60px] mt-8 bg-gray-200 flex'>
            <div>
            <h1 className='flex flex-col  p-20 text-gray-500 ml-[20px]'>
                <span className='p-4 font-bold text-6xl'>Style</span>
                <span className='p-4 font-bold text-6xl'>Comfort &</span>
                <span className='p-4 font-bold text-6xl'>Affordable</span>
            </h1>
                <button className='ml-[150px] text-[14px] border-2 border-gray-400 p-3 mt-[-70px] w-[150px] text-gray-500' >Explore Store</button>
            </div>
            <div className='h-full w-[40%] ml-[150px] mt-[90px]'>
                <img className='h-[400px] object-cover' src="image/imageone.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Collection