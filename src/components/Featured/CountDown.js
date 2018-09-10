
import React, { Component } from 'react';
import Slide from 'react-reveal/Slide'

class CountDown extends Component {
    state={
        timeUntilEvent:'Oct,5,2018',
        days:0,
        hours:0,
        minutes:0,
        seconds:0

    }

    getTime =(deadLine)=>{
       const time= Date.parse(deadLine) - Date.now();
       if(time<0){
        console.log("date gone")
       }
       else{
         let seconds= Math.floor((time/1000)%60)
         let minutes =  Math.floor((time/1000/60)%60)
         let hours =   Math.floor((time/(1000*60*60))%24)
         let days = Math.floor(time/(1000*60*60*24))

          this.setState({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
       })
       }


    }
    componentDidMount (){
       setInterval(()=>this.getTime(this.state.timeUntilEvent),1000)
    }
  render() {
    return (
        <Slide left delay={1000}>
         <div className="countdown_wrapper">
         <div className="countdown_top">
           Event starts In
         </div>
         <div className="countdown_bottom">
            <div className="countdown_item">
               <div className="countdown_time">
                 {this.state.days}
               </div>
               <div className="countdown_tag">
                Days
               </div>
            </div>

            <div className="countdown_item">
               <div className="countdown_time">
                 {this.state.hours}
               </div>
               <div className="countdown_tag">
                Hs
               </div>
            </div>

            <div className="countdown_item">
               <div className="countdown_time">
                 {this.state.minutes}
               </div>
               <div className="countdown_tag">
                 Min
               </div>
            </div>
            <div className="countdown_item">
               <div className="countdown_time">
                 {this.state.seconds}
               </div>
               <div className="countdown_tag">
                 Sec
               </div>
            </div>
         </div>
      </div>
        </Slide>

    );
  }
}

export default CountDown;

