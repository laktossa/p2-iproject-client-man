import { defineStore } from "pinia";
import axios from "axios";
let url = "http://localhost:3000";

export const useIndexStore = defineStore("index", {
  state: () => {},
  actions: {
    async register(obj) {
      try {
        await axios.post(`${url}/register`, obj);

        this.$router.push("/login");
      } catch (error) {
        console.log(error.response.data.msg, error.response.status);
      }
    },
    async login(obj) {
      try {
        let { data } = await axios.post(`${url}/login`, obj);
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("username", data.username);
        this.$router.push("/");
      } catch (error) {
        console.log(error.response.data.msg, error.response.status);
      }
    },
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
});
