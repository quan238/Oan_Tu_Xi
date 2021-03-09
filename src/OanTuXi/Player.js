import React, { Component } from "react";

export default class Player extends Component {
  render() {
    return (
      <div className="text-center playerGame">
        <div className="theThink">
            <img className="mt-3" src="./img/bua.png" style={{width:60,height:60,transform:'rotate(180deg)'}}alt=""/>
        </div>
        <div className="speech-bubble"></div>
        <img class="mt-4" style={{ width: 100, height: 100 }} src="./img/player.png"></img>
        <div className="row">
          <div className="col-4">
            <button className="btnItem">
              <img style={{ width: 30 }} src="./img/bao.png" alt="" />
            </button>
          </div>
          <div className="col-4">
            <button className="btnItem">
              <img style={{ width: 30 }} src="./img/bua.png" alt="" />
            </button>
          </div>
          <div className="col-4">
            <button className="btnItem">
              <img style={{ width: 30 }} src="./img/keo.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
