import React from 'react'

function Error() {
  return (
    <>
        <div className="section page-banner">

        <img className="shape-1 animation-round" src="assets/images/shape/shape-8.png" alt="Shape" />

        <img className="shape-2" src="assets/images/shape/shape-23.png" alt="Shape" />

        <div className="container">
            {/* <!-- Page Banner Start --> */}
            <div className="page-banner-content">
                <ul className="breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li className="active"> 404 Error </li>
                </ul>
                <h2 className="title">Page Not <span> Found </span></h2>
            </div>
            {/* <!-- Page Banner End --> */}
        </div>

        {/* <!-- Shape Icon Box Start --> */}
        <div className="shape-icon-box">

            <img className="icon-shape-1 animation-left" src="assets/images/shape/shape-5.png" alt="Shape" />

            <div className="box-content">
                <div className="box-wrapper">
                    <i className="flaticon-badge"></i>
                </div>
            </div>

            <img className="icon-shape-2" src="assets/images/shape/shape-6.png" alt="Shape" />

        </div>
        {/* <!-- Shape Icon Box End --> */}

        <img className="shape-3" src="assets/images/shape/shape-24.png" alt="Shape" />

        {/* <img className="shape-author" src={img} alt="Shape" /> */}

    </div>
    <div className="section section-padding mt-n10">
        <div className="container">

            {/* <!-- Error Wrapper Start --> */}
            <div className="error-wrapper">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        {/* <!-- Error Images Start --> */}
                        <div className="error-images">
                            <img src="assets/images/error.png" alt="Error" />
                        </div>
                        {/* <!-- Error Images End --> */}
                    </div>
                    <div className="col-lg-6">
                        {/* <!-- Error Content Start --> */}
                        <div className="error-content">
                            <h5 className="sub-title">This Page is Not Found.</h5>
                            <h2 className="main-title">We are very sorry for error. We <span> can’t find this</span> page.</h2>
                            <p>It has survived not only five centuries but also the leap into electronic typesetting.</p>
                            <a href="index.html" className="btn btn-primary btn-hover-dark">Back To Home</a>
                        </div>
                        {/* <!-- Error Content End --> */}
                    </div>
                </div>
            </div>
            {/* <!-- Error Wrapper End --> */}

        </div>
    </div>
    </>
  )
}

export default Error