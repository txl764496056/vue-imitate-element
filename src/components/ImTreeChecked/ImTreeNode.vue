<template>
    <div class="im-tree-node">
        <div class="im-tree-node_label" @click="handleMenuList">
            <span class="triangle iconfont icon-radiu-arrow-r" :class="{'down':iconDown}" v-if="!node.isLeaf"></span>
             <!-- 阻止冒泡 !!disabled 保证数据传入的是boolean值-->
            <im-checkbox 
            @click.native.stop
            @change="handleCheckedStatus"
            :disabled="!!node.disabled"
            :indeterminate="indeterminate"
            v-model="checked"></im-checkbox>
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
                indeterminate:false,//不确定状态
                checked:false, //复选框是否选中
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
            /**
             * 按钮点击事件：选中/取消
             */
            handleCheckedStatus(){
                // if(this.checked){
                    this.node.setChecked(this.checked,true);
                // }
            }
        },
        watch:{
             /**
              * node节点展开折叠控制属性监听
              */
            'node.expanded':{
                handler:function(val){
                    this.expanded = val;
                    this.handleIconStatus();
                },
                immediate:true //设置之后，初始化时默认选项才会展开
            },
            /**
             * node节点选中/取消选中属性监听
             */
            'node.checked':{
                handler:function(val){
                    this.checked = val;
                },
                immediate:true
            },
            /**
             * node节点复选框不确定状态属性监听
             */
            'node.indeterminate':{
                handler:function(val){
                    this.indeterminate = val;
                },
                immediate:true
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