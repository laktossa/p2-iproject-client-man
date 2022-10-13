<script>
import { mapActions, mapState } from "pinia";
import { useSocketStore } from "../stores/socket";
import ChatBoxLeft from "./ChatBoxLeft.vue";
import ChatBoxRight from "./ChatBoxRight.vue";
export default {
  components: { ChatBoxLeft, ChatBoxRight },
  computed: {
    ...mapState(useSocketStore, ["messages", "username"]),
  },
  methods: {
    ...mapActions(useSocketStore, ["getMessage"]),
  },
  mounted() {
    this.getMessage();
  },
};
</script>
<template>
  <div
    v-for="(message, i) in messages"
    :key="i"
    :message="message"
    class="grid grid-cols-12 gap-y-2"
  >
    <!-- chatBox -->

    <ChatBoxRight
      v-if="message.username === username"
      :message="message.message"
    />
    <ChatBoxLeft v-else :message="message.message" />
    <!--  -->
  </div>
</template>
