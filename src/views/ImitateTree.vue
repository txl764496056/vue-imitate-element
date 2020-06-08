<template>
    <div>
        <div class="title">树形控件-简洁版<span class="tips">（数据遍历）</span></div>
        <im-tree :data="data"></im-tree>
        <div class="title">树形控件-节点版本<span class="tips">（处理数据生成节点）</span></div>
        <im-tree-advanced :data="data2"></im-tree-advanced>
        <div class="title">树形控件-节点带复选框版本<span class="tips">（处理数据生成节点）</span></div>
        <im-tree-checked :data="data3"></im-tree-checked>
    </div>
</template>

<script>
import ImTree from "@/components/ImTree";
import ImTreeAdvanced from "@/components/ImTreeAdvanced";
import ImTreeChecked from "@/components/ImTreeChecked";
    export default {
        name:"ImitateTree",
         components:{
            ImTree,
            ImTreeAdvanced,
            ImTreeChecked
        },
        data() {
            return {
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
                    id:15,
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

                 data3:[{
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
                    id:15,
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
                }]
            }
        },
        methods:{
        }
    }
</script>

<style lang="scss" scoped>
</style>