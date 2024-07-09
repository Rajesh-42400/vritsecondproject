import React from 'react'
import { SliderCard } from '../../../components/cards/Card'
import '../../../assets/js/slider'
import Price from '../price/Price'

const Slider = () => {
    let sliderData = [
        {
        price: "$29",
        title: "One time purchase",
        description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
        button: "Get started for free"
        },
        {
            price: "$49",
            title: "One time purchase",
            description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
            button: "Get started for free"
        },
        {
            price: "$99",
            title: "One time purchase",
            description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
            button: "Get started for free"
        },
        {
            price: "$100",
            title: "One time purchase",
            description: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
            button: "Get started for free"
        }
    ]
  return (
    <>
        <div className="container-fluid main-secondary-backgrounds">
        <div className="container py-5">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <p className="font-36-700 secondary-color">Pricing & Plans</p>
                <p className="font-19-400 secondary-color font-secondary-opacity w-50 mx-auto">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
              </div>
            </div>
          </div>

          <div className="swiper mySwiper">
            <div className="swiper-wrapper">
                {sliderData.map(({price, title, description, button}, index) => <SliderCard key={index} price={price} title={title} description={description} button={button} />)}
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
          </div>       
          
          <Price />
          
          <div className="row my-5">
            <div className="col-12">
              <p className="font-17-400 secondary-color text-center">Haven’t got your answer? <span className="card-color">Contact our support now</span></p>
            </div>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default Slider