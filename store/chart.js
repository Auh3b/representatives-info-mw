const d3 = require("d3");
import mpsJson from "../static/mps.json";

export const state = () => ({
  mainData: d3.rollup(
    mpsJson,
    v => v.length,
    d => d.district,
    d => d.party
  ),
  chartData: [],
  options: [],
  selectedDistrict: "Lilongwe"
});

export const mutations = {
  setChartData: state => {
    Array.from(state.mainData, ([key, values]) => {
      if (key === state.selectedDistrict) {
        state.chartData = Array.from(values);
      }
    });
  },

  setOptions: state => {
    let data = [];
    Array.from(state.mainData, ([key, values]) => {
      data.push(key);
    });

    state.options = Array.from(new Set(data));
  },

  setSelectedDistrict: (state, payload) => {
    state.selectedDistrict = payload;
    // state.commit("setChartData");
  }
};
