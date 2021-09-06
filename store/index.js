import Vuex from "vuex";

// Data import
import mpsJson from "../static/mps.json";
import axios from "axios";

const API_KEY = "AIzaSyAbQuv6-2WSf25UWq2uMucgMbSUxyqG_f4";
const cx = "89df4317c39d31947";

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
    console.log(payload);
    state.selectedRep = payload;
  },
  setRepArticles: (state, payload) => {
    state.repArticles = payload;
  },
  setLoading: (state, payload) => {
    state.loading = payload;
  }
};

export const actions = {
  // asyncronous
  async setRepArticles(state, { name }) {
    const res = await axios(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${cx}&q="${name}"&sort=date`
    );
    const data = await res.data;
    state.commit("setLoading", false);
    // check if any search results where retreaved
    if (+data.searchInformation.totalResults !== 0) {
      // if available
      // retreave needed attributes
      const articles = data.items.map(item => {
        const newArticleDetails = {
          id: item.cacheId,
          link: item.link,
          summary: item.snippet,
          title: item.title.split("|")[0],
          author: item.displayLink
        };
        return newArticleDetails;
      });
      // update the articles state
      state.commit("setRepArticles", articles);
    } else {
      state.commit("setRepArticles", []);
    }
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
