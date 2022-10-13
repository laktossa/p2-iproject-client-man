import { defineStore } from "pinia";
import io from "socket.io-client";

export const useSocketStore = defineStore("socket", {
  state: () => {
    return {
      username: localStorage.getItem("username"),
      messages: [],
      id: [],
      socket: io("http://localhost:3000"),
    };
  },
  actions: {
    send(message) {
      this.socket.emit("message", { message, username: this.username });
    },
    getMessage() {
      this.socket.on("newMessage", (data) => {
        this.messages.push(data);
      });
    },
  },
});
