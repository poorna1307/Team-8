import react from 'react' 
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'


function Aboutus(){
    return(
        <div>
            <div className="card shadow">
                <div className="row">
                    <div className="col">
                        <img src={image1} alt="image not found" className='w-50'/>
                    </div>
                    <div className="col">
                        <img src={image2} alt="image not found" className='w-50'/>
                    </div>
                    <div className="col">
                        <img src={image3} alt="image not found" className='w-50' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Aboutus