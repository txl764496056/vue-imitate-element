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
                    :disabled="item.disabled"
                    :label="item.label"
                    v-model="item.checked">{{item.label}}</el-checkbox>
            </el-checkbox-group>
            <div class="title2" data-index="1">name属性在 父（组）标签上</div>
            <el-checkbox-group name="'el-checkbox-group'" v-model="el_checkList2">
                <el-checkbox 
                    v-for="item in el_checkbox_group2"
                    :key="item.label"
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
        </div>
    </div>
</template>

<script>
import ImCheckbox from '@/components/ImCheckbox.vue'
import ImCheckboxGroup from '@/components/ImCheckboxGroup.vue'
import EmptyTest from '@/components/EmptyTest.vue'
    export default {
        name:'Checkbox',
        components:{
            ImCheckbox,
            ImCheckboxGroup,
            EmptyTest
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
                el_checkList:['选项2'],
                el_checkbox_group:[
                    {name:'el_checkbox3',disabled:false,label:"选项1"},
                    {name:'el_checkbox3',disabled:true,label:"选项2"},
                    {name:'el_checkbox3',disabled:false,label:"选项3"}
                ],
                el_checkList2:['选项2'],
                el_checkbox_group2:[
                    {name:'el_checkbox4',disabled:false,label:"选项1"},
                    {name:'el_checkbox4',disabled:true,label:"选项2"},
                    {name:'el_checkbox4',disabled:false,label:"选项3"}
                ],
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