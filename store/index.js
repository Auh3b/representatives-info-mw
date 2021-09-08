// Data import
import mpsJson from "../static/mps.json";

export const state = () => ({
  allReps: mpsJson,
  filteredReps: [],
  loading: true,
  selectedRep: {},
  repArticles: []
});

export const mutations = {
  // syncronous
  setFilteredReps: (state, payload) => {
    state.filteredReps = payload;
  },
  setSelectedRep: (state, payload) => {
    state.selectedRep = payload;
  },
  setRepArticles: (state, payload) => {
    state.repArticles = payload;
  },
  setLoading: (state, payload) => {
    state.loading = payload;
  }
};

export const getters = {
  // retreave from store
  getAllReps: state => state.allReps,
  getFilteredReps: state => state.filteredReps,
  getSelectedRep: state => state.selectedRep,
  getRepArticles: state => state.repArticles,
  getLoading: state => state.loading
};
