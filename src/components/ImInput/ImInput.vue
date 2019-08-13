<template>
    <div class="im-input" :class="{'focus':isFocus}">
        <template v-if="type!=='textarea'">
            <input  
            :value="value"
            :type="showPassword ? (passVisible ? 'text':'password'):type"
            v-bind="$attrs"
            @compositionstart="handleCompositionStart"
            @compositionend="handleCompositionEnd"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
            />
            <i class="im-icon-clear" @click="clear" v-show="value!=''&&clearable"></i>
            <i class="im-icon-pass" :class="{'hide':passVisible}" @click="passVisible=!passVisible" v-if="this.showPassword&&value!=''"></i>
        </template>
        <textarea v-else
        ref="textarea" 
        :style="textareaStyle"
        v-bind="$attrs"
        @compositionstart="handleCompositionStart"
        @compositionend="handleCompositionEnd"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"></textarea>
    </div>
</template>

<script>
import textareaHeight from "./textareaHeight"
import merge from '@/utils/merge'
    export default {
        name:"ImInput",
        inheritAttrs:false,
        model:{
            props:['value'],
            event:"input"
        },
        props:{
            value:[Number,String,Object],
            clearable:{
                type:Boolean,
                default:false
            },
            showPassword:{
                type:Boolean,
                default:false
            },
            type:{
                type:String,
                default:'text'
            },
            // Object,接受最大行数和最小行数
            autosize:{
                type:[Boolean,Object],
                default:false
            },
            resize:{
                type:String,
                default:'auto'
            }
        },
        data(){
            return {
                isComposing:false,
                isFocus:false,
                passVisible:false, //true显示密码，false不显示明文密码
                textareaStyle:null
            }
        },
        mounted(){
            this.textareaAutoHeight();
        },
        methods:{
            handleCompositionStart(){
                this.isComposing = true;
            },
            handleCompositionEnd(evt){
                this.isComposing = false;
                this.handleInput(evt);
            },
            handleInput(evt){
                // 是文本域，且要求高度自适应
                this.textareaAutoHeight();
                if(this.isComposing) return;
                this.$emit('input',evt.target.value);
            },
            handleFocus(){
                this.isFocus = true;
            },
            handleBlur(evt){
                this.isFocus = false;
                this.$emit('blur',evt);
            },
            /**
             * 清空输入
             */
            clear(){
                this.$emit('input',"");
            },
            /**
             * 文本域高度自适应
             */
            textareaAutoHeight(){
                if(this.type==='textarea'&&this.autosize){
                    let minRows = this.autosize.minRows;
                    let maxRows = this.autosize.maxRows;
                    this.textareaStyle = merge(
                        {},
                        textareaHeight(this.$refs.textarea,minRows,maxRows),
                        {resize:this.resize}
                    );
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
@import "@/scss/base.scss";
input::-webkit-input-placeholder{
    color:$placeholder-color;
}
.im-input{
    $radiu-size:5px;
    position:relative;display:flex;border:1px solid $color-dd;border-radius:$radiu-size;align-items:center;
    input,textarea{
        flex:1;border:none;border-radius:$radiu-size;
        &:focus{
            outline:none;
        }
        &:disabled{
            background-color:middle-gray(0.05);border-color:$color-ee;cursor:not-allowed;
        }
    }
    textarea{
        padding:7px 10px;line-height:1.5;
    }
    input{
        padding:5px 10px;height:38px;
    }
    >i{
        flex-shrink:0;margin-right:6px;
    }
    &.focus{
        border-color:$theme-color;
    }
}
</style>