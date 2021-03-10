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
    default:
      return { ...state };
  }
};
export default BaiTapOanTuXiReducer;
