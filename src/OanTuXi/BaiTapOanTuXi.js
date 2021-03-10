import React, { Component } from "react";
import "./BaiTapOanTuXi.css";
import Computer from "./Computer";
import KetQuaTroChoi from "./KetQuaTroChoi";
import Player from "./Player";
export default class BaiTapOanTuXi extends Component {
  render() {
    return (
      <div className="game">
        <div className="row text-center mt-5">
          <div className="col-4">
            <Player></Player>
          </div>
          <div className="col-4 ">
            <KetQuaTroChoi />
            <button className="btn btn-success p-3 display-5 mt-5">
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
