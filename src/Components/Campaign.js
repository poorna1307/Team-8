import {React} from 'react'
import {Outlet,Link} from 'react-router-dom'

function Campaign() {
    return (    
        <div className='mt-3'>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-5 w-100 gap-5  justify-content-evenly'>
            <div className='col p-1'>
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img className=''src="https://i.imgur.com/M5QBpvR.gif" alt=""/>
                        <div className="text-center mt-4">
                           <p>STOP the burn in Aarey</p>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                
                    <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                        <img className='mt-4' src="https://s3-eu-west-1.amazonaws.com/mahbucket-jhatkaa/items/files/000/000/477/small/1.png" alt=""/>
                        <div className="text-center mt-3">
                            <p>Demand fair Working Conditionsfor Urban Company's Service Partners
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col p-1'>
                
                <div className='card card-body w-100 h-100 m-3 mx-auto shadow'>
                    <img className='' src="https://s3-eu-west-1.amazonaws.com/mahbucket-jhatkaa/items/files/000/000/458/display/Coimbatore_%281%29.png"  alt=""/>
                    <div className="text-center mt-4">
                        <p>Stand Against the illegal two-finger test!</p>
                    </div>
                </div>
            </div>
 
            </div>
       
        </div>
    )
}

export default Campaign