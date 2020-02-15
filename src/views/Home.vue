<template>
    <div class="home">

        <!-- KV -->
        <!--section id="kv">
            <div class="container">
                <div class="kv-title">
                    {{ this.$parent.homeDatas.kvImgs[this.kv.slickActive].title }}
                </div>
            </div>
            <VueSlickCarousel class="kv-slick" v-bind="slickOptions" @afterChange="handleSlick">
                <div class="item w-100" v-for="kvItem in this.$parent.homeDatas.kvImgs" :key="kvItem.id">
                    <img class="w-100" :src="kvItem.img">
                </div>
            </VueSlickCarousel>
        </section-->

        <!-- About -->
        <section id="about" class="section-spy">
            <div class="container box row justify-content-between align-items-center no-gutters">
                <div class="text col-lg-6 no-gutters p-3 p-lg-0">
                    <h2 class="section-title col-12 text-center mb-5 p-0">
                        <span>About</span>
                    </h2>
                    <h4 class="mb-4">{{ this.portfolioDatas.about.title }}</h4>
                    <p>{{ this.portfolioDatas.about.content }}</p>
                </div>
                <div ref="pic1" class="pic col-lg-5">
                    <img src="img/8img-3.svg">
                </div>
            </div>
        </section>

        <!-- Skill -->
        <section id="skill" class="section-spy">
            <div class="container box row justify-content-between align-items-center no-gutters">
                <div class="text col-lg-6 no-gutters p-3 p-lg-0">
                    <h2 class="section-title col-12 text-center mb-5 p-0">
                        <span>Experienenc / Skill</span>
                    </h2>
                    <h4 class="mb-4">{{ this.portfolioDatas.skill.exptitle }}</h4>
                    <ul class="info border-bottom pb-3 mb-3">
                        <li class="row no-gutters mb-2" 
                        v-for="item in this.portfolioDatas.skill.expData" 
                        :key="item.id">
                            {{ item }}
                        </li>
                    </ul>
                    <h4 class="mb-4">{{ this.portfolioDatas.skill.sktitle }}</h4>
                    <ul class="info">
                        <li class="row no-gutters mb-2" 
                        v-for="item in this.portfolioDatas.skill.skillData" 
                        :key="item.id">
                            {{ item }}
                        </li>
                    </ul>
                </div>
                <div class="pic col-lg-5">
                    <img src="img/8img-1.svg">
                </div>
            </div>
        </section>

        <!-- portfolio -->
        <section id="portfolio" class="section-spy">
            <div class="container box row justify-content-between align-items-center no-gutters">
                
                <div class="form-box col-lg-12 p-3 p-lg-0">
                    <h2 class="section-title col-12 text-center mb-5 p-0">
                        <span>Portfolio</span>
                    </h2>

                    <!--網頁設計與前端-->
                    <h4 class="mb-4">網頁設計與前端</h4>
                    <div class="row">
                        <div v-for="item in portfolioDatas.pro.webDatas" :key="item.id" class="col-lg-3">
                            <item-card class="" 
                            :img="item.img" 
                            :title="item.title" 
                            :content="item.content"
                            :link="item.link"
                            ></item-card>
                        </div>
                    </div>
                    <!--插畫設計-->
                    <h4 class="mb-4">插畫設計</h4>
                    <div class="row">
                        <div v-for="item in portfolioDatas.pro.illDatas" :key="item.id" class="col-lg-3">
                            <item-card class="" 
                            :img="item.img" 
                            :title="item.title" 
                            :content="item.content"
                            :href="item.link"
                            data-lity
                            ></item-card>
                        </div>
                    </div>
                    <!--IP經營-->
                    <h4 class="mb-4">IP經營</h4>
                    <div class="row">
                        <div v-for="item in portfolioDatas.pro.ipDatas" :key="item.id" class="col-lg-3">
                            <item-card class="" 
                            :img="item.img" 
                            :title="item.title" 
                            :content="item.content"
                            :href="item.link"
                            data-lity
                            ></item-card>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact -->
        <section id="contact" class="section-spy">
            <div class="container box row justify-content-between align-items-center no-gutters">
                
                <div class="form-box col-lg-6 p-3 p-lg-0">
                    <h2 class="section-title col-12 text-center mb-5 p-0">
                        <span>Contact</span>
                    </h2>
                    <h4 class="mb-4">請與我聯絡</h4>
                    <ul class="info pt-4">
                        <li class="row no-gutters mb-2">
                            <span class="badge badge-secondary col-2 pt-2 pb-2 pl-3 pr-3 mr-3 rounded-pill">NAME</span>
                            <div class="col-auto">劉 怡 德</div>
                        </li>
                        <li class="row no-gutters mb-2">
                            <span class="badge badge-secondary col-2 pt-2 pb-2 pl-3 pr-3 mr-3 rounded-pill">LINE</span>
                            <div class="col-auto">yider</div>
                        </li>
                        <li class="row no-gutters mb-2">
                            <span class="badge badge-secondary col-2 pt-2 pb-2 pl-3 pr-3 mr-3 rounded-pill">MAIL</span>
                            <div class="col-auto">superyider@gmail.com</div>
                        </li>
                        <li class="row no-gutters mb-2">
                            <span class="badge badge-secondary col-2 pt-2 pb-2 pl-3 pr-3 mr-3 rounded-pill">MOBILE</span>
                            <div class="col-auto">+886-939-180-232</div>
                        </li>
                        <li class="row no-gutters mb-2">
                            <span class="badge badge-secondary col-2 pt-2 pb-2 pl-3 pr-3 mr-3 rounded-pill">粉絲專頁</span>
                            <a href="https://www.facebook.com/eightyen/" target="_blank" class="col-auto">https://www.facebook.com/eightyen/</a>
                        </li>
                    </ul>
                </div>

                <div class="pic col-lg-4">
                    <img src="datas/me.jpg" class="w-100">
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { scroller } from "vue-scrollto/src/scrollTo";
import itemCard from "@/components/AppItemCardComp.vue";

export default {
    name: "home",
    components: {
        //VueSlickCarousel,
        itemCard
    },
    props:{
        portfolioDatas:Object
    },
    data() {
        return {
            result: "",
            kv:{
                slickActive:0
            },
            slickOptions:{
                arrows:true,
                dots:true,
                slidesToShow:1,
                slidesToScroll:1,
                slidesPerRow:1,
                autoplay:true,
                autoplaySpeed:3000
            },
            formDatas:{
                name:"",
                email:"",
                phone:""
            },
            portfolio:{}
        };
    },
    mounted(){
        //console.log(this.portfolioDatas)
    },
    methods: {
        handleSlick(currentSlick){
            this.kv.slickActive = currentSlick
        },
        submitFormData(){
            //console.log(this.formDatas);
        }
    }
};
</script>

<style lang="scss">
.home {
    margin: 0 auto;
    width: 100%;
    padding-top: 60px;
    justify-content: center;
    background: none;
    max-width: 1920px;
    background: #efefef;
    input::placeholder{
        color: #ccc;
    }
}

.box{
    h4{
        color: #666;
        font-size: 1.6rem;
        font-weight: normal;
    }
    p{
        font-size: 1.1rem;
        line-height: 3rem;
        color:#666;
        text-align: justify;
    }
    .info{
        color:#666;
    }
}

h2.section-title{
    color:#666;
    display: flex;
    align-items: center;
    font-size: 4rem;
    font-weight:200;
    letter-spacing: 3px;
    border-left:5px solid $color_main;
    @media (max-width:992px) {
        font-size: 2rem;
        font-weight:400;
        letter-spacing: 0px;
        border-left:10px solid $color_main;
        padding-bottom: 30px;
    }
    &:before{
        content:'';
        display: block;
        width: 90px;
        height: 90px;
        transform: scale(.8);
        @media (max-width:992px) {
            transform: scale(.6);
        }
    }
}
#kv{
    position: relative;
    display: none;
    .container{
        position: absolute;
        height: 100%;
        top:0;
        left: 0%;
        right: 0%;
        z-index: 999;
        pointer-events: none;
        .kv-title{
            position: absolute;
            z-index: 999;
            background:$color_main;
            padding:20px 30px;
            color: #000;
            font-size: 20px;
            bottom: 30px;
            left: 0;
            opacity: .9;
            //transform: translate(-50%,-50%);
            -webkit-user-select: none;
            
            @media (max-width:992px) {
                font-size: 3vw;
                transform: translate(0);
            }
        }
    }
}
#about{
    padding: 60px 0;
    .container{
        margin: 80px auto 30px;
        @media (max-width:992px) {
            margin-top: 0px
        }
        h2:before{
            background: url('https://8yen.tw/resume/images/icons.png') 0 0 no-repeat;
        }
    }
    .submit{
        margin: 0 auto;
    }
}
#skill{
    padding: 60px 0;
    background: #fff;
    .container{
        margin: 30px auto 30px;
        h2:before{
            background: url('https://8yen.tw/resume/images/icons.png') -90px 0 no-repeat;
        }
        ul{
            li{

            }
        }
    }
    .submit{
        margin: 0 auto;
    }
}
#portfolio{
    padding: 60px 0;
    .container{
        margin: 30px auto 30px;
        h2:before{
            background: url('https://8yen.tw/resume/images/icons.png') -360px 0 no-repeat;
        }
    }
    .submit{
        margin: 0 auto;
    }
    .more{
        float:right;
    }
}
#contact{
    padding: 60px 0;
    background: #fff;
    .container{
        margin: 30px auto 30px;
        h2:before{
            background: url('https://8yen.tw/resume/images/icons.png') -270px 0 no-repeat;
        }
        a{
            color:#666!important;
        }
    }
    .submit{
        margin: 0 auto;
    }
}
.kv-slick{
    position: relative;
    &:after{
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        //@include gradient(90deg,rgba(0, 0, 0, .9),rgba(0, 0, 0, .7),rgba(0, 0, 0, 0),60%);
        pointer-events: none;
    }
    .slick-dots{
        bottom: 30px;
        button:before,
        .slick-active button:before{
            color:$color_main;
        }
    }
    .slick-next{
        right: 15px;
        width: 40px;
        height: 40px;
        z-index: 99;
        //background:rgba(0,0,0,0.5);
        border-radius: 5px;
        &:before{
            content:'';
            display:block;
            width: 50%;
            height: 4px;
            opacity: 1;
            top: 48%;
            left: 25%;
            border-radius: 20px;
            position: absolute;
            background: $color_main;
            transform-origin: top right;
            transform: rotate(45deg);
            box-shadow: 0 2px 2px 0px rgba(0,0,0,0.1);
        }
        &:after{
            content:'';
            display:block;
            width: 50%;
            height: 4px;
            opacity: 1;
            bottom:48%;
            left: 25%;
            border-radius: 20px;
            position: absolute;
            background: $color_main;
            transform-origin: bottom right;
            transform: rotate(-45deg);
            box-shadow: 0 2px 2px 0px rgba(0,0,0,0.1);
        }
    }
    .slick-prev{
        left: 15px;
        width: 40px;
        height: 40px;
        z-index: 99;
        //background:rgba(0,0,0,0.5);
        border-radius: 5px;
        &:before{
            content:'';
            display:block;
            width: 50%;
            height: 4px;
            opacity: 1;
            top: 48%;
            left: 25%;
            border-radius: 20px;
            position: absolute;
            background: $color_main;
            transform-origin: top left;
            transform: rotate(-45deg);
            box-shadow: 0 2px 2px 0px rgba(0,0,0,0.1);
        }
        &:after{
            content:'';
            display:block;
            width: 50%;
            height: 4px;
            opacity: 1;
            bottom:48%;
            left: 25%;
            border-radius: 20px;
            position: absolute;
            background: $color_main;
            transform-origin: bottom left;
            transform: rotate(45deg);
            box-shadow: 0 2px 2px 0px rgba(0,0,0,0.1);
        }
    }
    img{
        @include myblur(10%);
    }
}
img{
    outline: 0;
    margin-bottom: 0;
}
</style>
