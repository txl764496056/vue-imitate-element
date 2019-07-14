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
        model:{
            get(){
                return 'group-model'
            }
        },
        data(){
            return {
                temp:this.value
            }
        },
        created(){
            // this.$on('handleChange',value=>{
            //     this.$emit('change',value);
            // })
        },
        methods:{
        }
    }
</script>

<style lang="scss" scoped>

</style>