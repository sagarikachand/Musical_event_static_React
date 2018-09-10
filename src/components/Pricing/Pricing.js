import React ,{Component}  from 'react'
import Zoom from 'react-reveal/Zoom';
 import MyButton from '../Shared/UI/MyButton'

class Pricing extends Component {

state={
  pricingDetail:
  [
  {
     cost:2000,
     ticketType:'Balcony',
     description:'One last option is to use ssrReveal prop. If enabled, this option will suppress both flickering and ssrFadeout effect.' ,
     delay:500
  },
  {
     cost:5000,
     ticketType:'Medium',
     description:'One last option is to use ssrReveal prop. If enabled, this option will suppress both flickering and ssrFadeout effect.' ,
     delay:0
  },
  {
     cost:1000,
     ticketType:'Star',
     description:'One last option is to use ssrReveal prop. If enabled, this option will suppress both flickering and ssrFadeout effect.' ,
     delay:500
  },
  ]
}

render(){

  let pricingItems= this.state.pricingDetail.map( (item) =>{
     return (
      <Zoom key={item.ticketType} delay={item.delay}>
             <div className="Pricing_item">
                 <div className="Pricing_inner">
                 <div className="Pricing_value">
                        <span>Rs.{item.cost}</span>
                        <span>{item.ticketType} </span>
                  </div>
                  <div className="Pricing_text">
                        <p>{item.description}</p>
                         <MyButton color="#fff" bck="#ffa800" text="Purchase Ticket"
                         link="www.google.com" />
                  </div>
                 </div>
             </div>
      </Zoom>

      )
  })

  console.log(pricingItems)
    return(

     <div className="bck_black">
       <div className="center_wrapper">
          <div className="Pricing_section">
            <h2>Pricing </h2>
            <div className="Pricing_wrapper">
             {pricingItems}

          </div>
          </div>
       </div>

     </div>

     )
}

}

export default Pricing;