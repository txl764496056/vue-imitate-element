<template>
    <div>
        <div class="title">选中/禁用</div>
        <im-checkbox
        v-for="item in im_checkbox"
        :key="item.label"
        :name="item.name"
        :disabled="item.disabled"
        :label="item.label"
        v-model="item.checked">选项{{item.label}}</im-checkbox>

        <div class="title">复选框组</div>
        <div class="title2" data-index="1">禁用属性在 子标签上</div>
        <div class="group-unit">
            <im-checkbox-group v-model="im_checkList1">
                <im-checkbox
                    v-for="item in im_checkbox_group1"
                    :key="item.label"
                    :name="item.name"
                    :disabled="item.disabled"
                    :label="item.label">{{item.label}}</im-checkbox>
            </im-checkbox-group>
            <im-checkbox-group v-model="im_checkList2">
                <!-- 嵌套一个父组件,检测子组件在获取父的时候是否有影响 -->
                <empty-test>
                    <im-checkbox
                    v-for="item in im_checkbox_group2"
                    :key="item.label"
                    :name="item.name"
                    :label="item.label">{{item.label}}</im-checkbox>
                </empty-test>
            </im-checkbox-group>
        </div>

        <div class="title2" data-index="2">禁用属性在 父标签上</div>
        <div class="group-unit">
            <im-checkbox-group
            :disabled="true"
            v-model="im_checkList3">
            <!-- 嵌套一个父组件,检测子组件在获取父的时候是否有影响 -->
            <empty-test>
                    <im-checkbox
                    v-for="item in im_checkbox_group3"
                    :key="item.label"
                    :name="item.name"
                    :label="item.label">{{item.label}}</im-checkbox>
            </empty-test>
            </im-checkbox-group>
        </div>

        <div class="title2" data-index="3">name属性在 父标签上</div>
        <div class="group-unit">
                <im-checkbox-group
            :name="'im_checkbox4'"
            v-model="im_checkList4">
                <im-checkbox
                v-for="item in im_checkbox_group4"
                :key="item.label"
                :label="item.label">{{item.label}}</im-checkbox>
            </im-checkbox-group>
        </div>

        <div class="title2" data-index="3">indeterminate状态</div>
        
        <div class="group-unit">
            <im-checkbox 
            v-model="im_indeterminate.checkAll" 
            :indeterminate="im_indeterminate.indeterminate"
            @change="handleCheckAll">全选</im-checkbox>
            <im-checkbox-group
            :name="'im_checkbox5'"
            v-model="im_checkList5"
            @change="handleIndeterminate">
                <im-checkbox
                v-for="item in im_checkbox_group5"
                :key="item.label"
                :label="item.label">{{item.label}}</im-checkbox>
            </im-checkbox-group>
        </div>

    </div>
</template>

<script>
import ImCheckbox from '@/components/ImCheckbox.vue'
import ImCheckboxGroup from '@/components/ImCheckboxGroup.vue'
import EmptyTest from '@/components/EmptyTest.vue'
    export default {
        name:'ImitateCheckbox',
        components:{
            ImCheckbox,
            ImCheckboxGroup,
            EmptyTest
        },
        data(){
            return {
                // 复选框
                im_checkbox:[
                    {name:'el_checkbox2',disabled:false,label:1,checked:true},
                    {name:'el_checkbox2',disabled:true,label:2,checked:true},
                    {name:'el_checkbox2',disabled:false,label:3,checked:false}
                ],
                // 复选框组
                im_checkList1:['选项1'],
                im_checkbox_group1:[
                    {name:'im_checkbox1',disabled:false,label:"选项1"},
                    {name:'im_checkbox1',disabled:true,label:"选项2"},
                    {name:'im_checkbox1',disabled:false,label:"选项3"}
                ],
                im_checkList2:['选项1'],
                im_checkbox_group2:[
                    {name:'im_checkbox2',disabled:false,label:"选项1"},
                    {name:'im_checkbox2',disabled:true,label:"选项2"},
                    {name:'im_checkbox2',disabled:false,label:"选项3"}
                ],
                im_checkList3:['选项2'],
                im_checkbox_group3:[
                    {name:'im_checkbox3',disabled:false,label:"选项1"},
                    {name:'im_checkbox3',disabled:true,label:"选项2"},
                    {name:'im_checkbox3',disabled:false,label:"选项3"}
                ],
                im_checkList4:['选项2'],
                im_checkbox_group4:[
                    {disabled:false,label:"选项1"},
                    {disabled:true,label:"选项2"},
                    {disabled:false,label:"选项3"}
                ],
                // indeterminate 状态
                im_indeterminate:{
                    checkAll:false,
                    indeterminate:true
                },
                im_checkList5:['选项2'],
                im_checkbox_group5:[
                    {disabled:false,label:"选项1"},
                    {disabled:true,label:"选项2"},
                    {disabled:false,label:"选项3"}
                ],
            }
        },
        methods:{
            getLabel(arr){
                let result = [];
                arr.map(function(item){
                    result.push(item.label);
                });
                return result;
            },
            handleCheckAll(val){
                this.im_checkList5 = val ? this.getLabel(this.im_checkbox_group5):[];
                this.im_indeterminate.indeterminate = false;
            },
            handleIndeterminate(check_arr){
                let check_list_len = this.im_checkbox_group5.length;
                let check_arr_len = check_arr.length;
                this.im_indeterminate.checkAll = check_list_len===check_arr_len;
                this.im_indeterminate.indeterminate = check_arr_len>0&&check_arr_len<check_list_len;
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