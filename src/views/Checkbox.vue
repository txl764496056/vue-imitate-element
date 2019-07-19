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

            <div class="title">复选框组</div>
            <el-checkbox-group v-model="el_checkList">
                <el-checkbox
                    v-for="item in el_checkbox_group"
                    :key="item.label"
                    :name="item.name"
                    :disabled="item.disabled"
                    :label="item.label"
                    v-model="item.checked">{{item.label}}</el-checkbox>
            </el-checkbox-group>
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
            <div class="title">复选框组</div>
            <im-checkbox-group v-model="im_checkList">
                <im-checkbox
                    v-for="item in im_checkbox_group"
                    :key="item.label"
                    :name="item.name"
                    :disabled="item.disabled"
                    :label="item.label">{{item.label}}</im-checkbox>
            </im-checkbox-group>
        </div>
    </div>
</template>

<script>
import ImCheckbox from '@/components/ImCheckbox.vue'
import ImCheckboxGroup from '@/components/ImCheckboxGroup.vue'
    export default {
        name:'Checkbox',
        components:{
            ImCheckbox,
            ImCheckboxGroup
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
                ],
                // 复选框组
                el_checkList:[],
                el_checkbox_group:[
                    {name:'el_checkbox3',disabled:false,label:"选项1"},
                    {name:'el_checkbox3',disabled:true,label:"选项2"},
                    {name:'el_checkbox3',disabled:false,label:"选项3"}
                ],
                im_checkList:[],
                im_checkbox_group:[
                    {name:'el_checkbox3',disabled:false,label:"选项1"},
                    {name:'el_checkbox3',disabled:true,label:"选项2"},
                    {name:'el_checkbox3',disabled:false,label:"选项3"}
                ],
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