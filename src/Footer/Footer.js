import React from 'react'

function Footer() {
  return (
    <div className='section footer-section'>
      <div className='footer-widget-section'>
        <img className="shape-1 animation-down" src="assets/images/shape/shape-21.png" alt="Shape" />
        <div className='container'>
          <div className='row'>
            <div className="col-lg-3 col-md-6 order-md-1 order-lg-1">

        {/* <!-- Footer Widget Start --> */}
        <div className="footer-widget">
            <div className="widget-logo">
                <a href="#"><img src="assets/images/logo2.png" alt="Logo" /></a>
            </div>

            <div className="widget-address">
                <h4 className="footer-widget-title">Smartech Global</h4>
                <p>Choba Uniport (CU).</p>
            </div>

            <ul className="widget-info">
                <li>
                    <p> <i className="flaticon-email"></i> <a href="mailto:address@gmail.com">support@delzyscholars.com</a> </p>
                </li>
                <li>
                    <p> <i className="flaticon-phone-call"></i> <a href="tel:9702621413">(234) 703-810-1576</a> </p>
                </li>
            </ul>

            <ul className="widget-social">
                <li><a href="#"><i className="flaticon-facebook"></i></a></li>
                <li><a href="#"><i className="flaticon-twitter"></i></a></li>
                <li><a href="#"><i className="flaticon-skype"></i></a></li>
                <li><a href="#"><i className="flaticon-instagram"></i></a></li>
            </ul>
        </div>
        {/* <!-- Footer Widget End --> */}

    </div>
            <div className="col-lg-6 order-md-3 order-lg-2">

        {/* <!-- Footer Widget Link Start --> */}
        <div className="footer-widget-link">

            {/* <!-- Footer Widget Start --> */}
            <div className="footer-widget">
                <h4 className="footer-widget-title">Category</h4>

                <ul className="widget-link">
                    <li><a href="#">WAEC</a></li>
                    <li><a href="#">JAMB</a></li>
                    <li><a href="#">Post-UTME</a></li>
                    <li><a href="#">UnderGraduates</a></li>
                    <li><a href="#">Uniport</a></li>
                    <li><a href="#">RSUST</a></li>
                </ul>

            </div>
            {/* <!-- Footer Widget End --> */}

            {/* <!-- Footer Widget Start --> */}
            <div className="footer-widget">
                <h4 className="footer-widget-title">Quick Links</h4>

                <ul className="widget-link">
                    <li><a href="#">Pre-Degree</a></li>
                    <li><a href="#">A-Level</a></li>
                </ul>

            </div>
            {/* <!-- Footer Widget End --> */}

        </div>
        {/* <!-- Footer Widget Link End --> */}

    </div>
            {/* <FooterSub /> */}
          </div>
        </div>
        <img className="shape-2 animation-left" src="assets/images/shape/shape-22.png" alt="Shape"></img>
      </div>
      <div className='footer-copyright'></div>
    </div>
  )
}

export default Footer