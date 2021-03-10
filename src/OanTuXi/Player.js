import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    // console.log(this.props.mangDatCuoc);
    return (
      <div className="text-center playerGame">
        <div className="theThink">
          <img
            className="mt-3"
            src={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            style={{ width: 60, height: 60, transform: "rotate(180deg)" }}
            alt=""
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          className="mt-4"
          style={{ width: 100, height: 100 }}
          src="./img/player.png"
        ></img>
        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            //  xet Gia Tri Dat Cuoc Them Vien Cho Item Duoc Chon
            let border = {};
            if (item.datCuoc) {
              border = { border: "3px solid orange" };
            }
            return (
              <div className="col-4" key={index}>
                <button
                  onClick={() => {
                    this.props.datCuoc(item.ma);
                  }}
                  style={border}
                  className="btnItem"
                >
                  <img style={{ width: 30 }} src={item.hinhAnh} alt="" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.OanTuXiReducer.mangDatCuoc,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: "CHON_KEO_BUA_BAO",
        maCuoc,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
