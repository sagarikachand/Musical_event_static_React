

import React from 'react'
import Zoom from 'react-reveal/Zoom';
import icon_calender from  '../../resources/images/icons/calendar.png'
import icon_location from  '../../resources/images/icons/location.png'


const VenueInfo =() =>{

    return (
       <div className="bck_black">
        <div className="center_wrapper">
         <div className="vm_wrapper">

           <Zoom>
          <div className="vm_item">
           <div className="vm_outer">
            <div className="vm_inner">
             <div className="icon_square bck_red">
                <div className="vm_icon"
                 style={{
                    background : `url(${icon_calender})`
                 }}>
                </div>
              </div>
              <div className="vm_title">Event Date and Time</div>
              <div className="vm_date">7 August 2017 @10 pm</div>
            </div>
           </div>
          </div>
            </Zoom>

            <Zoom>
             <div className="vm_item">
           <div className="vm_outer">
            <div className="vm_inner">
             <div className="icon_square bck_red">
                <div className="vm_icon"
                 style={{
                    background : `url(${icon_location})`
                 }}>
                </div>
              </div>
              <div className="vm_title">Event Location</div>
              <div className="vm_date">JioGardens , BKC Mumbai</div>
            </div>
           </div>
          </div>
          </Zoom>

        </div>
      </div>
    </div>

      )
}

export default VenueInfo