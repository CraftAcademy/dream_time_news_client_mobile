import axios from "axios";
import ShowArticleScreen from '../components/ShowArticleScreen';
import store from "../state/store/store";

const API_URL = "https://dream-time-news-api.herokuapp.com/api";

const Articles = {
  async index() {
    let response = await axios.get(API_URL + "/articles");
    store.dispatch({ type: "UPDATE_ARTICLE_INDEX", payload: response.data });
  },

  async show(id) {
    let response = await axios.get(API_URL + `/articles/${id}`)
    store.dispatch({ type: "SET_CURRENT_ARTICLE", payload: response.data})
    return null
  }
};
export default Articles;
