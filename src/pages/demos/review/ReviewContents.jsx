import React from 'react'
import { ReviewCard } from '../../../components/cards/Card'

const ReviewContents = () => {
  let reviewdata = [
    {
      title: "1M+",
      description: "Customers visit Albino every months"
    },

    {
      title: "93%",
      description: "Satisfaction rate from our customers."
    },

    {
      title: "4.9",
      description: "Average customer ratings out of 5.00!"
    },

  ]
  return (
    <div className="container-fluid border-bottom">
        <div className="container my-5">
          <div className="counters py-5">
            <div className="row">
              {reviewdata?.map((item, index) => <ReviewCard key={index} title={item.title} description={item.description} />)}
            </div>
           </div>
        </div>
    </div>
  )
}

export default ReviewContents