import React from 'react'
import './HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner'

function HomeScreen() {
  return (
    <div className='homescreen'>
        <Nav />

        <Banner />

        {/* Bunch of Different Rows  */}
    </div>
  )
}

export default HomeScreen