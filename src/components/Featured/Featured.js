import React, { Component } from 'react';
import Carousel from './Carousel'
import CountDown from './CountDown'


class Featured extends Component {
  render() {
    return (
      <div style={{position:'relative'}}>
         <Carousel />
        <div className="artist_name">
          <div className="wrapper">
            Shreya Ghosal
        </div>
        </div>

        <CountDown />
      </div>
    );
  }
}

export default Featured;