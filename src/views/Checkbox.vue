<template>
    <div class="compare-box">
        <div class="el-content">
            <div class="title">选中/禁用</div>
            <el-checkbox>选项</el-checkbox>
        </div>
        <div class="im-content">
            <div class="title">选中/禁用</div>
            <im-checkbox>选项</im-checkbox>
        </div>
    </div>
</template>

<script>
import ImCheckbox from '@/components/ImCheckbox.vue'
    export default {
        name:'Checkbox',
        components:{
            ImCheckbox
        },
        data(){
            return {
                // 选中 禁用
                el_checkbox_select:2,
                el_checkbox:[
                    {name:'el_checkbox1',disabled:false,label:1}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>