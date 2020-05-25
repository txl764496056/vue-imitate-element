<template>
    <div class="im-tree-node">
        <div class="im-tree-node_label" @click="handleMenuList">
            <span class="triangle" v-if="!isLeaf"></span>
            <node-content :label="node.label"></node-content>
            <!-- 阻止冒泡 -->
            <!-- <im-checkbox @click.native.stop>{{node.label}}</im-checkbox> -->
        </div>
        <im-collapse-transition :initStatus="expanded">
            <div class="im-tree-node_child" v-show="expanded" style="margin-left:10px;">
                <im-tree-node v-for="child in node.children" :isLeaf="!child.children" :node="child" :key="child.label"></im-tree-node>    
            </div>
        </im-collapse-transition>
    </div>
</template>

<script>
import ImCheckbox from "@/components/ImCheckbox.vue"
import ImCollapseTransition from "@/components/im-collapse-transition.js"
    export default {
        name:"ImTreeNode",
        components:{
            ImCheckbox,
            ImCollapseTransition,
            // 渲染NodeContent
            NodeContent:{
                props:{
                    label:{
                        type:String,
                        default:''
                    }
                },
                render(h){
                    return h('p',this.label);
                }
            }
        },
        props:{
            node:{
                type:Object,
                default(){
                    return {};
                }
            },
            isLeaf:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return {
                expanded:false
            }
        },
        methods:{
            /**
             * 下拉展开折叠处理
            */
            handleMenuList(){
                this.$nextTick(()=>{
                    this.expanded = !this.expanded;
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.im-tree-node_label{
    display:flex;
    align-items: center;
    .triangle{
        width:0;
        padding:0;
        height:0;
        display:inline-block;
        border: 5px solid transparent{
            left-color:#ccc;
        };

    }
}

</style>