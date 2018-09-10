
import React from 'react'
import Slider from 'react-slick'
import slide_one from  '../../resources/images/slide_one.jpg'
import slide_two from  '../../resources/images/slide_two.jpg'
import slide_three from  '../../resources/images/slide_three.jpg'

const Carousel =(props)=>{

    const settings={
        dots:false,
        infinite:true,
        autoplay:true,
        speed:700
    }
   return (
    <div style={{
        overflow:'hidden',
        height:`${window.innerHeight}px`,
        minHeight:'500px'

   }}>
     <Slider {...settings} >
      <div>
        <div className="carousel_image"
       style={{
          background : `url(${slide_one})`,
          height:`${window.innerHeight}px`,
           minHeight:'500px'


         }}></div>
        </div>
        <div>
       <div className="carousel_image"
       style={{ background : `url(${slide_two})`,
       height:`${window.innerHeight}px`,
        minHeight:'500px'
      }}></div>
        </div>
        <div>
       <div className="carousel_image"
       style={{
        background : `url(${slide_three})`,
        height:`${window.innerHeight}px`,
         minHeight:'500px'

    }}></div>
      </div>

     </Slider>
    </div>
    )
}
export default Carousel;
