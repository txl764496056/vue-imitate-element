<template>
    <div>
        <div class="title">基础用法</div>
        <im-input v-model="im_input1" placeholder="请输入内容"></im-input>

        <div class="title">禁用</div>
        <im-input v-model="im_input2" disabled="true" placeholder="已禁用"></im-input>

        <div class="title">清空</div>
        <im-input v-model="im_input3" clearable  placeholder="请输入内容"></im-input>

        <button @click="changeInput1">click</button>

    </div>
</template>

<script>
import ImInput from "../components/ImInput.vue"
    export default {
        name:"ImitateInput",
        components:{
            ImInput
        },
        data(){
            return {
                im_input1:"",
                im_input2:"",
                im_input3:""
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>