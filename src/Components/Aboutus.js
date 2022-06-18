import react from 'react' 
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import campaigner1 from '../images/campaigner1.png'
import campaigner2 from '../images/campaigner2.jpg'
import campaigner3 from '../images/campaigner3.png'


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
                            {/* <h1>hello ahljkshdflkja</h1> */}
                           <p>On April 30, BMRCL invited objections against 1,026 trees that need to be axed for Namma Metro Phase 2A. Since most citizens could not focus on assessing the impacts, Jhatkaa.org launched a petition asking Government authorities to postpone the deadline until lockdown is lifted. After emails, calls from many Jhakaa.org members, this deadline has been postponed to 10 days after the lockdown is lifted. Our collective effort helped us preserve more than a thousand trees in Bangalore.</p>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img className=''src={image2} alt=""height="319px"/>
                        <div className="text-center mt-4">
                            <p>CITILINC bus service operational in Nashik Nashik Municipal Corporation launched the CITILINC bus service in Nashik City. The buses are damn cool, there are 150 diesel, 50 CNG and 50 Ebuses.</p>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                
                <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                    <img className='' src={image3}  alt=""height="319px"/>
                    <div className="text-center mt-4">
                        <p>More than 60 lakh students across India were on the verge of losing their only hope of education- the Post Matric Scholarship Scheme!

                            The scheme that helps over Scheduled Categories students (from classes 11 and 12) complete their schooling had nearly shut down across more than 14 states, after the Central Government reduced funding to states under a 2017-18 ‘committed liability’ formula.
                        </p>
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
                        <img className='rounded-circle'src={campaigner1} alt="" height="319px"/>
                        <div className="text-center mt-4">
                            <h3>Nooruddin Patloor</h3>
                            <p>
                            Noor is the Manager-Finance&operations, one of the oldest employee in Jhatkaa.org. He has more than 17 years of experience in Accounting and Finance working in various NGOs across South India. Before joining Jhatkaa.org Noor worked for various NGOs viz., R.D.T-Andhra Pradesh, Sangath-Goa, CHF Internationa, St.Johns Research Institute-Bangalore. He has a Masters in Commerce by Qualification.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img className='rounded-circle'src={campaigner2} alt=""height="319px"/>
                        <div className="text-center mt-4">
                        <h3>Divya Narayanan</h3>
                            <p>Divya has a background in public health and human rights. She has worked in the grassroots environmental and health issues for 8 years. At Jhatkaa.org she is the Campaigns Director and manages digital campaigns on air pollution & climate change, gender & sexuality and other social justice issues. She is based out of Bangalore, Karnataka.</p>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                
                <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                    <img className='rounded-circle' src={campaigner3}  alt=""height="319px"/>
                    <div className="text-center mt-4">
                        <h3>Nisha Mathew</h3>
                        <p>Nisha has worked  in the corporate sector outside India for 10years prior to  joining Jhatkaa.org as an Executive Assistant to the Executive Director. Her previous experience gained includes  handling Human Resources, Operations and Procurement departments. She has previously worked in Organizations such as  Northern Trust, Gulf Oil Middle East Ltd & Axcl Gulf, before deciding to return to India in December 2019.
                            Nisha holds an MBA from S.P. Jain School of Global Management.
                        </p>
                    </div>
                </div>
            </div>
            </div>
            
            
       
        </div>
        </div>
    )
}
export default Aboutus