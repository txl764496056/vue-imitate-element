<template>
    <label name="im-radio" class="im-radio">
        <input 
        :checked="value===label"
        :disabled="isDisable" 
        v-model='model'
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
        props:{
            value:{
                type:[String,Number,Boolean],
                default:""
            },
            name:{
                type:[String,Number],
                default:""
            },
            label:{
                type:[String,Number,Boolean],
                default:""
            },
            disabled:{
                type:[Boolean],
                default:false
            }
        },
        data(){
            return {
            }
        },
        computed:{
            model:{
                get(){
                    return this.isGroup() ? this.radio_parent.value:this.value;
                },
                set(val){
                    if (this.isGroup()) {
                        this.radio_parent.$emit.apply(this.radio_parent,['input'].concat(val));
                    } else {
                        this.$emit('input', val);
                    }

                }
            },
            isDisable:{
                get(){
                    return this.isGroup()&&this.radio_parent.disabled ? this.radio_parent.disabled:this.disabled;
                }
            }
        },
        methods:{
            isGroup(){
                let parent = this.$parent;
                while(parent){
                    if(parent.$options.componentName==="ImRadioGroup"){
                        this.radio_parent = parent;
                        return true;
                    }else{
                        parent = parent.$parent;
                    }
                }
                return false;
            }
            // radioChange($event){
            //     let val = $event.target.value;
            //     this.$emit('input',val);
            //     // 以下3中相同的效果
            //     // this.$parent.$emit('input',val);
            //     // this.$parent.$emit('handleChange',val);
            //     this.$parent.$emit.apply(this.$parent,['handleChange'].concat(val));
            // },
        },
    }
</script>

<style lang="scss" scoped>
@import '@/scss/base.scss';
@mixin border-dd{
    border:1px solid #ddd;
}

.im-radio{
    position:relative;z-index:10;display:inline-block;font-size:14px;user-select:none;color:$color-66;
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