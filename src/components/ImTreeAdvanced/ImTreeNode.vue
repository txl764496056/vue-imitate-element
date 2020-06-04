<template>
    <div class="im-tree-node">
        <div class="im-tree-node_label" @click="handleMenuList">
            <span class="triangle iconfont icon-radiu-arrow-r" :class="{'down':iconDown}" v-if="!node.isLeaf"></span>
            <node-content :label="node.label"></node-content>
        </div>
        <im-collapse-transition :initStatus="expanded">
            <div class="im-tree-node_child" v-show="expanded">
                <!-- 递归 -->
                <im-tree-node v-for="child in node.childrenNodes" :node="child" :key="child.id"></im-tree-node>
            </div>
        </im-collapse-transition>
    </div>
</template>

<script>
import ImCollapseTransition from "@/components/im-collapse-transition.js"
    export default {
        name:"ImTreeNode",
        components:{
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
            }
        },
        data(){
            return {
                expanded:false,
                iconDown:false
            }
        },
        methods:{
            /**
             * 下拉展开折叠处理
            */
            handleMenuList(){
                this.$nextTick(()=>{
                    this.expanded = !this.expanded;
                    this.handleIconStatus();
                })
            },
            /**
             * 箭头状态处理-方向
             */
            handleIconStatus(){
                this.iconDown = this.expanded;
            }
        }
    }
</script>

<style lang="scss" scoped>
.im-tree-node_label{
    display:flex;
    align-items: center;
    padding:4px 10px;
    font-size:14px;
    .triangle{
        color:#ccc;
        font-size:12px;
        margin-right:6px;
        &.down{
            transform: rotate(90deg);
            transition: transform 0.3s ease-in-out;
        }
    }
    &:hover{
        background-color:#f2f6fa;
    }
    
}
.im-tree-node_child{
    margin-left:10px;
}
</style>