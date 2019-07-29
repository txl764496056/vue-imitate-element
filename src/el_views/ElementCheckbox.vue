<template>
    <div>
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

        <div class="title">indeterminate状态</div>
        <el-checkbox :indeterminate="el_indeterminate.isIndeterminate" 
        v-model="el_indeterminate.checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <el-checkbox-group 
        v-model="el_checkList3" 
        @change="handleCheckedCitiesChange">
            <el-checkbox 
            v-for="item in el_checkbox_group3" 
            :label="item.label" 
            :key="item.label">{{item.label}}</el-checkbox>
        </el-checkbox-group>

        <div class="title">可选数量限制</div>
        <el-checkbox-group
        v-model="el_checkList4"
        :min="2"
        :max="4">
            <el-checkbox 
            v-for="item in el_checkbox_group4"
            :label="item.label"
            :key="item.label">
            {{item.label}}
            </el-checkbox>
        </el-checkbox-group>

    </div>
</template>

<script>
    export default {
        name:"ElChecbox",
        data(){
            return {
                // 选中 禁用
                el_checkbox:[
                    {name:'el_checkbox1',disabled:false,label:1,checked:true},
                    {name:'el_checkbox1',disabled:true,label:2,checked:false},
                    {name:'el_checkbox1',disabled:false,label:3,checked:true}
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
                 // indeterminate状态
                el_indeterminate:{
                    checkAll: false,
                    // checkedCities: ['上海', '北京'],
                    // cities: ['上海', '北京', '广州', '深圳'],
                    isIndeterminate: true //true:半选  false：全选（全部选中、全部未选中）
                },
                el_checkList3:['选项2'],
                el_checkbox_group3:[
                    {name:'el_checkbox4',disabled:false,label:"选项1"},
                    {name:'el_checkbox4',disabled:true,label:"选项2"},
                    {name:'el_checkbox4',disabled:false,label:"选项3"}
                ],
                el_checkList4:['选项2'],
                el_checkbox_group4:[
                    {name:'el_checkbox4',disabled:false,label:"选项1"},
                    {name:'el_checkbox4',disabled:true,label:"选项2"},
                    {name:'el_checkbox4',disabled:false,label:"选项3"},
                    {name:'el_checkbox4',disabled:false,label:"选项4"},
                    {name:'el_checkbox4',disabled:false,label:"选项5"},
                    {name:'el_checkbox4',disabled:false,label:"选项6"}
                ],
                // el_checkbox_group4:[
                //    "选项1",
                //    "选项2",
                //    "选项3",
                //    "选项4",
                //    "选项5",
                //    "选项6"
                // ],
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
            // 根据checkAll判断
            handleCheckAllChange(val){
                this.el_checkList3 = val ? this.getLabel(this.el_checkbox_group3):[];
                this.el_indeterminate.isIndeterminate = false;
            },
            handleCheckedCitiesChange(check_arr){
                let check_list_len = this.el_checkbox_group3.length;
                let check_len = check_arr.length;
                this.el_indeterminate.checkAll = check_len===check_list_len;
                this.el_indeterminate.isIndeterminate = check_len>0&&check_len<check_list_len;
            }
        }
    }
</script>

<style lang="scss" scoped>
.el-checkbox{
    margin-bottom:5px;
}
</style>