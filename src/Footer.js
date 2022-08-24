import React from 'react'


const Footer = () => {
  return (
    
    <>
                <footer class="footer">
        <div className="container">
            <div className="row">

                {/* <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="footer-about">
                        <div className="footer-logo">
                            <a href="#"><img src="img/footer-logo.png" alt=""></img></a>
                        </div>
                        <p>The Customer is at the heart of our unique bussiness model, which include design.</p>
                        <a href="#"><img src="img/payment.png" alt=""></img></a>
                    </div>
                </div> */}

                <div className="col-lg-2 col-md-3 col-sm-6 me-2">
                    <div className="footer-widget">
                        <h6 className='capitalize'>Customer Care</h6>
                        <ul>
                            <li><a href="#">Account</a></li>
                            <li><a href="#">My Orders</a></li>
                            <li><a href="#">Wishllist</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Support</a></li>

                        </ul>
                    </div>
                </div>

                <div className="col-lg-2 col-md-3 col-sm-6 me-2">
                    <div className="footer-widget">
                        <h6>About</h6>
                        <ul>
                            <li><a href="#">Company Info</a></li>
                            <li><a href="#">Interior Works</a></li>
                        

                        </ul>
                    </div>
                </div>

                <div className="col-lg-2 col-md-3 col-sm-6 me-2">
                    <div className="footer-widget">
                        <h6>Users policy</h6>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms and Conditions</a></li>
                            <li><a href="#">Data Policy</a></li>
                            <li><a href="#">Cookies Policy</a></li>
                            <li><a href="#">Refund Policy</a></li>

                        </ul>
                    </div>
                </div>

                <div className="col-lg-2  col-md-3 col-sm-6 me-2">
                    <div className="footer-widget">
                        <h6>Connect with us</h6>
                        <ul className=''>
                        <i className="fa-brands fa-instagram me-3 socim"></i>
                        <i className="fa-brands fa-twitter me-3 socim"></i>
                        <i className="fa-brands fa-facebook me-3 socim"></i>
                        <i className="fa-brands fa-google me-3 socim "></i>
                            {/* <li><a href="#">Contact Us</a></li> */}
                            {/* <li><a href="#">Payment Methods</a></li>
                            <li><a href="#">Delivary</a></li>
                            <li><a href="#">Return & Exchanges</a></li> */}
                            <li><a href="">Soon On:</a></li>
                            <img src='./googleplay.png' className='mb-2'/>
                            <img src='./appstore.png' className='' />

                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 me-2">
                    <div className="footer-widget">
                        <h6>Stay connected</h6>
                        <div className="footer-newslatter">
                            <p><i className="fa-solid fa-location-dot me-2"></i>Baneshwor,Kathmandu,Nepal</p>
                            <p><i className="fa-solid fa-user-plus me-2"></i>+977-910000000000</p>
                            <p><i className="fa-solid fa-envelope me-2"></i>test@gamil.com</p>
                            
                        </div>

                    </div>
                </div>


            </div>

            <div className="row">
                <div className="col-lg-12 text-center ">
                    <div className="footer-copyright-text">
                        <p className='mb-2'>Subscribe to get amazing offers</p>
                        <form action="#">
                                <input  className='p-2 w-25' type="text" placeholder="Enter Your Email..."/>              
                            </form>
                    </div>
                </div>
            </div>


        </div>
        </footer>


    </>
  )
}

export default Footer