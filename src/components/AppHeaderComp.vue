<template>
    <header :class="['myheader',{ mobile: this.isMobile === true ,open: this.menuOpened === true}]">
        <div class="container">
            <!-- logo -->
            <div class="logo">
                <img :src="this.logo" />
            </div>
            <!-- navbtn -->
            <transition name="fade">
                <a
                    v-if="isMobile"
                    v-on:click="hendleMenu"
                    :class="['navBtn',{ open: this.menuOpened === true }]"
                >
                    <span class="l1"></span>
                    <span class="l2"></span>
                    <span class="l3"></span>
                </a>
            </transition>
            <!-- nav menu -->
            <ul v-show="!isMobile" :class="['nav',{ open: this.menuOpened === true }]">
                <li :class="['menuHover',{ active:this.selectMenu === '#about' }]"><a href="#about" @click="handleScrollTo" >About</a></li>
                <li :class="['menuHover',{ active:this.selectMenu === '#skill' }]"><a href="#skill" @click="handleScrollTo" >Experienenc</a></li>
                <li :class="['menuHover',{ active:this.selectMenu === '#works' }]"><a href="#portfolio" @click="handleScrollTo" >Portfolio</a></li>
                <li :class="['menuHover',{ active:this.selectMenu === '#contact' }]"><a href="#contact" @click="handleScrollTo" >Contact</a></li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss">
.myheader {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    background:$color_main;
    z-index: 999999;
    position: fixed;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.3);
    top:0;
    .container {
        max-width: 1280px;
        width: 100%;
        display: flex;
        flex-flow: row;
        align-items: center;
        div.logo {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100px;
            opacity:1;
            img {
                width: 80%;
            }
        }
        a.navBtn {
            width: 60px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            position: absolute;
            right: 0;
            top: 0;
            cursor: pointer;
            background: none;
            padding: 10px;
            span {
                width: 70%;
                height: 1px;
                display: block;
                border-top: 2px solid #000;
                border-radius: 5px;
                margin: 9% 15%;
            }
            &.open .l1 {
                animation: rotateLeft 0.2s forwards ease-in;
                position: absolute;
                left: 10%;
                top: 40%;
                width: 50%;
            }
            &.open .l2 {
                display: none;
            }
            &.open .l3 {
                animation: rotateRight 0.2s forwards ease-in;
                position: absolute;
                left: 10%;
                top: 40%;
                bottom: 0;
                width: 50%;
            }
        }
        ul.nav {
            display: flex;
            margin-left: auto;
            height: 100%;
            align-items: center;
            &.open {
                position: absolute;
                display: block !important;
                animation: fadeIn 0.2s forwards ease-in;
                top: 60px;
            }
            li {
                height: 100%;
                display: flex;
                align-items: center;
                position: relative;
                -webkit-user-select: none;
                @media (max-width:992px) {
                    background: #fff;
                }
                &.active,
                &:hover{
                    &:after{
                        content:'';
                        display: block;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        background: #000;
                    }
                    a{
                        color:$color_main;
                        position: relative;
                        z-index: 99;
                        text-decoration: none;
                    }
                }
                a {
                    padding: 0 20px;
                    width: 100%;
                    color: #000;
                    box-sizing: border-box;
                }
            }
        }
    }
}

.mobile{
    &.open{
        background: #fff;
        border-bottom: 1px solid #ccc;
    }
    .container ul.nav {
        width: 100%;
        right: 0;
        height: 100vh;
        background:rgba(255,255,255,1);
        li{
            height: auto;
        }
        li > a {
            padding: 20px;
            text-align: center;
        }
    }
}

.active:after,
.menuHover:hover:after{
    animation: menuAct .3s forwards;
    @media (max-width:992px) {
        animation: none;
    }
}


@keyframes menuAct{
    0%{
        border-radius: 0 0 300% 300%;
        opacity: 0;
        transform-origin:top left;
        transform: scaleY(0);
    }
    100%{
        border-radius: 0 0 0 0;
        opacity: 1;
        transform-origin:top left;
        transform: scaleY(1);
    }
}

@keyframes fadeIn {
    0% {
        display: block !important;
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes rotateLeft {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(45deg);
    }
}

@keyframes rotateRight {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-45deg);
    }
}
</style>

<script>
import { scroller } from "vue-scrollto/src/scrollTo";

export default {
    name: "myHeader",
    props: {
        logo: String,
        items: Array
    },
    components: {},
    data() {
        return {
            menuOpened: false,
            isMobile: false,
            menuHover:false,
            selectMenu:'#about'
        };
    },
    computed: {
        //判中斷點
        bpDatas() {
            if (!this.bp) {
                return this.default.bp;
            } else {
                return this.bp;
            }
        },
        //判斷使用 props 資料或是使用預設假資料
        itemsDatas() {
            if (!this.items) {
                return this.default.items;
            } else {
                return this.items;
            }
        }
    },
    mounted() {
        //resize
        this.handleResize();
        window.addEventListener("resize", e => {
            this.handleResize();
        });
    },
    methods: {
        //resize event
        handleResize() {
            let window_w = window.innerWidth;
            this.isMobile = window_w <= 992 ? true : false;
            if (this.menuOpened) {
                this.menuOpened = window_w <= 992 ? true : false;
            }
        },
        //menu
        hendleMenu() {
            this.menuOpened = !this.menuOpened;
        },
        //scrollto
        handleScrollTo(e){
            const targetName = e.target.getAttribute('href');
            const scrollTo = scroller();
            this.selectMenu = targetName;
            document.querySelector( targetName ) ? scrollTo( targetName ):'';
            if( this.isMobile && this.menuOpened ){
                this.menuOpened = !this.menuOpened;
            }
        }
    }
};
</script>