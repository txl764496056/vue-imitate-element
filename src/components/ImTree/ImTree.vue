<template>
    <div class="im-tree">
        <im-tree-node v-for="child in data" :node="child" :isLeaf="!child.children" :key="child.label"></im-tree-node>
    </div>
</template>

<script>
import ImTreeNode from "./ImTreeNode.vue";
    export default {
        name:"ImTree",
        props:{
            data:{
                type:Array,
                default(){
                    return [];
                }
            }
        },
        components:{
            ImTreeNode
        }
    }
</script>

<style lang="scss" scoped>
@import "../../scss/base.scss"
</style>