<template>
    <div>
        <im-tree :data="data"></im-tree>
        <!-- <button @click="show2=!show2">change</button> -->
        <!-- <transition name="fade">
            <div v-if="show2">封疆大吏分就开始</div>
        </transition> -->
    </div>
</template>

<script>
import ImTree from "@/components/ImTree";
import ImCollapseTransition from "@/components/im-collapse-transition.js";
    export default {
        name:"ImitateTree",
         components:{
            ImTree,
            ImCollapseTransition
        },
        data() {
            return {
                show:true,
                show2:false,
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
                }]
            }
        },
        methods:{
        }
    }
</script>

<style lang="scss" scoped>
.fade-enter-active{
    transition:height 1s;
    overflow:hidden;
}
.fade-enter{
    height:0;
}
.fade-enter-to{
    height:150px;
}

.fade-leave{
    height:150px;
}
.fade-leave-active{
    transition: height 2s;
    overflow:hidden;
}
.fade-leave-to{
    height:0;
}
</style>