<template>
    <div class="im-input">
        <input  
        v-bind="$attrs"
        :value="value"
         @input="handleInput"
        />
        <i class="clear"></i>
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
        methods:{
            handleInput(evt){
                this.$emit('change',evt.target.value);
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
    .clear{
        $size:16px;
        display:inline-block;width:$size;height:$size;position:absolute;right:5px;top:50%;margin-top:-($size/2);border:1px solid $color-bb;border-radius:50%;
        &::after,&::before{
            height:1px;background-color:$color-bb;width:80%;content:"";display:inline-block;position:absolute;transform-origin:center center;bottom:50%;left:2px;
        }
        &::after{
            transform:rotate(45deg);
        }
        &::before{
            transform:rotate(-45deg);
        }
    }
}
</style>