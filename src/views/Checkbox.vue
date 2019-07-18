<template>
    <div class="compare-box">
        <div class="el-content">
            <div class="title">选中/禁用</div>
            <!-- <el-checkbox>选项</el-checkbox> -->
            <el-checkbox
            v-for="item in el_checkbox"
            :key="item.label"
            :name="item.name"
            :disabled="item.disabled"
            :label="item.label"
            v-model="item.checked">选项{{item.label}}</el-checkbox>
        </div>
        <div class="im-content">
            <div class="title">选中/禁用</div>
            <im-checkbox
            v-for="item in im_checkbox"
            :key="item.label"
            :name="item.name"
            :disabled="item.disabled"
            :label="item.label"
            v-model="item.checked">选项{{item.label}}</im-checkbox>
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
                el_checkbox:[
                    {name:'el_checkbox1',disabled:false,label:1,checked:true},
                    {name:'el_checkbox1',disabled:true,label:2,checked:false},
                    {name:'el_checkbox1',disabled:false,label:3,checked:true}
                ],
                im_checkbox:[
                    {name:'el_checkbox2',disabled:false,label:1,checked:true},
                    {name:'el_checkbox2',disabled:true,label:2,checked:true},
                    {name:'el_checkbox2',disabled:false,label:3,checked:false}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.im-content{
    .im-checkbox{
        margin-right:10px;
    }
}
</style>