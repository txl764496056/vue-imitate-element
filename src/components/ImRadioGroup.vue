<template>
    <div @change="$emit('change',temp)" class="img-radio-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"ImRadioGroup",
        componentName:"ImRadioGroup",
        model:{
            prop:['value'],
            event:'change'
        },
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
        data(){
            return {
                temp:this.value
            }
        },
        methods:{
            setValue(val){
                this.temp = val;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>