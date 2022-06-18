import { React } from 'react'
import { Outlet, Link } from 'react-router-dom'

function Campaign() {
    return (


        <div className='mt-3'>

            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-5 w-100 gap-5  justify-content-evenly'>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
    
                  
         
                        <img className='' src="https://i.imgur.com/M5QBpvR.gif" alt="" />

                        <div className="text-center mt-4">

                            <p>STOP the burn in Aarey</p>
                            <Link className="nav-link" to="Card1"><button>More det..</button> </Link>
                        </div>

                    </div>
                </div>
                <div className='col p-1'>

                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img className='mt-4' src="https://s3-eu-west-1.amazonaws.com/mahbucket-jhatkaa/items/files/000/000/477/small/1.png" alt="" />
                        <div className="text-center mt-3">
                            <p>Demand fair Working Conditionsfor Urban Company's Service Partners
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>

                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img className='' src="https://s3-eu-west-1.amazonaws.com/mahbucket-jhatkaa/items/files/000/000/458/display/Coimbatore_%281%29.png" alt="" />
                        <div className="text-center mt-4">
                            <p>Stand Against the illegal two-finger test!</p>
                        </div>
                    </div>
                </div>

            </div>


            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-5 w-100 gap-5  justify-content-evenly'>
                <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img className='h-75 mt-3' src="https://s3-eu-west-1.amazonaws.com/mahbucket-jhatkaa/items/files/000/000/466/original/Petition_Banners_%285%29-min.jpg" alt="" />
                        <div className="text-center mt-4">
                            <p>Demand Safe,Predestian-Friendly Streets for Bengaluru</p>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>

                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img className='' src="https://s3-eu-west-1.amazonaws.com/mahbucket-jhatkaa/items/files/000/000/481/small/FIGHT_sexual_harassment_at_sn_college__kerala!_%282%29.png" alt="" />
                        <div className="text-center mt-3">
                            <p>Fight Sexual Harassment at SN college,Kerala
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>

                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img className='' src="https://s3-eu-west-1.amazonaws.com/mahbucket-jhatkaa/items/files/000/000/485/small/png_20220119_145435_0000.png" alt="" />
                        <div className="text-center mt-4">
                            <p>Mandate Gender Sensatisation training for Agartala Police!</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Campaign