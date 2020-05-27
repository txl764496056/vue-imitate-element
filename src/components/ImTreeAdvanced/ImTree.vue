<template>
    <div class="im-tree">
        <im-tree-node v-for="child in treeNode.childrenNodes" :node="child" :key="child.id"></im-tree-node>
    </div>
</template>

<script>
import ImTreeNode from "./ImTreeNode.vue";
import  Node from "./node.js";
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
        },
        data() {
            return {
                treeNode:{}
            }
        },
        created(){
            this.treeNode = new Node({data:this.data});
        }
    }
</script>

<style lang="scss" scoped>
@import "../../scss/base.scss"
</style>