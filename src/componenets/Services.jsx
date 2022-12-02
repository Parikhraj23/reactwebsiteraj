import React from 'react'
import Comman from "../componenets/ExtraComponents/Comman";
import serviceImg from "../Images/service page.jpg"
import Card from './ExtraComponents/Card';
import serviceData from "../Data/serviceData.js"


const Services = () => {
  return (
    <>
      <Comman
        name="Services"
        imgsrc={serviceImg}
        message="Finance your Dream with us and Live your Dream Life."
        visits="/contact"
        btnName="Contact us"
      />

      <div className='my-5' >
        <h1 className="text-center" > Our Services </h1>
      </div>
      
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-10 mx-auto ">
            <div className="row gy-5">

              {serviceData.map( ( value , index ) => {
                return <Card 
                  cardImg = {value.cardImg}
                  title = {value.title}
                  key = {index}
                />
              } )}

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Services