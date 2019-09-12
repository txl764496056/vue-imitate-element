<template>
    <div class="im-tree">
        im-tree
        <im-tree-node></im-tree-node>
    </div>
</template>

<script>
import ImTreeNode from "./ImTreeNode.vue";
import TreeStore from "./tree-store.js";
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
                store:null,
                root:null
            }
        },
        created(){
            this.store = new TreeStore({
                data:this.data
            });
        }
    }
</script>

<style lang="scss" scoped>
@import "../../scss/base.scss"
</style>