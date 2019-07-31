<template>
    <div>
        <div class="title">基本用法</div>
        <el-select v-model="el_select1" placeholder="请选择">
            <el-option 
            v-for="item in options"
            :key="item.label"
            :value="item.value"
            :label="item.label"></el-option>
        </el-select>
    </div>
</template>

<script>
    export default {
        name:"ElementSelect",
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
                }],
                el_select1: ''
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>