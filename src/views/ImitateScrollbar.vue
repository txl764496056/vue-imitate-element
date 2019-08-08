<template>
    <div>
        <button class="im-theme-btn mt20" @click='add'>点击-增加滚动内容</button>
        <div class="title">自定义滚动条</div>
        <im-scrollbar 
            class="im-scrollbar-container w600"
            wrap-class="wrap-class"
            view-class="view-class"
            :hoverShowBar="false">
            <li 
            v-for="item in im_options"
            :key="item.label">{{item.label}}</li>
        </im-scrollbar>
        <div class="title">自定义滚动条-悬停显示滚动条</div>
        <im-scrollbar 
            class="im-scrollbar-container w600"
            wrap-class="wrap-class"
            view-class="view-class">
            <li 
            v-for="item in im_options"
            :key="item.label">{{item.label}}</li>
        </im-scrollbar>
        <div class="title">自定义滚动条-只有垂直滚动条</div>
        <im-scrollbar 
            class="im-scrollbar-container"
            wrap-class="wrap-class"
            view-class="view-class">
            <template
            v-for="item in im_options">
                <li :key="item.label" v-if="item.index!=7">{{item.label}}</li>
            </template>
        </im-scrollbar>
    </div>
</template>

<script>
import ImScrollbar from '@/components/ImScrollbar'
    export default {
        name:"ImitateScrollbar",
        components:{
            ImScrollbar
        },
        data() {
            return {
                im_options: [{
                    value: '选项1',
                    label: '黄金糕'
                    }, {
                    value: '选项2',
                    label: '双皮奶'
                    }, {
                    value: '选项3',
                    label: '蚵仔煎'
                    }, {
                    value: '选项4',
                    label: '龙须面'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                },{
                    value: '选项6',
                    label: '黄金糕2'
                    }, {
                    value: '选项7',
                    index:7,
                    label: '双皮奶ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2'
                    }, {
                    value: '选项8',
                    label: '蚵仔煎2'
                    }, {
                    value: '选项9',
                    label: '龙须面2'
                    }, {
                    value: '选项10',
                    label: '北京烤鸭2'
                }],
                im_select1: '',
                num:13,
                w:400
            }
        },
        methods:{
            add(){
                this.w = 600;
                this.im_options.push({
                    value:"djfkdjfkd"+this.num,
                    label:"dddooo"+(this.num++)
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
.im-scrollbar-container{
    li{
        line-height:30px;list-style: none;font-size:14px;word-break:break-all;
    }
    &.w600{
        li{
            width:600px;
        }
    }
}

/deep/.view-class{
    padding:5px;
}
</style>