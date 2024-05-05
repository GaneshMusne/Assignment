import React from 'react'
import HomeImage from '../components/HomeImage'
import Card from '../components/Card'

const Home = () => {
  return (
    <>
        <HomeImage></HomeImage>
        <div className=' d-flex justify-content-evenly flex-wrap gap-3 mb-5'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
    </>
  )
}

export default Home
