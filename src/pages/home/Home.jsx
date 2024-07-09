import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import GetStarted from '../demos/getstarted/GetStarted'
import Banner from '../demos/banner/Banner'
import DemoCards from '../demos/democards/DemoCards'
import GetEasier from '../demos/geteasier/GetEasier'
import ReviewContents from '../demos/review/ReviewContents'
import ManageProjects from '../demos/manageprojects/ManageProjects'
import Blog from '../demos/blog/Blog'
import Slider from '../demos/slider/Slider'

const Home = () => {
  return (
    <>
        <Header />
        <GetStarted />
        <Banner />
        <DemoCards />
        <GetEasier />
        <ReviewContents />
        <ManageProjects />
        <Blog />
        <Slider />
        <Footer />
    </>
  )
}

export default Home