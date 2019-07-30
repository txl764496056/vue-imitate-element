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
        v-bind="$attrs"
        @compositionstart="handleCompositionStart"
        @compositionend="handleCompositionEnd"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"></textarea>
    </div>
</template>

<script>
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
            autosize:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return {
                isComposing:false,
                isFocus:false,
                passVisible:false //true显示密码，false不显示明文密码
            }
        },
        methods:{
            handleCompositionStart(evt){
                this.isComposing = true;
                if(this.autosize){
                    let w = evt.target.clientWidth;
                    
                }
            },
            handleCompositionEnd(evt){
                this.isComposing = false;
                this.handleInput(evt);
            },
            handleInput(evt){
                if(this.isComposing) return;
                this.$emit('input',evt.target.value);
            },
            handleFocus(){
                this.isFocus = true;
            },
            handleBlur(){
                this.isFocus = false;
            },
            /**
             * 清空输入
             */
            clear(){
                this.$emit('input',"");
            },
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
            background-color:middle-gray(0.05);border-color:$color-ee;
        }
    }
    textarea{
        padding:10px;
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