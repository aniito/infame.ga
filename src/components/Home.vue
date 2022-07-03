<template>
      <div class="header">
         <div class="search-bar">
            <input type="text" placeholder="Chercher" v-model="chercher" >
         </div>
      </div>
      <div class="main-container">
         <div class="small-header anim" style="--delay: .3s">Infame - Videos</div>
         <div class="videos" id="">
            <div id="" class="video anim" style="--delay: .5s" v-for="video in searching" v-bind:key="video">
               <router-link :to="{ name: 'Video', params: { titre: video.titre, url: video.lien, img: video.img, watch: video.watch }}">

                  <div class="video-time">{{ video.time }}</div>
                  <div class="video-wrapper">
                     <video muted="" class="responsive-background" :poster="video.img" >
                        <source type="video/mp4">
                     </video>
                     <div class="author-img__wrapper video-author">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                           <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <img class="author-img" :src="video.auteur" />
                     </div>
                  </div>
                  <div class="video-by">{{video.auteurname}}</div>
                  <div class="video-name">{{ video.titre }}</div>
                  <div class="video-view"></div>
            
               </router-link>
            </div>
         </div>
         
         
         

      </div>
      
</template>

<script>
import infam from "../assets/img/infame.png";
import video1img from "../assets/img/1.jpg";
import video2img from "../assets/img/2.jpg";
import video3img from "../assets/img/3.jpg";
import video4img from "../assets/img/4.jpg";
import video5img from "../assets/img/5.jpg";
import video7img from "../assets/img/7.jpg";
import video8img from "../assets/img/8.jpg";

import videosportnassi from "../assets/img/sporttrucnassi.jpg";

export default{
    name: 'HomeVideo',
    mounted(){document.title = "Infame"},
    data: function(){
       
        return{
            chercher: '',
            videos:[{
                
                    titre: "JEN FINIS AVEC LEXTREME GAUCHE (pas dur en meme temps)",
                    lien: "https://seed307.bitchute.com/fTbIlqE58Wxy/Djo2UYh7rfvM.mp4",  
                    time: "7:47",
                    auteur: infam,
                    auteurname: "infame",
                    img: video1img,
                    watch: "ZWlucyB2aWRlbw==",
                

                },{
                    titre: "GOOGLE EST RACISTE LANARQUE BLACKLIVESMATTER",
                    lien:"https://seed122.bitchute.com/fTbIlqE58Wxy/UzVh83SEK7Tb.mp4",
                    time: "9:33",
                    auteur: infam,
                    auteurname: "infame",
                    img: video2img,
                    watch: "endlaSB2aWRlbw==",                    
                },{
                    titre: "SILENCE FEMELLE tu l a bien cherché",
                    lien: "https://seed306.bitchute.com/fTbIlqE58Wxy/iq2vye8Dd2YN.mp4",
                    time: "7:01",
                    auteur: infam,
                    auteurname: "infame",
                    img: video3img,
                    watch: "ZHJlaSB2aWRlbw==",
                },{
                    titre: "SANDRINE ROUSSEA GROSSE FOLLE",
                    lien: "https://seed122.bitchute.com/fTbIlqE58Wxy/4PJDaSokQR3Z.mp4",
                    time: "8:01",
                    auteur: infam,
                    auteurname: "infame",
                    img: video4img,
                    watch: "dmllciB2aWRlbw==",
                },{
                    titre: "une FEMME PEUT ETRE DROLE ?",
                    lien:"https://seed167.bitchute.com/fTbIlqE58Wxy/oNDBgFc0ZyVo.mp4",
                    time: "10:09",
                    auteur: infam,
                    auteurname: "infame",
                    img: video5img,
                    watch: "ZsO8bqzdmYgdmlkZW8=",
                },{
                   titre: "LE SPORT UN TRUC DE NAZI LE CULTE DU CORPS",
                   time: "11:24",
                   lien: "https://seed122.bitchute.com/fTbIlqE58Wxy/viz7mENR61UH.mp4",
                   auteur: infam,
                   auteurname: "infame",
                   img: videosportnassi,
                   watch: "emllYmVussssHZpZGVv",

                },{ 
                   titre: "PURIFICATION ULTIME de FÉMINISTE",
                   time: "8:22",
                   lien: "https://seed126.bitchute.com/fTbIlqE58Wxy/5kicJobQv8K9.mp4",
                   auteur: infam,
                   auteurname: "infame",
                   img: video7img,
                   watch: "emllYmVuIHsqdqsdZpZGVv",
                },{ 
                   titre: "des SQUATTEURS PORTENT PLAINTE contre le proprietaire oui tas bien lu fdp",
                   time: "12:54",
                   lien: "https://seed306.bitchute.com/fTbIlqE58Wxy/psncxGJhpzVR.mp4",
                   auteur: infam,
                   auteurname: "infame",
                   img: video7img,
                   watch: "emllYmVuIHsqdqsdZpZGVvqs",
                },{ 
                   titre: "MICRO TROTTOIR GAUCHISTE",
                   time: "8:37",
                   lien: "https://seed125.bitchute.com/fTbIlqE58Wxy/6qLweowkl6Id.mp4",
                   auteur: infam,
                   auteurname: "infame",
                   img: video8img,
                   watch: "YWNodCB2aWRlbw==",
                }
            ]
        }
    },
    computed: {
       searching(){
          return this.videos.filter(video => video.titre.toLowerCase().includes(this.chercher.toLowerCase()))
       }
    },
}
</script>

<style>
video[poster]{
  object-fit: cover;
}
a{
   text-decoration: none;
   color: inherit;
}
</style>
