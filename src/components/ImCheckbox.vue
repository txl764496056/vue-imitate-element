<template>
    <label class="im-checkbox">
        <input type="checkbox" 
        :name="name"
        :disabled="disabled"
        :label="label"/>
        <span></span>
        <slot></slot>
    </label>
</template>

<script>
    export default {
        name:"ImCheckbox",
        props:{
            name:{
                type:String,
                default:""
            },
            disabled:{
                type:Boolean,
                default:false
            },
            label:{
                type:[String,Number,Boolean],
                default:""
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '@/scss/base.scss';
.im-checkbox{
    user-select: none;display:inline-flex;align-items:center;color:$color-66;
    span{
        width:14px;height:14px;border-radius:2px;border:1px solid #ddd;display: inline-block;background-color:#fff;margin-right:5px;font-size:14px;
        &::before{
            background-color:transparent;content:"";width:60%;height:30%;display:inline-block;
            font-size:14px;
            border: 2px solid transparent{
                top:none;
                right:none;
            }
            transform:rotate(-45deg) translate(50%,-50%);
        }
    }
    input{opacity:0;width:0;height:0;}
    input:checked+span{background-color:$theme-color;border-color:$theme-color;}
    input:checked+span::before{border-color:#fff;}
}
</style>