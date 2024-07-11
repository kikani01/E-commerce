import React from 'react'

function Card(props) {
  return (
    <div className='h-[400px] w-[300px] p-8'>
        <div className='h-[290px] w-full overflow-hidden '>
            <img className='h-full w-full rounded-sm relative object-cover duration-1000 hover:scale-110' src={props.image} alt="" />
            <div className='absolute mt-[-260px] ml-[15px] '>
                <span className={`rounded-full font-[600]  text-gray-800 text-[16px] p-2 ${props.color ? "bg-white" : ""}`}>{props.sale}</span>
            </div>
        </div>
        <div className='p-3 text-gray-500 font-bold' >
            <p className='text-[16px] font-medium'>{props.category}</p>
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