<template>
    <label class="im-checkbox" 
    :class="{'light':isChecked&&!isDisabled,'helf':!isChecked&&!isDisabled&&indeterminate}">
        <input type="checkbox" 
        :name="checkboxName"
        :disabled="isDisabled"
        :value="label"
        :checked="isChecked"
        v-model="isChecked"
        />
        <span></span>
        <slot></slot>
    </label>
</template>

<script>
    export default {
        name:"ImCheckbox",
        model:{
            prop:['checked'],
            event:'change'
        },
        props:{
            name:{
                type:String,
                default:""
            },
            disabled:{
                type:Boolean,
                default:false
            },
            checked:{
                type:Boolean,
                default:false
            },
            label:{
                type:[String,Number,Boolean],
                default:""
            },
            // true：全选（包括全选中，全不选中）,false：半选
            indeterminate:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return {
                group_parent:null
            }
        },
        computed:{
            isChecked:{
                get(){
                    if(this.isGroup()){
                        let checked_list = this.group_parent.checked_list;
                        for(let i=0;i<checked_list.length;i++){
                            if(checked_list[i]===this.label){
                                return true;
                            }
                        }
                        return false;
                    }else{
                        return this.checked;
                    }
                },
                set(val){
                    if(this.isGroup()){
                        this.group_parent.$emit('changeCheckedList',this.label);
                    }else{
                        this.$emit('change', val);
                    }
                }
            },
            /**
             * 最小选项数限制：
             *  1、已选择数量<=min  ，则已选择的禁用（表示不能被取消选择）
             *  2、必须是已选择的禁用，未被选择的是可选的
             * 最大选项数限制：
             *  1、已选择数量>=max,则还未选择的禁用（表示不能再多选择）
             *  2、必须是未选择的禁用
             */
            isDisabled(){
                 return this.isGroup() ? (
                     this.group_parent.disabled ||
                     ((this.group_parent.min>=this.group_parent.checked_list.length)&&this.isChecked) ||
                     (this.group_parent.max<=this.group_parent.checked_list.length&&!this.isChecked)
                     ):this.disabled;
            },
            checkboxName(){
                return this.isGroup()&&this.group_parent.name ? this.group_parent.name:this.name;
            },
        },
        methods:{
            isGroup(){
                let parent = this.$parent;
                while(parent){
                    if(parent.$options.componentName!='ImCheckGroup'){
                        parent = parent.$parent;
                    }else{
                        this.group_parent = parent;
                        return true;
                    }
                }
                return false;
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
    input:disabled:checked+span,input:disabled+span{background-color:theme-color(0.1);border-color:$color-dd;}
    input:disabled:checked+span::before{border-color:$color-bb;}
    &.light{
        color:$theme-color;
    }
    // 半选
    &.helf{
        input+span{
            background-color:$theme-color;border-color:$theme-color;
            &::before{
                border-left:none;border-color:#fff;
                transform:rotate(0) translate(40%,-100%);
            }
        }
    }
}
</style>