//header
Vue.component('my-header', {
    data() {
        return {
            menuOpen:false,
            currentItem: null,
            nav: [
                { name: "找設計師", link: "detail.html" },
                { name: "嚴選名品", link: "1" },
                {
                    name: "文章報導",
                    link:"javascript:",
                    sub: [
                        { name: "最新報導", link: "2" },
                        { name: "熱門報導", link: "2" },
                        { name: "室內設計", link: "2" },
                        { name: "生活美學", link: "2" }
                    ]
                },
                { name: "國際獎項", link: "1" },
                {
                    name: "設計雜誌",
                    link:"javascript:",
                    sub: [
                        { name: "Living&Design", link: "magazine.html" },
                        { name: "CORE", link: "/magazine" },
                        { name: "特刊", link: "/magazine" }
                    ]
                }
            ]
        };
    },
    methods: {
        naviBtnClick(){
            this.menuOpen = !this.menuOpen; 
            console.log(this.menuOpen);
        },
        dropdownMenu(e) {
            this.currentItem = e.target.getAttribute("index");
            console.log(e.target.getAttribute("index"));
        },
        changPage(){
            this.menuOpen=false;
        }
    },
    template: `<div id="header" class="mobile">
        <div class="container-1440">
            <!-- logo -->
            <div class="logo">
                <a href="index.html"><img src="img/logo/logo.svg" /></a>
            </div>

            <!-- logo-2 -->
            <div class="logo-2">
                <picture>
                    <source media="(max-width: 991px)" srcset="img/logo/logo-m-2.svg" />
                    <img src="img/logo/logo-2.svg" />
                </picture>
            </div>

            <a :class="['nav-btn','d-lg-none','d-block',{open: this.menuOpen === true}]" @click="naviBtnClick"></a>

            <!-- navi -->
            <div :class="['navi-bar','align-self-end',{open: this.menuOpen === true}]">
                <ul class="navi-items">
                    <li v-for="(item,index) in this.nav" :key="index" :class="['item']">
                        <a :href="item.link" @click="dropdownMenu" :index="index">
                            {{ item.name }}
                            <i v-show="item.sub" class="icon icon-arrow-down ml-2"></i>
                        </a>

                        <ol class="navi-sub-item">
                            <li v-for="(subItem,index) in item.sub" :key="index">
                                <a :href="subItem.link" @click="changPage" class="sub-item">{{ subItem.name }}</a>
                            </li>
                        </ol>
                    </li>
                </ul>
                <div class="icon-bar">
                    <a href class="icon fb"><i class="icon-fb"></i></a>
                    <a href class="icon li"><i class="icon-li"></i></a>
                    <a href class="icon yt"><i class="icon-yt"></i></a>
                    <a href class="icon ig"><i class="icon-ig"></i></a>
                </div>
            </div>
        </div>
    </div>`
});