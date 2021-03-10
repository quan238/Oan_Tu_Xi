const stateDefault = {
  mangDatCuoc: [
    {
      ma: "keo",
      hinhAnh: "./img/keo.png",
      datCuoc: true,
    },
    {
      ma: "bua",
      hinhAnh: "./img/bua.png",
      datCuoc: false,
    },
    {
      ma: "bao",
      hinhAnh: "./img/bao.png",
      datCuoc: false,
    },
  ],
  ketQua: "I'm iron man, I luv u 3000",
  soBanThang: 0,
  soBanChoi: 0,
  computer: {
    ma: "bao",
    hinhAnh: "./img/bao.png",
    datCuoc: false,
  },
};

const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      // reset mang Cuoc
      let mangCuocUpdate = [...state.mangDatCuoc];
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      // tim ra ma Cuoc de change trang thai cuoc ung voi ma cuoc do

      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }
    case "RANDOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;
      return { ...state };
    }
    case "END_GAME": {
      state.soBanChoi += 1;
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;
      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hòa";
          } else if (computer.ma === "bua") {
            state.ketQua = "Thua";
          } else {
            state.ketQua = "Thắng";
            state.soBanThang++;
          }
          break;
        case "bua":
          if (computer.ma === "bua") {
            state.ketQua = "Hòa";
          } else if (computer.ma === "bao") {
            state.ketQua = "Thua";
          } else {
            state.ketQua = "Thắng";
            state.soBanThang++;
          }
          break;
        case "bao":
          if (computer.ma === "bao") {
            state.ketQua = "Hòa";
          } else if (computer.ma === "keo") {
            state.ketQua = "Thua";
          } else {
            state.ketQua = "Thắng";
            state.soBanThang++;
          }
          break;
        default:
          state.ketQua = "I'm iron man, I luv u 3000";
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default BaiTapOanTuXiReducer;
