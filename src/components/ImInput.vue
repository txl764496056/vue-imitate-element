<template>
    <div class="im-input">
        <input  
        v-bind="$attrs"
        :value="value"
         @focus="inputFocus"
         @blur="inputBlur"
         @change="inputChange"
        />
        <i class="clear-btn" v-show="isShowClear"></i>
    </div>
</template>

<script>
    export default {
        name:"ImInput",
        inheritAttrs:false,
        model:{
            props:['value'],
            event:"change"
        },
        props:{
            value:[Number,String,Object],
            clearable:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return {
                isShowClear:false
            }
        },
        methods:{
            inputChange(evt){
                this.$emit('change',evt.target.value);
            },
            inputFocus(){
                this.isShowClear = true;
            },
            inputBlur(){
                this.isShowClear = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "@/scss/base.scss";
input::-webkit-input-placeholder{
    color:$placeholder-color;
}
.im-input{
    position:relative;
    input{
        height:36px;border:1px solid $color-dd;width:100%;padding:5px 10px;border-radius:5px;
        &:focus{
            outline:none;border-color:$theme-color;
        }
        &:disabled{
            background-color:middle-gray(0.05);border-color:$color-ee;
        }
    }
}
</style>