import React, { Component } from "react";
import {connect} from"react-redux"

 class KetQuaTroChoi extends Component {
  render() {
    return (
      <div>
        <div className=" text-warning">{this.props.ketQua}</div>
        <div className=" text-success">So Ban Thang: {this.props.soBanThang}</div>
        <div className=" text-success">Tong So Ban Choi:{this.props.soBanChoi}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ketQua: state.OanTuXiReducer.ketQua,
    soBanThang: state.OanTuXiReducer.soBanThang,
    soBanChoi: state.OanTuXiReducer.soBanChoi,
 
  };
};
export default connect(mapStateToProps)(KetQuaTroChoi);
