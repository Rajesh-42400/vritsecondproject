import React from 'react'
import { BlogCard } from '../../../components/cards/Card'

const Blog = () => {
  let blogData = [
    {
        image: "/src/assets/images/Oval.svg",
        title: `“You made it so simple”`,
        description: "My new site is so much faster and easier to work with than my old site.",
        designation: "Founder at Zenix"
        
    },
    {
        image: "/src/assets/images/Oval (1).svg",
        title: `“Simply the best”`,
        description: "Better than all the rest. I’d recommend this product to beginners.",
        designation: "Digital Marketer"
        
    }

  ]
  return (
    <div className="container-fluid main-backgrounds py-5">
        <div className="container py-5">
          <div className="row">
            {blogData.map(({image, title, description, designation}, index) => <BlogCard key={index} image={image} title={title} description={description} designation={designation} />)}
          </div>
        </div>
      </div>
  )
}

export default Blog