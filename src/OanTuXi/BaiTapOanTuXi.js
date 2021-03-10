import React, { Component } from "react";
import "./BaiTapOanTuXi.css";
import Computer from "./Computer";
import KetQuaTroChoi from "./KetQuaTroChoi";
import Player from "./Player";
import { connect } from "react-redux";
class BaiTapOanTuXi extends Component {
  render() {
 
    return (
      <div className="game">
        <div className="row text-center mt-5">
          <div className="col-4">
            <Player></Player>
          </div>
          <div className="col-4 ">
            <KetQuaTroChoi />
            <button
              onClick={() => {
                this.props.playGame();
              }}
              className="btn btn-success p-3 display-5 mt-5"
            >
              Play Game
            </button>
          </div>
          <div className="col-4">
            <Computer></Computer>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      // Khai bao ham lap di lap lai
      let randomComputeItem = setInterval(() => {
        dispatch({
          type: "RANDOM",
        });
        count++;
        if (count > 10) {
          // dung ham set Interval
          clearInterval(randomComputeItem);
          dispatch({
              type:'END_GAME',
              
          })
        }
      }, 100);
    },
  };
};
export default connect(null, mapDispatchToProps)(BaiTapOanTuXi);
