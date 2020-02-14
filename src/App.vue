<script>
import axios from 'axios'
import appHeader from "@/components/AppHeaderComp.vue";
import { TweenMax, TimelineMax, gsap } from "gsap";
import { CSSRulePlugin } from "gsap/all";
import { scroller } from "vue-scrollto/src/scrollTo";
import home from "@/views/Home.vue";

export default {
    name: "App",
    components: {
        appHeader,
        home
    },
    data() {
        return {
            logo:'img/logo_svg.svg',
            headerDatas:[],
            homeDatas:{
                about:{},
                pro:{},
                skill:{}
            }
        };
    },
    mounted(){

        //scroll
        window.addEventListener("scroll", e => {
            this.scrollspy()
        });

        //捲動過場防呆
        var menu = document.querySelectorAll(".nav li> a");
        menu.forEach((value, index) => {
            value.addEventListener('mouseover', e => {
                this.menuHover = true;
            });

            value.addEventListener('mouseout', e => {
                this.menuHover = false;
            });
        });

        //load data
        axios.get('data.json').then(response =>{
            this.homeDatas.skill = response.data.skill;
            this.homeDatas.about = response.data.about;
            this.homeDatas.pro = response.data.portfolio;
            //console.log( response.data );
        });
    },
    methods:{
        /* -------------------- 捲動監控 -------------------- */
        scrollspy() {
            let window_h = window.innerHeight;
            var home = document.querySelectorAll(".home");
            var menu = document.querySelectorAll(".nav li");
            var sections = document.querySelectorAll(".section-spy");
            let secAry = [];

            home.forEach(el => {
                var showNum = window_h / 2;
                var scrollTop = Math.abs(Math.floor(el.getBoundingClientRect().top));
                var elBottom = el.getBoundingClientRect().bottom;

                sections.forEach((value, index) => {
                    secAry.push(value.offsetTop);
                });

                menu.forEach((value, index) => {
                    if (index < menu.length - 1) {
                        if ( scrollTop >= secAry[0] - showNum && scrollTop < secAry[1] - showNum ) {
                            if( !this.menuHover ) this.$refs.myheader.selectMenu = "#about";
                        }
                        if ( scrollTop >= secAry[1] - showNum && scrollTop < secAry[2] - showNum ) {
                            if( !this.menuHover ) this.$refs.myheader.selectMenu = "#skill";
                        }
                        if ( scrollTop >= secAry[2] - showNum && scrollTop < secAry[3] - showNum ) {
                            if( !this.menuHover ) this.$refs.myheader.selectMenu = "#works";
                        }
                        if ( scrollTop > secAry[3] - showNum ) {
                            if( !this.menuHover ) this.$refs.myheader.selectMenu = "#contact";
                        }
                    }  
                });
            });
        }
    }
};
</script>

<template>
	<div id="app">
        <div id="lightBox" style="background:#fff" class="lity-hide"></div>
		<app-header ref="myheader" :items="this.headerDatas" :logo="this.logo" ></app-header>
		<home :portfolioDatas="homeDatas"></home>
        <div class="footer">© 2020 Designed by 8yen in Taiwan.</div>
	</div>
</template>

<style lang="scss">
html,body{
    margin: 0;
    padding:0;
    background: #fff!important;
    font-size: 13px;
}
.lity{
    z-index: 9999999!important;
}
#app{
    background: none;
}

ul,li{
    padding: 0;
    margin:0;
    //list-style: none;
}

a{
    text-decoration: none;
}
.footer{
    padding: 10px;
    text-align: center;
    font-size: 12px;
    color: #fff;
    background: #333;
}
</style>
