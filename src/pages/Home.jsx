import React from 'react'
import Navbar from '../components/home/home/Navbar'
import Content from '../components/home/home/Content'
import Cardrow from '../components/home/home/Cardrow'
import Collection from '../components/home/home/Collection'


function Home() {
  return (
    <div>
       <Navbar/>
       <Collection/>
       <Content/>
       <Cardrow />
    </div>
  )
}

export default Home