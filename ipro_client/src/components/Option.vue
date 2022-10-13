<script>
import { mapActions } from "pinia";
import { useIndexStore } from "../stores";

export default {
  methods: {
    ...mapActions(useIndexStore, ["logout"]),
  },
};
</script>
<template>
  <div class="flex flex-col mt-8">
    <div class="flex flex-row items-center justify-between text-xs">
      <span class="font-bold">Options</span>
      <span
        class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
      ></span>
    </div>
    <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
      <button
        @click="logout()"
        class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
      >
        <div
          class="flex items-center justify-center h-8 w-8 bg-red-500 rounded-full"
        >
          X
        </div>
        <div class="ml-2 text-sm font-semibold">Logout</div>
      </button>
    </div>
  </div>
</template>
