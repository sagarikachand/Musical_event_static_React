
import React ,{Component} from 'react'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import MyButton from '../Shared/UI/MyButton'


class Ticket extends Component{
state={
    startCount:11,
    endCount:30,

}

startCounter=() =>{
      if(this.state.startCount < this.state.endCount){
        this.setState( (prevState) =>{return {
            startCount : prevState.startCount+1
        }})
      }
}

componentDidUpdate(){
        setTimeout( () =>{
          this.startCounter()
        },30)
    }

render(){
  return(

     <div className="discount_wrapper">
       <Fade onReveal={ () => this.startCounter() } >
       <div className="discount_value">
        <div className="discount_number">
        <span>{this.state.startCount}%</span>
        <span>Off</span>
        </div>
       </div>
       </Fade>

        <Slide right>
        <div className="discount_text">
       <h3>Purchase Ticket before 22nd September</h3>
       <p>One last option is to use ssrReveal prop. If enabled, this option will suppress both flickering and ssrFadeout effect. The unfortunate drawback of this option is that the revealed content will appear hidden to Googlebot and to anyone with javascript switched off. So it will makes sense for images and/or headings which are duplicated elsewhere on the page.</p>
          <MyButton color="#fff" bck="#ffa800" text="Purchase Ticket"
                 link="www.google.com" />
       </div>

        </Slide>


     </div>
     )
}




}

export default Ticket;
