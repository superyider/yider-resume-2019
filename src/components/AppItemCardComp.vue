<template>
    <div class="">
        <a v-if="isLity" :href="this.link" target="_blank" class="item" data-lity>
            <div class="img imgZoom">
                <img :src="this.img" class="w-100">
            </div>
            <div class="title">
                <img v-if="this.logo" :src="this.logo" class="mr-2 h-100">
                {{ this.title }}
            </div>
            <div class="discript">
                <span v-if="this.date" class="date">{{ this.date }}</span>
                <span class="content">{{ this.content }}</span>
            </div>
        </a>
        <a v-else :href="this.link" target="_blank" class="item">
            <div class="img imgZoom">
                <img :src="this.img" class="w-100">
            </div>
            <div class="title">
                <img v-if="this.logo" :src="this.logo" class="mr-2 h-100">
                {{ this.title }}
            </div>
            <div class="discript">
                <span v-if="this.date" class="date">{{ this.date }}</span>
                <span class="content">{{ this.content }}</span>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name:"item-card",
    props:{
        logo:String,
        img:String,
        title:String,
        date:String,
        content:String,
        link:String,
        isLity:Boolean
    }
}
</script>

<style lang="scss" scoped>
.item{
    width: 100%;
    background: #fff;
    display: block;
    border: 1px solid #ccc;
    margin-bottom: 60px;
    overflow: hidden;
    cursor: pointer;
    @media(max-width:992px){
        margin-bottom: 30px;
    }
    &:hover{
        text-decoration: none;
        .img{
            opacity:1;
            overflow: hidden;
            img{
                animation: scaleAni .5s forwards;
            }
        }
    }
    @keyframes scaleAni {
        0%{
            transform: scale(1);
        }
        100%{
            transform: scale(1.1)
        }
    }
    .img{
        width: 100%;
    }
    .title{
        width: 100%;
        font-size: 15px;
        font-weight: bold;
        color: #333;
        display: flex;
        align-items: center;
        text-align: left;
        padding: 10px 20px;
        border-bottom: 1px solid #ccc;
        @media(max-width:992px){
            font-size: 13px;
        }
    }
    .discript{
        width: 100%;
        padding: 20px 20px;
        .date{
            display: flex;
            padding: 0;
            font-size: 13px;
            color: #fd0004;
        }
        .content{
            display: flex;
            font-size: 13px;
            color: #494948;
            line-height: 2rem;
        }
    }
}
</style>