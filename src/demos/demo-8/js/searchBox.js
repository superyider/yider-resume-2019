//search-box
Vue.component('search-box', {
    data(){
        return{
            isOpenSearch:false,
            selectedTab:'0'
        }
    },
    methods:{
        openSearch(){
            this.isOpenSearch = !this.isOpenSearch;
        },
        tabClick(val){
            this.selectedTab = val;
        }
    },
    template:`
    <div class="container-1440 search-group" :class="{openSearch:this.isOpenSearch === true}">
        <!-- search-box-wrap -->
        <div class="search-bot-box">
            <a class="search-btn d-none d-lg-flex" @click="openSearch">
                <i class="icon icon-search" v-if="!this.isOpenSearch"></i>
                <i class="icon icon-arrow-u" v-if="this.isOpenSearch"></i>
            </a>
            <div class="search-content">
                <!-- 切換按鈕 -->
                <ul class="dw-tabs">
                    <li :class="['item',{ active: this.selectedTab === '0'}]"><a @click.stop="tabClick('0')">想看文章</a></li>
                    <li :class="['item',{ active: this.selectedTab === '1'}]"><a @click.stop="tabClick('1')">想找設計師</a></li>
                    <li class="item search"><a @click="openSearch"><i class="icon icon-arrow-d"></i></a></li>
                </ul>
                <!-- 內容 -->
                <div class="box-article" v-if="this.selectedTab == '0'">
                    <div class="row no-gutters pt-3">
                        <input type="text" class="col p-2 pl-3 order-1 " placeholder="想查些什麼？">
                        <button class="col-12 col-lg-auto order-3 order-lg-2"><i class="icon icon-search"></i></button>
                        <div class="col-12 pt-4 keywords order-2 order-lg-3 mb-5 p-2">
                            熱門關鍵字：<a href="">某某室內設計</a>、<a href="">某某設計</a>、<a href="">某某某居家</a>、<a href="">某某室內設計</a>、<a href="">某某設計</a>、<a href="">某某某居家</a>
                        </div>
                    </div>
                </div>

                <div class="box-design" v-if="this.selectedTab == '1'">
                    <div class="row no-gutters pt-3">
                        <input type="text" class="col-lg-4 col-12 mb-lg-0 mb-3 p-2 mr-2 order-6 order-lg-1" placeholder="想查些什麼？">
                        <select class="form-control form-control-lg col p-2 mr-2 order-1 order-lg-2" id="exampleFormControlSelect1">
                            <option>預算 不限</option>
                            <option>預算 不限</option>
                            <option>預算 不限</option>
                        </select>
                        <select class="form-control form-control-lg col p-2 mr-2 order-2 order-lg-3" id="exampleFormControlSelect1">
                            <option>坪數 不限</option>
                            <option>坪數 不限</option>
                            <option>坪數 不限</option>
                        </select>
                        <select class="form-control form-control-lg col p-2 mr-2 order-3 order-lg-4" id="exampleFormControlSelect1">
                            <option>風格 不限</option>
                            <option>風格 不限</option>
                            <option>風格 不限</option>
                        </select>
                        <select class="form-control form-control-lg col p-2 mr-2 order-4 order-lg-5" id="exampleFormControlSelect1">
                            <option>色彩 不限</option>
                            <option>色彩 不限</option>
                            <option>色彩 不限</option>
                        </select>
                        <select class="form-control form-control-lg col p-2 mr-2 order-5 order-lg-6" id="exampleFormControlSelect1">
                            <option>用途 不限</option>
                            <option>用途 不限</option>
                            <option>用途 不限</option>
                        </select>
                        <button class="col-12 col-lg-auto order-7 order-lg-7"><i class="icon icon-search"></i></button>
                        <div class="col-12 pt-4 keywords order-7 order-lg-8 mb-5 p-2">
                            熱門關鍵字：<a href="">某某室內設計</a>、<a href="">某某設計</a>、<a href="">某某某居家</a>、<a href="">某某室內設計</a>、<a href="">某某設計</a>、<a href="">某某某居家</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
});