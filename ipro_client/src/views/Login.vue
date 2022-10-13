<script>
import { mapActions } from "pinia";
import { useIndexStore } from "../stores/index";

export default {
  data() {
    return {
      obj: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useIndexStore, ["login"]),
  },
};
</script>

<template>
  <section class="py-20 lg:py-[120px]">
    <div class="">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4">
          <div
            class="max-w-[525px] mx-auto text-center bg-white rounded-lg relative overflow-hidden py-16 px-10 sm:px-12 md:px-[60px]"
          >
            <div class="mb-10 md:mb-16 text-center">
              <a
                href="javascript:void(0)"
                class="inline-block max-w-[160px] mx-auto"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
              </a>
            </div>
            <form @submit.prevent="login(obj)">
              <div class="mb-6">
                <input
                  v-model="obj.email"
                  type="text"
                  placeholder="Email"
                  class="w-full rounded-md border bordder-[#E9EDF4] py-3 px-5 bg-[#FCFDFE] text-base text-body-color placeholder-[#ACB6BE] outline-none focus-visible:shadow-none focus:border-primary"
                />
              </div>
              <div class="mb-6">
                <input
                  v-model="obj.password"
                  type="password"
                  placeholder="Password"
                  class="w-full rounded-md border bordder-[#E9EDF4] py-3 px-5 bg-[#FCFDFE] text-base text-body-color placeholder-[#ACB6BE] outline-none focus-visible:shadow-none focus:border-primary"
                />
              </div>
              <div class="mb-10">
                <button
                  type="submit"
                  class="w-full h-12 rounded-md border bordder-primary py-3 px-5 bg-primary text-base text-black cursor-pointer hover:bg-opacity-90 transition"
                >
                  Sign In
                </button>
              </div>
            </form>

            <p class="text-base text-[#adadad]">
              Not a member yet?
              <a
                @click.prevent="$router.push('/register')"
                href="javascript:void(0)"
                class="text-primary hover:underline"
              >
                Sign Up
              </a>
            </p>
            <div>
              <span class="absolute top-1 right-1">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="1.39737"
                    cy="38.6026"
                    r="1.39737"
                    transform="rotate(-90 1.39737 38.6026)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.39737"
                    cy="1.99122"
                    r="1.39737"
                    transform="rotate(-90 1.39737 1.99122)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.6943"
                    cy="38.6026"
                    r="1.39737"
                    transform="rotate(-90 13.6943 38.6026)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.6943"
                    cy="1.99122"
                    r="1.39737"
                    transform="rotate(-90 13.6943 1.99122)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="25.9911"
                    cy="38.6026"
                    r="1.39737"
                    transform="rotate(-90 25.9911 38.6026)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="25.9911"
                    cy="1.99122"
                    r="1.39737"
                    transform="rotate(-90 25.9911 1.99122)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.288"
                    cy="38.6026"
                    r="1.39737"
                    transform="rotate(-90 38.288 38.6026)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.288"
                    cy="1.99122"
                    r="1.39737"
                    transform="rotate(-90 38.288 1.99122)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.39737"
                    cy="26.3057"
                    r="1.39737"
                    transform="rotate(-90 1.39737 26.3057)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.6943"
                    cy="26.3057"
                    r="1.39737"
                    transform="rotate(-90 13.6943 26.3057)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="25.9911"
                    cy="26.3057"
                    r="1.39737"
                    transform="rotate(-90 25.9911 26.3057)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.288"
                    cy="26.3057"
                    r="1.39737"
                    transform="rotate(-90 38.288 26.3057)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="1.39737"
                    cy="14.0086"
                    r="1.39737"
                    transform="rotate(-90 1.39737 14.0086)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="13.6943"
                    cy="14.0086"
                    r="1.39737"
                    transform="rotate(-90 13.6943 14.0086)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="25.9911"
                    cy="14.0086"
                    r="1.39737"
                    transform="rotate(-90 25.9911 14.0086)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="38.288"
                    cy="14.0086"
                    r="1.39737"
                    transform="rotate(-90 38.288 14.0086)"
                    fill="#3056D3"
                  />
                </svg>
              </span>
              <span class="absolute left-1 bottom-1">
                <svg
                  width="29"
                  height="40"
                  viewBox="0 0 29 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="2.288"
                    cy="25.9912"
                    r="1.39737"
                    transform="rotate(-90 2.288 25.9912)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="14.5849"
                    cy="25.9911"
                    r="1.39737"
                    transform="rotate(-90 14.5849 25.9911)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.7216"
                    cy="25.9911"
                    r="1.39737"
                    transform="rotate(-90 26.7216 25.9911)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="2.288"
                    cy="13.6944"
                    r="1.39737"
                    transform="rotate(-90 2.288 13.6944)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="14.5849"
                    cy="13.6943"
                    r="1.39737"
                    transform="rotate(-90 14.5849 13.6943)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.7216"
                    cy="13.6943"
                    r="1.39737"
                    transform="rotate(-90 26.7216 13.6943)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="2.288"
                    cy="38.0087"
                    r="1.39737"
                    transform="rotate(-90 2.288 38.0087)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="2.288"
                    cy="1.39739"
                    r="1.39737"
                    transform="rotate(-90 2.288 1.39739)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="14.5849"
                    cy="38.0089"
                    r="1.39737"
                    transform="rotate(-90 14.5849 38.0089)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.7216"
                    cy="38.0089"
                    r="1.39737"
                    transform="rotate(-90 26.7216 38.0089)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="14.5849"
                    cy="1.39761"
                    r="1.39737"
                    transform="rotate(-90 14.5849 1.39761)"
                    fill="#3056D3"
                  />
                  <circle
                    cx="26.7216"
                    cy="1.39761"
                    r="1.39737"
                    transform="rotate(-90 26.7216 1.39761)"
                    fill="#3056D3"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
