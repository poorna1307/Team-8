import react from 'react' 
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'


function Aboutus(){
    return(
        <div>
            <div className='mt-3'>
            <h1 className="text-center">Our Victories</h1>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-5 w-100 gap-5  justify-content-evenly'>
            {/* <h1 className="text-center">Our Victories</h1> */}
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img className=''src={image1} alt="" height="319px"/>
                        <div className="text-center mt-4">
                           <p>On April 30, BMRCL invited objections against 1,026 trees that need to be axed for Namma Metro Phase 2A. Since most citizens could not focus on assessing the impacts, Jhatkaa.org launched a petition asking Government authorities to postpone the deadline until lockdown is lifted. After emails, calls from many Jhakaa.org members, this deadline has been postponed to 10 days after the lockdown is lifted. Our collective effort helped us preserve more than a thousand trees in Bangalore.</p>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img className=''src={image2} alt=""height="319px"/>
                        <div className="text-center mt-4">
                           <p>On April 30, BMRCL invited objections against 1,026 trees that need to be axed for Namma Metro Phase 2A. Since most citizens could not focus on assessing the impacts, Jhatkaa.org launched a petition asking Government authorities to postpone the deadline until lockdown is lifted. After emails, calls from many Jhakaa.org members, this deadline has been postponed to 10 days after the lockdown is lifted. Our collective effort helped us preserve more than a thousand trees in Bangalore.</p>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                
                <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                    <img className='' src={image3}  alt=""height="319px"/>
                    <div className="text-center mt-4">
                        <p>Stand Against the illegal two-finger test!</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className='mt-3'>
            <h1 className="text-center">Our Campaigners</h1>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-5 w-100 gap-5  justify-content-evenly'>
            {/* <h1 className="text-center">Our Victories</h1> */}
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img className=''src={image1} alt="" height="319px"/>
                        <div className="text-center mt-4">
                           <p>On April 30, BMRCL invited objections against 1,026 trees that need to be axed for Namma Metro Phase 2A. Since most citizens could not focus on assessing the impacts, Jhatkaa.org launched a petition asking Government authorities to postpone the deadline until lockdown is lifted. After emails, calls from many Jhakaa.org members, this deadline has been postponed to 10 days after the lockdown is lifted. Our collective effort helped us preserve more than a thousand trees in Bangalore.</p>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img className=''src={image2} alt=""height="319px"/>
                        <div className="text-center mt-4">
                           <p>On April 30, BMRCL invited objections against 1,026 trees that need to be axed for Namma Metro Phase 2A. Since most citizens could not focus on assessing the impacts, Jhatkaa.org launched a petition asking Government authorities to postpone the deadline until lockdown is lifted. After emails, calls from many Jhakaa.org members, this deadline has been postponed to 10 days after the lockdown is lifted. Our collective effort helped us preserve more than a thousand trees in Bangalore.</p>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                
                <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                    <img className='' src={image3}  alt=""height="319px"/>
                    <div className="text-center mt-4">
                        <p>Stand Against the illegal two-finger test!</p>
                    </div>
                </div>
            </div>
            </div>
            
            
       
        </div>
        </div>
    )
}
export default Aboutus