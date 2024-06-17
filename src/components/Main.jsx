import React from 'react'

function Main() {
  return (
    <div className="main">
        <div className="text-container">
            <div className='main-content'>
                <h1>YOUR FEET DESERVE THE BEST </h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            </div>
            <div className='main-container-btn'> 
                <button className='shop-btn'>Shop Now</button>
                <button className='category-btn'>Category</button>
            </div>
            <div className='sub-section'>
                <p>Also Available On</p>
                <div className="shops">
                    <img src="images/amazon.png" alt="amazon-img" />
                    <img src="images/flipkart.png" alt="flipkart-img" />
                </div>
            </div>

        </div>
        <div className="img-container">
            <img src="images/shoe_image.png" alt="shoe image" />
        </div>
    </div>
  )
}

export default Main