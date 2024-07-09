import React from 'react'
import { ManageProjectsCard } from '../../../components/cards/Card'

const ManageProjects = () => {
  let manageData = [
    {
        id: "1",
        title: "Create a project",
        description: "With lots of unique blocks, you can easily build a page without coding."
    },
    {
        id: "2",
        title: "Assign related people",
        description: "With lots of unique blocks, you can easily build a page without coding."
    },
    {
        id: "3",
        title: "Make it done on-time",
        description: "With lots of unique blocks, you can easily build a page without coding."
    }


  ]
  return (
    <div className="container">
        <div className="row">
            <div className="col-12 my-5">
                <div className="w-50 text-center mx-auto">
                <p className="font-36-700 primary-color text-center">
                    Manage your projects fast
                </p>
                <p className="font-19-400 font-opacity text-center">
                    With lots of unique blocks, you can easily build a page without <br/> coding. Build your next landing page.
                </p>
                </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-5">
                <div className="d-flex justify-content-center">
                <img src="/src/assets/images/Image (1).svg" className="img-fluid"/>
                </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-5">
                {manageData?.map(({id, title, description}, index) => <ManageProjectsCard key={index} id={id} title={title} description={description} />)}
            </div>
        </div>
    </div>
  )
}

export default ManageProjects