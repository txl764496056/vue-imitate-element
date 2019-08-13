<template>
    <div class="im-select"
     @mouseenter="imInputmouseEnter"
     @mouseleave="imInputMouseLeave">
     <!-- 设置了清除 且 鼠标移入 -->
        <im-input
        v-model='selectedLabel'
        placeholder="请选择"
        :readonly="true"
        :disabled="disabled"
        :clearable="clearable&&mouseEnter"
        v-bind="$attrs"
        @click.native=" disabled ? '':handleClick()"
        @blur="handBlur"></im-input>
        <!-- 可用状态 且（是否有清除设置 ? （有清除且鼠标离开）:true） -->
        <i class="arrow transition" v-if="!disabled&&(clearable ? (!mouseEnter):true)" :class='{"arrow-up":isShowOptions}'></i>
        <div class="option-list"
         v-if="isShowOptions">
            <im-scrollbar class="select-scroll">
                <slot></slot>
            </im-scrollbar>
        </div>
        <!-- <im-select-menu
        v-if="isShowOptions">
             <im-scrollbar class="select-scroll">
                <slot></slot>
            </im-scrollbar>
        </im-select-menu> -->
    </div>
</template>

<script>
import ImScrollbar from '@/components/ImScrollbar'
import ImInput from '@/components/ImInput/ImInput.vue'
import { setTimeout } from 'timers';
    export default {
        name:"ImSelect",
        inheritAttrs:false,
        componentName:"ImSelect",
        components:{
            ImInput,
            ImScrollbar,
        },
        model:{
            prop:['value'],
            event:'change'
        },
        props:{
            value:{
                type:[String,Number],
                default:''
            },
            disabled:{
                type:Boolean,
                default:false
            },
            clearable:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return {
                selectedLabel:"",
                isShowOptions:false,
                mouseEnter:false
            }
        },
        created(){
            this.$on('handleOptionClick',function(option){
                this.selectedLabel = option.label;
                this.$emit('change',option.value);
                this.isShowOptions = false;
            });
        },
        methods:{
            handleClick(){
                this.isShowOptions = !this.isShowOptions;
            },
            handBlur(){
                let _this = this;
                setTimeout(function(){
                    _this.isShowOptions = false;
                },150)
            },
            imInputmouseEnter(){
                this.mouseEnter = true;
            },
            imInputMouseLeave(){
                this.mouseEnter = false;
            }
        },
        
    }
</script>

<style lang="scss" scoped>
@import '@/scss/base.scss';
.im-select{
    display:inline-block;position:relative;background-color:#fff;
    &.show{
        &:hover{
            .arrow{
                display:none;
            }
        }
    }
    .option-list{
        $size:8px;
        position:absolute;top:100%;left:0;right:0;margin-top:$size;z-index:99;background-color:#fff;
        box-shadow:0 0 5px middle-gray(0.1);
        .select-scroll{
            position:relative;z-index:5;border-radius:5px;
        }
        &::before{
            position:absolute;width:$size;height:$size;display:inline-block;content:"";left:20px;top:-($size / 1.5) + 1;
            border: 1px solid #ddd {
                bottom:none;
                right:none;
            };
            z-index:10;
            transform:rotate(45deg);
            background-image:linear-gradient(135deg,#fff 50%,transparent 50%);background-size:100% 100%;
        }
    }
}
</style>