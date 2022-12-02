import React from 'react'


const Common = (p) => {
  return (
    <>
      <section className="Common d-flex align-items-center " id="Common">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center ">
                  <h1 className="my-3">
                  Welcome to <strong style={{ color:"#3498db" }} > {p.name} Page </strong>
                    {/* Finance your Dream with <strong style={{ color:"#3498db" }} > Raj Enterprise </strong> */}
                  </h1>
                  <h2 className="my-1">
                    { p.message }
                  </h2>
                  <div className="my-3">
                    <a href={ p.visits } className="btn btn-outline-primary">
                    { p.btnName }
                    </a>
                  </div>
                </div>

                <div className="col-lg-6  order-1 order-lg-2 header-img ">
                  <img
                    src={ p.imgsrc }
                    className=" img-fluid animated my-3"
                    alt="Common Img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Common
