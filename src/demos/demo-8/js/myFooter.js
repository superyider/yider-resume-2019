//footer
Vue.component('my-footer', {
    template:`
    <div id="footer">
        <div class="wrap container-1440 row justify-content-between">
            <a href="#top" class="go-top">TOP</a>
            <div class="col d-none d-lg-block">
                <!--文章報導-->
                <div class="footer-box">
                    <div class="title font-24">文章報導</div>
                    <ul class="font-14">
                        <li><a href="" class="sub-title">最新報導</a></li>
                        <li><a href="" class="sub-title">熱門報導</a></li>
                        <li><a href="" class="sub-title">室內設計</a></li>
                        <li><a href="" class="sub-title">生活美學</a></li>
                    </ul>
                </div>
                <!--嚴選名品-->
                <div class="footer-box">
                    <div class="title font-24">嚴選名品</div>
                    <ul class="font-14">
                        <li><a href="" class="sub-title">最新報導</a></li>
                        <li><a href="" class="sub-title">熱門報導</a></li>
                        <li><a href="" class="sub-title">室內設計</a></li>
                        <li><a href="" class="sub-title">生活美學</a></li>
                    </ul>
                </div>
            </div>

            <div class="col-4 d-none d-lg-block">
                <!--找設計師-->
                <div class="footer-box">
                    <div class="title font-24">找設計師</div>
                    <ul class="font-14 has-sub">
                        <!--風格-->
                        <li>
                            <span class="sub-title">風格</span>
                            <ol>
                                <li><a href="">簡約風</a></li>
                                <li><a href="">無印風</a></li>
                                <li><a href="">古典風</a></li>
                                <li><a href="">美式風</a></li>
                                <li><a href="">鄉村風</a></li>
                                <li><a href="">北歐風</a></li>
                                <li><a href="">新古典</a></li>
                                <li><a href="">工業風</a></li>
                                <li><a href="">奢華風</a></li>
                                <li><a href="">混搭風</a></li>
                                <li><a href="">新東方</a></li>
                                <li><a href="">日系風</a></li>
                            </ol>
                        </li>
                        <!--預算-->
                        <li>
                            <span class="sub-title">預算</span>
                            <ol>
                                <li><a href="">100萬以下</a></li>
                                <li><a href="">100-200萬</a></li>
                                <li><a href="">200-300萬</a></li>
                                <li><a href="">300萬以上</a></li>
                            </ol>
                        </li>
                        <!--坪數-->
                        <li>
                            <span class="sub-title">坪數</span>
                            <ol>
                                <li><a href="">20坪以下</a></li>
                                <li><a href="">21-50坪</a></li>
                                <li><a href="">51-100坪</a></li>
                                <li><a href="">101坪以上</a></li>
                            </ol>
                        </li>
                        <!--匹配設計師表單-->
                        <li class="colume">
                            <span class="sub-title">匹配設計師表單</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="col d-none d-lg-block">
                <!--國際獎項-->
                <div class="footer-box">
                    <div class="title font-24">國際獎項</div>
                    <ul class="font-14">
                        <li><a href="" class="sub-title">國際獎項</a></li>
                        <li><a href="" class="sub-title">比賽報名表單</a></li>
                    </ul>
                </div>
                <!--設計雜誌-->
                <div class="footer-box">
                    <div class="title font-24">設計雜誌</div>
                    <ul class="font-14">
                        <li><a href="" class="sub-title">Living</a></li>
                        <li><a href="" class="sub-title">Core 特刊</a></li>
                        <li><a href="" class="sub-title">購買雜誌</a></li>
                    </ul>
                </div>
            </div>

            <div class="col about-m">
                <!--關於我們-->
                <div class="footer-box">
                    <div class="title font-24 d-none d-lg-flex">關於我們</div>
                    <ul class="font-14 items">
                        <li><a href="" class="sub-title">關於我們</a></li>
                        <li class="d-none d-lg-flex"><a href="" class="sub-title">頂尖設計</a></li>
                        <li><a href="" class="sub-title">媒體夥伴</a></li>
                        <li><a href="" class="sub-title">廣告與合作</a></li>
                        <li><a href="" class="sub-title">聯絡我們</a></li>
                    </ul>
                    <!--社群-->
                    <ul class="font-14 bot-icons">
                        <li>
                            <a class="sub-title d-flex">
                                <div class="icon"><i class="icon-fb-sq m-0"></i></div> Facebook
                            </a>
                        </li>
                        <li>
                            <a class="sub-title d-flex">
                                <div class="icon"><i class="icon-ig-sq m-0"></i></div> Instagram
                            </a>
                        </li>
                        <li>
                            <a class="sub-title d-flex">
                                <div class="icon"><i class="icon-li-sq m-0"></i></div> Line@
                            </a>
                        </li>
                        <li>
                            <a class="sub-title d-flex">
                                <div class="icon"><i class="icon-yt-sq m-0"></i></div> Youtube
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="copyright texe-center">圓祥大眾 © DesignWant.com. All rights reserved.</div>
    </div>`
});