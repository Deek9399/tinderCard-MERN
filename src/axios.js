import axios from "axios";
// url to connect to cards
const instance = axios.create({
  baseURL: "https://tindercard-backend.herokuapp.com/",
});

export default instance;
