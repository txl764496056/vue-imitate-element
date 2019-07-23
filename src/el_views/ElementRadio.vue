<template>
    <div>
        <!-- 选中/禁用 -->
        <div class="title">选中/禁用</div>
        <el-radio 
        v-for="item in el_radio" 
        :key="item.label" 
        v-model="el_radio_selected" 
        :label='item.label'
        :disabled="item.disabled">选项{{item.label}}</el-radio>
        <!-- 单选组 -->
        <div class="title">单选组</div>
        <el-radio-group v-model="el_radio_group_selected">
            <el-radio 
            v-for="item in el_radio_group" 
            :key="item.label" 
            :label='item.label'>选项{{item.label}}</el-radio>
        </el-radio-group>
    </div>
</template>

<script>
    export default {
        name:"ElementRadio",
        data(){
            return {
                el_radio_selected:1,
                el_radio:[
                    {label:1,disabled:true},
                    {label:2,disabled:false},
                    {label:3,disabled:true}
                ],
                // 单选组
                el_radio_group_selected:1,
                el_radio_group:[
                    {label:1,disabled:false},
                    {label:2,disabled:false},
                    {label:3,disabled:false}
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>