import axios from "axios";

const instance = axios.create({
  baseURL: "https://tindercard-backend.herokuapp.com/",
});

export default instance;
