<template>
    <div>
        <div class="title">基本用法-有禁用选项</div>
        <el-select v-model="el_select1" placeholder="请选择">
            <el-option 
            v-for="item in options"
            :key="item.label"
            :value="item.value"
            :label="item.label"
            :disabled="item.disabled"></el-option>
        </el-select>

        <div class="title">基本用法-禁用</div>
        <el-select v-model="el_select2" placeholder="请选择">
            <el-option 
            v-for="item in options"
            :key="item.label"
            :value="item.value"
            :label="item.label"
            :disabled="item.disabled"></el-option>
        </el-select>

        <div class="title">基本用法-清除</div>
        <el-select 
        v-model="el_select3"
         placeholder="请选择"
         clearable>
            <el-option 
            v-for="item in options"
            :key="item.label"
            :value="item.value"
            :label="item.label"
            :disabled="item.disabled"></el-option>
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
                    label: '黄金糕',
                    disabled:true
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
                    label: '黄金糕6',
                    disabled:true
                    }, {
                    value: '选项7',
                    label: '双皮奶7'
                    }, {
                    value: '选项8',
                    label: '蚵仔煎8'
                    }, {
                    value: '选项9',
                    label: '龙须面9'
                    }, {
                    value: '选项10',
                    label: '北京烤鸭10'
                }],
                el_select1: '',
                el_select2:'',
                el_select3:''
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>