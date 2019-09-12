<template>
    <div>
        <im-tree :data="data"></im-tree>
    </div>
</template>

<script>
import ImTree from "@/components/ImTree";
    export default {
        name:"ImitateTree",
         components:{
            ImTree
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
                }]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>