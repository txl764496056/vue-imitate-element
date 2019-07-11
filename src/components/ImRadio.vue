<template>
    <label name="im-radio" class="im-radio">
        <input 
        :checked="value===label"
        :disabled="disabled" 
        @change="radioChange($event)"
         type="radio" :name='name' :value="label"/>
        <span class="im-radio-btn"></span>
        <span class="im-radio-txt">
            <slot></slot>
        </span>
    </label>
</template>

<script>
    export default {
        name:"ImRadio",
        componentName:"ImRadio",
        model:{
            prop:'value',
            event:'change',
        },
        props:{
            value:{
                type:[String,Number,Boolean],
                default(){
                   if(this.$parent.value&&this.$parent.value!=''){
                        return this.$parent.value;
                    }else{
                        return '';
                    }
                }
            },
            name:{
                type:[String,Number],
                default(){
                    console.log(this.getCompoenentParent,'prop');
                    if(this.$parent.name&&this.$parent.name!=''){
                        return this.$parent.name;
                    }else{
                        return '';
                    }
                }
            },
            label:{
                type:[String,Number,Boolean],
                default:""
            },
            disabled:{
                type:[Boolean],
                default(){
                    if(this.$parent.disabled!=='undifined'){
                        return this.$parent.disabled;
                    }else{
                        return false;
                    } 
                }
            }
        },
        mounted(){
            // console.log(this.getCompoenentParent,'ddd')
        },
        computed:{
            getCompoenentParent(){
                let name = 'ImRadioGroup';
                let parent = this.$parent;
                // console.log(this.$parent);
                while(parent){
                    if(parent.$options.componentName!==name){
                        parent = parent.$parent;
                    }else{
                        break;
                    }
                }
                return parent;
                // return false;
            }
        },
        methods:{
            radioChange($event){
                let val = $event.target.value;
                this.$emit('change',val);
                if(this.$parent.setValue){
                    this.$parent.setValue(val);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '@/scss/base.scss';
@mixin border-dd{
    border:1px solid #ddd;
}

.im-radio{
    position:relative;z-index:10;display:inline-block;
    input{
        position:absolute;left:0;top:0;
        opacity:0;
    }
    // 选中
    input:checked+.im-radio-btn{background-color:$theme-color;border:none;}
    input:checked+.im-radio-btn::before{opacity:1;}
    // 禁用
    input:disabled+.im-radio-btn{background-color:#eee;}
    input:checked:disabled+.im-radio-btn{@include border-dd;}
    input:checked:disabled+.im-radio-btn::before{opacity:1;background-color:#bbb;}

    input,.im-radio-btn,.im-radio-txt{vertical-align: middle;}
}

.im-radio-btn{
    display:inline-block;width:14px;height:14px;border-radius:50%;background-color:#fff;
    position:relative;display:inline-flex;justify-content:center;align-items:center;margin-right:5px;
    @include border-dd;
    &::before{
        content:"";background-color:#fff;width:6px;height:6px;border-radius:50%;
        display:inline-block;opacity:0;
    }
}
</style>