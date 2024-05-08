import React from 'react'
// import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carsouse from '../components/Carsouse'

export default function Home() {
  return (
    <div>
      <div><Navbar/></div>
        <div><Carsouse></Carsouse></div>
    <div className='m-3'>
      
      <Card/>
      <Card/>
      <Card/>
    </div>

        <div><Footer/></div>


    </div>
  )
}

