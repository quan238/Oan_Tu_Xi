import React, { Component } from "react";
import { connect } from "react-redux";
class Computer extends Component {
  render() {
    const keyFrame = `@keyframes randomItem${Date.now()}{
      0%{top:-25px;} 
      25%{top:25px;}
      50%{top:-25px;}
      75%{top:25px;}
      100%{top:0;}
  }`;
    return (
      <div className="text-center playerGame">
        <style>{keyFrame}</style>
        <div className="theThink" style={{ position: "relative" }}>
          <img
            className="mt-3"
            style={{
              position: "absolute",
              left: "30%",
              animation: `randomItem${Date.now()} 0.5s`,
              width: 60,
              height: 60,
            }}
            src={this.props.computer.hinhAnh}
            alt=""
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          className="mt-4"
          style={{ width: 100, height: 100 }}
          src="./img/playerComputer.png"
        ></img>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    computer: state.OanTuXiReducer.computer,
  };
};
export default connect(mapStateToProps)(Computer);
