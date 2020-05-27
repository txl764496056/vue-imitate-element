<template>
    <div class="im-tree">
        <!-- <im-tree-node v-for="child in data" :node="child" :isLeaf="!child.children" :key="child.label"></im-tree-node> -->
        <im-tree-node v-for="child in treeNode.childrenNodes" :node="child" :key="child.id"></im-tree-node>
    </div>
</template>

<script>
import ImTreeNode from "./ImTreeNode.vue";
// import TreeStore from "./tree-store.js";
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
            // this.store = new TreeStore({
            //     data:this.data
            // });
            // this.root = this.store.root;
            this.treeNode = new Node({data:this.data});
            console.log(this.treeNode);
        }
    }
</script>

<style lang="scss" scoped>
@import "../../scss/base.scss"
</style>