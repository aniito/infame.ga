<template>
  <div class="header">
    <div class="search-bar">
      <input type="text" placeholder="Chercher" disabled/>
    </div>
  </div>
  <div class="video-stream" v-if="title || this.$route.params.titre">
    <center>
      <video
        v-if="this.$route.params.titre"
        id="my_video_1"
        class="infamevideo video-js vjs-default-skin anim"
        width="640px"
        height="267px"
        controls
        preload="none"
        :poster="img"
        data-setup='{ "aspectRatio":"940:620", "playbackRates": [1, 1.5, 2] }'
      >
        <source :src="this.$route.params.url" type="video/mp4" />
      </video>

      <video
        v-else
        id="my_video_1"
        class="infamevideo video-js vjs-default-skin anim"
        width="640px"
        height="267px"
        controls
        preload="none"
        :poster="poster"
        data-setup='{ "aspectRatio":"940:620", "playbackRates": [1, 1.5, 2] }'
      >
        <source :src="videourlink" type="video/mp4" />
      </video>
    </center>
    <div class="video-detail">
      <div class="video-content">
        <div
          class="video-p-wrapper anim"
          style="--delay: 0.1s; margin-left: 10px"
        >
          <div class="author-img__wrapper video-author video-p">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-check"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <img class="author-img" :src="imglink" />
          </div>
          <div class="video-p-detail">
            <div class="video-p-name">Infame</div>
          </div>
          <div class="button-wrapper">
            <button class="like" @click="partager()">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.435 2.582a1.933 1.933 0 00-1.93-.503L3.408 6.759a1.92 1.92 0 00-1.384 1.522c-.142.75.355 1.704 1.003 2.102l5.033 3.094a1.304 1.304 0 001.61-.194l5.763-5.799a.734.734 0 011.06 0c.29.292.29.765 0 1.067l-5.773 5.8c-.428.43-.508 1.1-.193 1.62l3.075 5.083c.36.604.98.946 1.66.946.08 0 .17 0 .251-.01.78-.1 1.4-.634 1.63-1.39l4.773-16.075c.21-.685.02-1.43-.48-1.943z"
                />
              </svg>
              Partager
            </button>
            <button class="like red">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.85 2.5c.63 0 1.26.09 1.86.29 3.69 1.2 5.02 5.25 3.91 8.79a12.728 12.728 0 01-3.01 4.81 38.456 38.456 0 01-6.33 4.96l-.25.15-.26-.16a38.093 38.093 0 01-6.37-4.96 12.933 12.933 0 01-3.01-4.8c-1.13-3.54.2-7.59 3.93-8.81.29-.1.59-.17.89-.21h.12c.28-.04.56-.06.84-.06h.11c.63.02 1.24.13 1.83.33h.06c.04.02.07.04.09.06.22.07.43.15.63.26l.38.17c.092.05.195.125.284.19.056.04.107.077.146.1l.05.03c.085.05.175.102.25.16a6.263 6.263 0 013.85-1.3zm2.66 7.2c.41-.01.76-.34.79-.76v-.12a3.3 3.3 0 00-2.11-3.16.8.8 0 00-1.01.5c-.14.42.08.88.5 1.03.64.24 1.07.87 1.07 1.57v.03a.86.86 0 00.19.62c.14.17.35.27.57.29z"
                />
              </svg>
              Liker
            </button>
          </div>
        </div>

        <div
          v-if="this.$route.params.titre"
          class="video-p-title anim"
          style="--delay: 0.2s"
        >
          {{ titre }}
        </div>
        <div v-else class="video-p-title anim" style="--delay: 0.2s">
          {{ title }}
        </div>

        <div class="video-p-subtitle anim" style="--delay: 0.3s">
          {{ this.$route.params.lien }}
        </div>
      </div>
    </div>
  </div>
  <div class="video-stream" v-else>
    <center>
      <img :src="gros" id="errr" class="anim" alt="" style="--delay: 0.3s" />
      <div class="video-p-title anim" style="--delay: 0.2s">
        Bah alors ce lien ne marche pas ?
      </div>
    </center>
  </div>
</template>

<script>
import donnes from "../components/Home.vue";
import infam from "../assets/img/infame.png";
import iziToast from "../../node_modules/izitoast/dist/js/iziToast.min.js";
import "../../node_modules/izitoast/dist/css/iziToast.min.css";
import "../../node_modules/boxicons/css/boxicons.min.css";
import errr from "../assets/img/grp.png";
export default {
  name: "VideoOne",
  data: function () {
    return {
      imglink: infam,
      poster: localStorage.getItem("img"),
      videourlink: localStorage.getItem("lien"),
      title: localStorage.getItem("titre"),
      gros: errr,
    };
  },
  props: {
    titre: String,
    lien: String,
    img: String,
    watch: String,
  },
  mounted() {
    if (
      this.$route.params.titre != undefined &&
      this.$route.query.watch == undefined
    ) {
      document.title = this.$route.params.titre;
      localStorage.setItem("titre", this.$route.params.titre);
      localStorage.setItem("lien", this.$route.params.url);
      localStorage.setItem("img", this.$route.params.img);
      localStorage.setItem("watch", this.$route.params.watch);
    } else {
      if (localStorage.getItem("titre")) {
        document.title = localStorage.getItem("titre");
      } else {
        document.title = "Il semble y avoir une erreur !";
      }
    }
  },

  methods: {
    partager: function () {
      navigator.clipboard.writeText(
        window.location.href.split("?watch=")[0] +
          "?watch=" +
          localStorage.getItem("watch")
      );
      iziToast.info({
        timeout: 5000,
        title: "Copié",
        message: "",
        icon: "bx bxs-copy",
      });
    },
  },
  beforeCreate: function () {
    var regarder = this.$route.query.watch;
    if (regarder != undefined) {
      donnes.data().videos.forEach(function (item) {
        if (regarder == item.watch && item.titre) {
          console.log(item);
          localStorage.setItem("titre", item.titre);

          localStorage.setItem("lien", item.lien);

          localStorage.setItem("img", item.img);

          localStorage.setItem("watch", item.watch);
        }
      });
    }
  },
};
</script>

<style>
.infamevideo {
  width: 50vw;
  height: 100%;
  left: 0px;
  top: 0px;
}
@media screen and (max-width: 1090px) {
  .infamevideo {
    width: 100vw;
  }
}
video[poster] {
  object-fit: contain;
}
.wrapper {
  background-color: #0c0c0c;
}
.video-p-title,
.author-img__wrapper video-author video-p {
  margin-left: 10px;
}
#errr {
  width: 278px;
  height: 280px;
}
</style>