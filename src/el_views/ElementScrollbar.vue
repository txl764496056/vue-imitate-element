<template>
    <div>
        <div class="title" @click='add'>自定义滚动条</div>
         <el-scrollbar 
          tag="ul"
          wrap-class="el-select-dropdown__wrap"
          view-class="el-select-dropdown__list"
          ref="scrollbar"
          class="scroll-container">
            <li 
            v-for="item in options"
            :key="item.label">{{item.label}}</li>
        </el-scrollbar>
    </div>
</template>

<script type="text/label">
//   import ElScrollbar from 'element-ui/packages/scrollbar';
    export default {
        name:"ElementScrollbar",
         data() {
            return {
                options: [{
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
                    label: '双皮奶2'
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
                num:11
            }
        },
        methods:{
            add(){
                this.options.push({
                    value:"ddfdf"+this.num,
                    label:"方今典开发"+(this.num++)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '@/scss/base.scss';
.scroll-container{
    border:1px solid $color-ee;border-radius:4px;
    li{
        padding:10px;font-size:14px;
        &:hover{
            background-color:theme-color(0.05);
        }
    }
}
</style>