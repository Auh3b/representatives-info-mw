import axios from "axios";

export default function({ store, env }) {
  const API_KEY = env.gapi;
  const cx = env.cxid;
  const name = store.state.selectedRep.name;
  return axios
    .get(
      `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${cx}&q="${name}"&sort=date`
    )
    .then(({ data }) => {
      store.commit("setLoading", false);

      if (+data.searchInformation.totalResults !== 0) {
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
        store.commit("setRepArticles", articles);
      } else {
        store.commit("setRepArticles", []);
      }
    })
    .catch(err => console.log(err));
}
