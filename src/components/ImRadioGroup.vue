<template>
    <div class="img-radio-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"ImRadioGroup",
        componentName:"ImRadioGroup",
        props:{
            value:{
                type:[String,Number,Boolean],
                default:""
            },
            name:{
                type:[String],
                default:""
            },
            disabled:{
                type:[Boolean],
                default:false
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>