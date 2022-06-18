import React from 'react'
// import {Carousel} from 'react-responsive-carousel'
import "bootstrap"
function Home(){
    return(
        <div className='text-center container'>
            <h1 className="mt-5">Jhatkaa</h1>
            {/* <Carousel infiniteLoop autoPlay className='w-75 mt-5 mx-auto'> */}
          <div className='image w-100'>
            <img className="w-100" src="https://i.ytimg.com/vi/kalp_iT6Zs4/maxresdefault.jpg"alt='' />
          </div>
          <div className='image w-100'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5RFncLwpB99os1y_uxS5r1OFQ1Z0uX-d3WAusqp=CAU" alt='' />
          </div>
          <div className='image w-100'>
            <img src="https://static.wixstatic.com/media/3290ed_4365025026fd4687a63a6569bb0300cb~mv2.jpg/v1/fill/w_1000,h_666,al_c,q_90,usm_0.66_1.00_0.01/3290ed_4365025026fd4687a63a6569bb0300cb~mv2.jpg" alt='' />
          </div>
        {/* </Carousel> */}
           
        </div>
    )
}
export default Home