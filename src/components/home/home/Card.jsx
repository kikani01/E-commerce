import React from 'react'

function Card(props) {
  return (
    <div className='h-[400px] w-[330px] p-10 pl-16 '>
        <div className='h-[290px] w-full pt-10'>
            <img className='h-full w-full rounded-sm' src={props.image} alt="" />
        </div>
        <div className='p-3 text-gray-500 font-bold' >
            <p className='text-[16px] font-medium'>{props.name}</p>
            <h1 className='pt-1'>{props.title}</h1>
            <p className='pt-1 text-gray-800'>{props.price}</p>
        </div>
    </div>
  )
}

export default Card