<template>
    <div>
        <div class="title">基础用法</div>
        <el-input v-model="el_input1"  placeholder="'请输入内容'"></el-input>

        <div class="title">禁用</div>
        <el-input v-model="el_input2" :disabled="true" placeholder="'已禁用'"></el-input>

        <div class="title">清空</div>
        <el-input v-model="el_input3" placeholder="'请输入内容'" clearable></el-input>

        <div class="title">密码框</div>
        <el-input v-model="el_input4" type="password" show-password placeholder="'请输入内容'" clearable></el-input>

        <div class="title">文本域</div>
        <el-input v-model="el_input5" type="textarea" placeholder="'请输入内容'"></el-input>

        <div class="title">文本域-禁用</div>
        <el-input v-model="el_input5" type="textarea" disabled placeholder="'请输入内容'"></el-input>

        <div class="title">文本域-自适应高度</div>
        <el-input v-model="el_input6" type="textarea" autosize placeholder="'请输入内容'"></el-input>

    </div>
</template>

<script>
    export default {
        name:"ElementInput",
        data(){
            return {
                el_input1:"",
                el_input2:"",
                el_input3:"",
                el_input4:"",
                el_input5:"",
                el_input6:""
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>