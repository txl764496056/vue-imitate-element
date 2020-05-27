<template>
    <div>
        <div class="title">树形控件-简洁版</div>
        <im-tree :data="data"></im-tree>
        <div class="title">树形控件-节点处理版本</div>
        <im-tree-advanced :data="data2"></im-tree-advanced>
    </div>
</template>

<script>
import ImTree from "@/components/ImTree";
import ImTreeAdvanced from "@/components/ImTreeAdvanced";
    export default {
        name:"ImitateTree",
         components:{
            ImTree,
            ImTreeAdvanced
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
                }]
            }
        },
        methods:{
        }
    }
</script>

<style lang="scss" scoped>
</style>