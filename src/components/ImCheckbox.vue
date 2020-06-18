<template>
    <label class="im-checkbox" 
    :class="{'light':isChecked&&!isDisabled,'helf':!isChecked&&indeterminate,'helf-gray':isDisabled}">
        <input type="checkbox" 
        :name="checkboxName"
        :disabled="isDisabled"
        :value="label"
        :checked="isChecked"
        v-model="isChecked"
        @change="handleChange"
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
            event:'input' //用input，在树形控件的时候，需要用change并带入event参数
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
                        this.$emit('input', val);
                    }
                }
            },
            /**
             * 1、根据组(父)标签是否含有禁用属性判断
             * 2、根据选中数量范围判断
             * 3、根据单选按钮本身是否是禁用判断
             */
            isDisabled(){
                return (this.isGroup()&&this.group_parent.disabled) || this.isLimitDisabled() || this.disabled;
            },
            checkboxName(){
                return this.isGroup()&&this.group_parent.name ? this.group_parent.name:this.name;
            },
        },
        methods:{
            /**
             * 数量限制的时候，选项禁用情况
             * 再有设置组(父的前提下)
             * 最小选项数限制：
             *  （1）已选择数量<=min  ，则已选择的禁用（表示不能被取消选择）
             *  （2）必须是已选择的禁用，未被选择的是可选的
             * 最大选项数限制：
             *  （1）已选择数量>=max,则还未选择的禁用（表示不能再多选择）
             *  （2）必须是未选择的禁用
             *  （3）max>0
             */
            isLimitDisabled(){
               return this.isGroup() && 
                    ( (this.group_parent.checked_list.length<=this.group_parent.min&&this.isChecked) ||
                    ((this.group_parent.max>0&&this.group_parent.checked_list.length>=this.group_parent.max)&&!this.isChecked) );
            },
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
            },
            handleChange(evt){
                // 若直接发送事件，会导致发送的数据是修改之前的，input和change发送的结果值是相反的
                this.$nextTick(()=>{
                    this.$emit('change',this.isChecked,evt)
                })
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
    // 禁选按钮颜色
    @mixin disabled-btn{
        background-color:theme-color(0.1);border-color:$color-dd;
    }
    // 未禁选按钮颜色
    @mixin undisabled-btn{
        background-color:$theme-color;border-color:$theme-color;
    }
    // 未禁选-选中
    input:checked+span{
        @include undisabled-btn;
        &::before{
            border-color:#fff;
        }
    }
    // 禁选-选中
    input:disabled:checked+span{
        @include disabled-btn;
        &::before{
            border-color:$color-bb;
        }
    }
    // 禁选-未选中
    input:disabled+span{
        @include disabled-btn;
    }

    // 高亮
    &.light{
        color:$theme-color;
    }
    // 半选
    &.helf{
        // 禁选
        &.helf-gray{
            input+span{
                @include disabled-btn;
                &::before{
                    border-left:none;border-color:$color-bb;
                }
            }
        }
        // 未禁选
        input+span{
            @include undisabled-btn;
            &::before{
                border-left:none;border-color:#fff;
                transform:rotate(0) translate(40%,-100%);
            }
        }
    }
}
</style>