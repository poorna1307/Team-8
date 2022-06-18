import react from 'react' 
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'


function Aboutus(){
    return(
        <div>
            <hr />
            <div className="container">
                <h1 className="text-center">Our Victories</h1>
                <div className="row">
                    <div className="col">
                        <div className="card shadow p-3">
                            <img src={image1} alt="image not found" className='w-100'/>
                            <p>On April 30, BMRCL invited objections against 1,026 trees that need to be axed for Namma Metro Phase 2A. Since most citizens could not focus on assessing the impacts, Jhatkaa.org launched a petition asking Government authorities to postpone the deadline until lockdown is lifted. After emails, calls from many Jhakaa.org members, this deadline has been postponed to 10 days after the lockdown is lifted. Our collective effort helped us preserve more than a thousand trees in Bangalore.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow p-3">
                            <img src={image2} alt="image not found" className='w-100'/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow p-3">
                            <img src={image3} alt="image not found" className='w-100'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Aboutus