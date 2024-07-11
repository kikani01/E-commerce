import React from 'react'

function Aboutus() {
  return (
    <div className='h-[250px]  w-[94%]  mt-10 grid grid-cols-4 pt-4 pl-24 '>
      <div className=''> 
        <h1 className='text-xl text-gray-800'>Product Links</h1>
       <ul className='text-[15px] pt-4 text-gray-500 font-[500] leading-7'>
       <li><a href="1">All Products</a></li>
       <li><a href="1">Sofa</a></li>
       <li><a href="1">Chair</a></li>
       <li><a href="1">Table</a></li>
       </ul>
      </div>
      <div className=''> 
        <h1 className='text-xl text-gray-800'>Chairs</h1>
       <ul className='text-[15px] pt-4 text-gray-500 font-[500] leading-7'>
       <li><a href="1">chair</a></li>
       <li><a href="1">Armchair</a></li>
       <li><a href="1">Recliner</a></li>
       <li><a href="1">Stool</a></li>
       </ul>
      </div>
      <div className=''> 
        <h1 className='text-xl text-gray-800'>Table</h1>
       <ul className='text-[15px] pt-4 text-gray-500 font-[500] leading-7'>
       <li><a href="1">Study table</a></li>
       <li><a href="1">Table</a></li>
       <li><a href="1">Computer table</a></li>
       </ul>
      </div>
      <div className=''> 
        <h1 className='text-xl text-gray-800'>Have A Question ?</h1>
            <button className='border-2 border-gray-500 p-3 w-[150px] mt-4 text-gray-600'>Contact Us</button>
      </div>
    </div>
  )
}

export default Aboutus