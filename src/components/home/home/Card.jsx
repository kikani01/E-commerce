import React from 'react'

function Card(props) {
  return (
    <div className='h-[400px] w-[330px] p-10 pl-16 '>
        <div className='h-[290px] w-full pt-10'>
            <img className='h-full w-full rounded-sm relative' src={props.image} alt="" />
            <div className='absolute mt-[-230px] ml-[15px] '>
                <span className=' rounded-full p-1 font-bold  text-[19px]'>{props.sale}</span>
            </div>
        </div>
        <div className='p-3 text-gray-500 font-bold' >
            <p className='text-[16px] font-medium'>{props.name}</p>
            <h1 className='pt-1'>{props.title}</h1>
            <div className='flex'>
           <span className='line-through font-light text-gray-600'>{props.pw}</span>&nbsp;&nbsp;
           <div>
           <p className='pt-1 text-gray-800 mt-[-4px]'>{props.price}</p>
           </div>
           </div>
        </div>
    </div>
  )
}

export default Card