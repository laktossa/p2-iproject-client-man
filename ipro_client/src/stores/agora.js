import { defineStore } from "pinia";
import AgoraRTC from "agora-rtc-sdk-ng";
let client = AgoraRTC.createClient({ mode: "live", codec: "vp8" });

export const useAgoraStore = defineStore("agora", {
  state: () => {
    return {
      localTracks: {
        videoTrack: true,
        audioTrack: true,
      },

      localTrackState: {
        videoTrackEnabled: true,
        audioTrackEnabled: true,
      },

      remoteUsers: {},

      options: {
        appid: "ceded1ecbcd44287ac11c4ee3d389d3e",
        channel: "lol",
        token:
          "007eJxTYHgVdLTuQ1LHRO/LNYYRn2JXnvc592dq2c+OoN82LxzjouwVGJJTU1JTDFOTk5JTTEyMLMwTkw0Nk01SU41TjC0sU4xTeSPdk3tXeSTblyczMEIhiM/MkJOfw8AAAEH9I3k=",
      },
    };
  },
  actions: {},
});
