<template>
    <div>
        <!-- 1、简洁版 -->
        <div class="title">
            树形控件-简洁版
            <span class="tips">（数据遍历）</span>
        </div>
        <im-tree :data="data"></im-tree>

        <!-- 2、节点版本 -->
        <div class="title">
            树形控件-节点版本
            <span class="tips">（处理数据生成节点）</span>
        </div>
        <im-tree-advanced :data="data2"></im-tree-advanced>

        <!-- 3、节点映射对象版本-->
        <div class="title">
            树形控件-增加节点映射对象版本
            <span class="tips">(有默认展开的选项)</span>
        </div>
        <p class="tips">**便于查询指定节点，进行默认展开或者选中操作</p>
        <div class="comm mt20 mb10">默认展开：二级1-1</div>
        <im-tree-maps
         :data="data3" 
         nodeKey="key"
         :default-expand-keys="[2]"></im-tree-maps>
        <!-- :default-expand-keys="[2]" -->
        <!-- 4、 -->
        <div class="title">
            树形控件-节点带复选框版本
        </div>
        <im-tree-checked :data="data4" nodeKey="key"></im-tree-checked>
    </div>
</template>

<script>
import ImTree from "@/components/ImTree";
import ImTreeAdvanced from "@/components/ImTreeAdvanced";
import ImTreeMaps from "@/components/ImTreeMaps";
import ImTreeChecked from "@/components/ImTreeChecked";
    export default {
        name:"ImitateTree",
         components:{
            ImTree,
            ImTreeAdvanced,
            ImTreeMaps,
            ImTreeChecked
        },
        data() {
            return {
                // 简洁版
                data:[{
                    label:'一级 1',
                    children:[{
                        label:'二级 1-1',
                        children:[{
                            label:'三级 1-1-1'
                        }]
                    },{
                        label:'二级 1-2'
                    }]
                },{
                    label:'一级 2',
                    children:[{
                        label:'二级 2-1',
                        children:[{
                            label:'三级 2-1-1'
                        }]
                    },{
                        label:'二级 2-2'
                    }]
                },{
                    label:"一级 3"
                }],
                // 节点版本数据
                data2:[{
                    label:'一级 1',
                    children:[{
                        label:'二级 1-1',
                        children:[{
                            label:'三级 1-1-1'
                        }]
                    },{
                        label:'二级 1-2'
                    }]
                },{
                    label:'一级 2',
                    children:[{
                        label:'二级 2-1',
                        children:[{
                            label:'三级 2-1-1'
                        }]
                    },{
                        label:'二级 2-2'
                    }]
                },{
                    label:"一级 3"
                }],
                // 节点映射对象版本
                 data3:[{
                    label:'一级 1',
                    key:1,
                    children:[{
                        label:'二级 1-1',
                        key:2,
                        children:[{
                            label:'三级 1-1-1',
                            key:3
                        }]
                    },{
                        label:'二级 1-2',
                        key:4
                    }]
                },{
                    label:'一级 2',
                    key:5,
                    children:[{
                        label:'二级 2-1',
                        key:6,
                        children:[{
                            label:'三级 2-1-1',
                            key:7
                        }]
                    },{
                        label:'二级 2-2',
                        key:8
                    }]
                },{
                    label:"一级 3",
                    key:9
                }],
                // 节点带复选框
                 data4:[{
                    label:'一级 1',
                    key:1,
                    children:[{
                        label:'二级 1-1',
                        key:2,
                        children:[{
                            label:'三级 1-1-1',
                            key:3
                        }]
                    },{
                        label:'二级 1-2',
                        key:4
                    }]
                },{
                    label:'一级 2',
                    key:5,
                    children:[{
                        label:'二级 2-1',
                        key:6,
                        children:[{
                            label:'三级 2-1-1',
                            key:7
                        }]
                    },{
                        label:'二级 2-2',
                        key:8
                    }]
                },{
                    label:"一级 3",
                    key:9
                }]
            }
        },
        methods:{
        }
    }
</script>

<style lang="scss" scoped>
</style>