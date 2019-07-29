<template>
    <div>
        <div class="title">基础用法</div>
        <el-input v-model="el_input1"  placeholder="'请输入内容'"></el-input>

        <div class="title">禁用</div>
        <el-input v-model="el_input2" :disabled="true" placeholder="'已禁用'"></el-input>

        <div class="title">清空</div>
        <el-input v-model="el_input3" placeholder="'请输入内容'" clearable></el-input>
    </div>
</template>

<script>
    export default {
        name:"ElementInput",
        data(){
            return {
                el_input1:"",
                el_input2:"",
                el_input3:""
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>