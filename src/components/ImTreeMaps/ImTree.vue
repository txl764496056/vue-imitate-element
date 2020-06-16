<template>
    <div class="im-tree">
        <im-tree-node
         v-for="child in treeNode.childrenNodes"
         :node="child"
         :key="child.id"></im-tree-node>
    </div>
</template>

<script>
import ImTreeNode from "./ImTreeNode.vue";
import TreeStore from "./tree-store.js";
    export default {
        name:"ImTree",
        props:{ 
            nodeKey:String,//nodeKey:唯一标识字段名，并不是值，这个字段的数据，会在需要传入的data数据对象里
            defaultExpandKeys:{ //默认需要展开的项的key值数组
                type:Array,
                default:function(){
                    return [];
                }
            },
            /**
             * 整颗树的数据
             */
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
                treeNode:{} //树的根节点
            }
        },
        created(){
            this.store = new TreeStore({
                data:this.data, //节点数据
                key:this.nodeKey, //节点唯一标识的字段名
                defaultExpandKeys:this.defaultExpandKeys //默认展开项的key值
            });
            this.treeNode = this.store.treeNode;
        },
        methods:{
            
        }
    }
</script>

<style lang="scss" scoped>
@import "../../scss/base.scss"
</style>