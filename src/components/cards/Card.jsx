const CardOne = ({logo, title, description}) => {
    return (
              <div className="col-lg-4 col-md-6 col-sm-12 my-sm-5 my-5 my-md-5">
                <div className="card border-0">
                    {logo}
                    <p className="font-21-700 primary-color mt-4">{title}</p>
                    <p className="font-19-700 font-opacity w-75">{description}</p>
                </div>
              </div>
    )
}

const ReviewCard = ({title, description}) => {
  return (
             <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-md-2 my-sm-2 my-2">
                  <div className="counter d-flex justify-content-center align-items-center">
                    <p className="font-48-700 primary-color me-4">{title}</p>
                    <p className="font-17-400 font-opacity w-50">{description}</p>
                  </div>
             </div>
  )
}



const ManageProjectsCard = ({id,title,description}) => {
  return (
    <div className="d-flex my-4 ms-5 me-auto">
        <div className="circle font-17-400 d-flex justify-content-center align-items-center">{id}</div>
        <div className="ms-4">
            <h1 className="font-21-700">{title}</h1>
            <p className="font-17-400 font-opacity w-75">{description}</p>
        </div>
    </div>
  )
}



const BlogCard = ({image, title, description, name, designation}) => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="my-lg-0 my-md-0 my-sm-5 my-5 text-center">
            <img src={image} className="img-fluid"/>
            <p className="font-24-700 mt-5">{title}</p>
            <p className="font-19-400 font-opacity w-75 mx-auto">{description}</p>
            <p className="font-17-700 my-0">{name}</p>
            <p className="font-15-400 font-opacity">{designation}</p>
        </div>
    </div>
  )
}

const SliderCard = ({price, title, description, button}) => {
  return (
            <div className="swiper-slide">
                <div className="card text-center p-4 my-lg-0 my-md-4 my-sm-4 my-4 ms-auto">
                    <button className="card-primary-btn btn-primary-color card-btn-font first-btn font-13-700 mx-auto p-2">Basic</button>
                    <div className="card-body mt-4 p-0">
                      <p className="font-48-700 primary-color my-0">{price}</p>
                      <p className="font-17-400 font-opacity primary-color my-2">{title}</p>
                      <p className="card-text font-17-400 primary-color my-5">{description}</p>
                      <a href="#" className="btn btn-primary primary-btn font-17-700 secondary-color card-secondary-btn">{button}</a>
                    </div>
                  </div>
            </div>
 )
}

const PriceCard = ({logo, title, description, button}) => {
  return(
      <div class="col-lg-6 col-md-12 col-sm-12 col-12 my-5">
              <div class="d-flex">
                {logo}
                <p class="font-21-700 secondary-color">{title}</p>
              </div>
              <p class="font-17-400 secondary-color font-secondary-opacity w-75 ms-5">{description}</p>
              <p class="font-17-700 card-color ms-5">{button} <i class="fa-solid fa-arrow-right"></i></p>
      </div>
  )
}




export {CardOne, ReviewCard, ManageProjectsCard, BlogCard, SliderCard, PriceCard} 