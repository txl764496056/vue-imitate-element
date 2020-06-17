<template>
    <div class="im-tree-node">
        <div class="im-tree-node_label" @click="handleMenuList">
            <span class="triangle iconfont icon-radiu-arrow-r" :class="{'down':iconDown}" v-if="!node.isLeaf"></span>
             <!-- 阻止冒泡 -->
            <im-checkbox 
            @click.native.stop
            @change="handleCheckedStatus"></im-checkbox>
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
import ImCheckbox from "@/components/ImCheckbox.vue"
import ImCollapseTransition from "@/components/im-collapse-transition.js"
    export default {
        name:"ImTreeNode",
        components:{
            ImCollapseTransition,
            ImCheckbox,
            // 渲染NodeContent组件
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
            // 当前节点对象
            node:{
                type:Object,
                default(){
                    return {};
                }
            }
        },
        data(){
            return {
                expanded:false, //是否展开当前节点，false：折叠,true：展开
                iconDown:false //箭头方向，false：向右，true：向下
            }
        },
        methods:{
            /**
             * 下拉展开折叠处理
             *  1、节点是叶子节点：不做任何处理
            */
            handleMenuList(){
                if(this.node.isLeaf){return;}
                if(this.expanded){
                    this.node.collapse();
                }else{
                    this.node.expand();
                }
            },
            /**
             * 箭头状态处理-方向
             */
            handleIconStatus(){
                this.iconDown = this.expanded;
            },
            handleCheckedStatus(){}
        },
        watch:{
            'node.expanded':{
                handler:function(val){
                    this.expanded = val;
                    this.handleIconStatus();
                },
                immediate:true //设置之后，初始化时默认选项才会展开
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