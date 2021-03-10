import React, { Component } from "react";
import { connect } from "react-redux";
class Computer extends Component {
  render() {
    return (
      <div>
        <div className="text-center playerGame">
          <div className="theThink">
            <img
              className="mt-3"
              src={this.props.computer.hinhAnh}
              style={{ width: 60, height: 60 }}
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
