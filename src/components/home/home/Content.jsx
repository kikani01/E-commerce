import { faBars, faChevronDown, faSliders, faTableCellsLarge } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Content() {
  return (
    <div className='p-20 flex justify-between'>
        <div>
            <button className='text-xl border-4 border-gray-500 p-1 text-gray-700 font-medium'><FontAwesomeIcon className='text-xl pr-2' icon={faSliders} />Filter</button>
        </div>
        <div className='flex gap-6 pr-3'>
            <h2 className='text-gray-600 font-medium'>Default sorting <FontAwesomeIcon icon={faChevronDown} /></h2>
            <p><FontAwesomeIcon className='text-xl text-gray-600 ' icon={faBars} /></p>
            <p><FontAwesomeIcon className='text-xl text-gray-600' icon={faTableCellsLarge} /></p>
        </div>
    </div>
  )
}

export default Content