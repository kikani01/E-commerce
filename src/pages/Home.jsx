import React from 'react'
import Navbar from '../components/home/home/Navbar'
import Content from '../components/home/home/Content'
import Cardrow from '../components/home/home/Cardrow'
import Collection from '../components/home/home/Collection'
import Contact from '../components/home/home/Contact'


function Home() {
  return (
    <div>
       <Navbar/>
       <Collection/>
       <Content/>
       <Cardrow />
        <Contact/>
    </div>
  )
}

export default Home