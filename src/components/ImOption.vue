<template>
    <option class="im-option"
    :value='value'
    :disabled="disabled"
    @click='handleClick'>{{label}}</option>
</template>

<script>
    export default {
        name:'ImOption',
        props:{
            value:{
                type:[String,Number],
                detault:""
            },
            label:{
                type:[String,Number],
                detault:""
            },
            disabled:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return {
                group_parent:null
            }
        },
        created(){
            this.isGroup()
        },
        methods:{
            /**
             * ？？？？？？？？？？？？差一个对ImOptionGroup组的禁用判断
             */
            handleClick(){
                if(this.disabled!==true){
                    this.group_parent.$emit('handleOptionClick',this)
                }
            },
            isGroup(){
                let parent = this.$parent;
                while(parent){
                    if(parent.$options.componentName==='ImSelect'){
                        this.group_parent = parent;
                        return true;
                    }else{
                        parent = parent.$parent;
                    }
                }
                return false;
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '@/scss/base.scss';
.im-option{
    font-size:14px;line-height:2;padding:0 10px;color:$content-color;
    &:hover{
        background-color:theme-color(0.1);
    }
}
</style>