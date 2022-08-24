import React from 'react'
import { useState } from 'react';

const Home = () => {
    const [image,setImage] = useState("./imgs/main sofa photo angelwise/mainSofa.png");

    const [count,setCount] = useState(1);

const Orginalprice = 1540;
const discount=(Orginalprice*10)/100
const discountedPrice= Orginalprice-discount ;
 
const Incnum = () => {
    setCount(count +1);  

}

const Decnum = () => {
    setCount(count-1);

}

const changeImage = (images) => {
    setImage(images);
}
if(count>=1){

  return (
    <>
            <div className="container main-container mt-4" style={{textAlign:"start"}}>
        <div className="row">
            <div className="col-md-4">
                {/* <img src="./imgs/main sofa photo angelwise/mainSofa.png" className="preview_image" alt="" srcset=""/> */}
                <img src={image} className="preview_image" alt="" srcset=""/>
                <div className="d-flex img-list">
                    <img src="./imgs/main sofa photo angelwise/mainsofa1.png" alt="" />
                    <img src="./imgs/main sofa photo angelwise/mainsofa2.png" alt=""/>
                    <img src="./imgs/main sofa photo angelwise/mainsofa3.png" alt=""/>
                    <img src="./imgs/main sofa photo angelwise/mainsofa4.png" alt=""/>
                    <img src="./imgs/main sofa photo angelwise/mainsofa5.png" alt=""/>
                    <img src="./imgs/main sofa photo angelwise/mainsofa6.png" alt=""/>

                </div>
            </div>
            <div className="col-md-8">
                <h2>OSP Home Furnishings Wicker Papasan Chair with 360-Degree Swivel, Brown Frame with Cream Cushion</h2>
                {/* <!-- options --> */}
                <div>
                    <span className='mb-2'><b>Options: </b>Cream Cushion </span>
                    <div className="d-flex option-img-list">
                        <img src="./imgs/button type cushion 5 items/ashcushion.png" alt="" className='me-2' onClick={()=>changeImage('./imgs/main sofa photo angelwise/mainsofa.png')}/>
                        <img src="./imgs/button type cushion 5 items/blackcushion.png" alt="" className='me-2' onClick={()=>changeImage('https://images.thdstatic.com/productImages/6b9f5fb1-183d-4276-b7e0-50ee8cd2d34b/svn/black-osp-home-furnishings-accent-chairs-bf25292-bk-e1_600.jpg')}/>
                        <img src="./imgs/button type cushion 5 items/creamcushion.png" alt="" className='me-2' onClick={()=>changeImage('http://t0.gstatic.com/images?q=tbn:ANd9GcSrVsnEJE5LuY2zXF8JKOjKFM5Fp2GR6AptJgceT1vKOI8zBWdM')}/>
                        <img src="./imgs/button type cushion 5 items/purplecushion.png" alt="" className='me-2' onClick={()=>changeImage('https://i5.walmartimages.com/asr/36b250f2-bf90-4f51-b7b0-044f598239eb_1.4ce19279e3e4ee1039c7e022b27258fb.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF')}/>
                        <img src="./imgs/button type cushion 5 items/redcushion.png" alt="" className='me-2' onClick={()=>changeImage('https://i5.walmartimages.com/asr/8e6d6d4a-d65f-4d1e-9bb3-05961c102af7.e0a3ffd3dc6c71437774623dc0abb767.jpeg')}/>
                    </div>
                </div>

                <div className="mt-5">
                    <span className="crossed-price"><s> NRs. {Orginalprice*count} </s></span>
                    <div className="row">
                        <div className="col-md-6">
                            <h3>NRs. {discountedPrice*count}</h3>
                            <p>10% off <span>You save: NRs. {discount*count} </span></p>
                        </div>
                        <div className="col-md-6">
                            <span>Quantity</span>
                            <div className="d-flex">
                                <button className="btn btn-default" onClick={Decnum}>-</button>
                                <span className="btn btn-default">1</span>
                                <button className="btn btn-default me-2" onClick={Incnum}>+</button>
                                <button className="btn btn-warning color-white">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <b>About this item</b>
                        <ul>
                            <li>Create a laid back vibe in your home with our twist on the classeic papasan chair design</li>
                            <li>Nest into the generously large Dacron-filled cushion</li>
                            <li>Enjoy the boho styling of our durable resin wicker wrapped over a metal frame</li>
                            <li>Complete with a 360° swivel to twist and turn to your heart’s content</li>
                            <li>Add a bit of fun to your living room, family room or dorm with our easy, casual Papasan Chair</li>
                        </ul>
                    </div>
                    <div>
                        <p>Search your queries related to this product</p>
                        <div className="p-2 d-flex  align-items-center search-bar">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Your questions"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-center flex-column align-items-center">
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button className="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Description</button>
                  <button className="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Specification</button>
                  <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Question/Answer</button>
                  <button className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false">Ratings & Reviews</button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">Description</div>
                <div className="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                    <div className="row p-2 specs" >
                        <div className="col-md-6">
                            <p>Technical Details</p>
                            <div className="d-flex justify-content-between"><b>Item Weight</b> 29 pounds</div>
                            <div className="d-flex justify-content-between"><b>Dimensions</b> 38 x 40 x 31.5 inches</div>
                            <div className="d-flex justify-content-between"><b>Item model number</b>BF29296BR-M52</div>
                        </div>
                        <div className="col-md-6">
                            <p>Other Details</p>
                            <div className="d-flex justify-content-between"><b>Item Weight</b> 29 pounds</div>
                            <div className="d-flex justify-content-between"><b>Dimensions</b> 38 x 40 x 31.5 inches</div>
                            <div className="d-flex justify-content-between"><b>Item model number</b>BF29296BR-M52</div>
                        </div>

                    </div>
                </div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">Question/Answer</div>
                <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">Ratings & Reviews</div>
              </div>
        </div>
    </div>
   
    </>
  )

}
else{
    alert('Quantity cannot be less than 1');
    return(
       
        window.location.reload(true)
    )
}


}

export default Home