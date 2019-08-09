<template>
    <div class="im-select">
        <im-input
        v-model='selectedLabel'
        placeholder="请选择"
        :readonly="true"
        @click.native="handleClick"></im-input>
        <i class="arrow"></i>
        <div class="option-list"
         v-if="isShowOptions">
            <im-scrollbar class="select-scroll">
                <slot></slot>
            </im-scrollbar>
        </div>
    </div>
</template>

<script>
import ImScrollbar from '@/components/ImScrollbar'
import ImInput from '@/components/ImInput/ImInput.vue'
    export default {
        name:"ImSelect",
        componentName:"ImSelect",
        components:{
            ImInput,
            ImScrollbar
        },
        model:{
            prop:['value'],
            event:'change'
        },
        props:{
            value:{
                type:[String,Number],
                default:''
            }
        },
        data(){
            return {
                selectedLabel:"",
                isShowOptions:false
            }
        },
        created(){
            this.$on('handleOptionClick',function(option){
                this.selectedLabel = option.label;
                this.$emit('change',option.value);
                this.isShowOptions = false;
            });
        },
        methods:{
            handleClick(){
                // console.log("dd");
                this.isShowOptions = true;
            },
            handleOptionSelect(data){
                console.log(data);
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '@/scss/base.scss';
.im-select{
    display:inline-block;position:relative;
    .arrow{
        $size:8px;
        height:$size;width:$size;
        position:absolute;right:5px;top:14px;
        // margin-top:-($size * 1.4142) /2;
        transform:rotate(45deg);
        border: 1px solid $color-bb {
            left:none;
            top:none;
        }
    }
    .option-list{
        $size:8px;
        position:absolute;top:100%;left:0;right:0;margin-top:$size;z-index:0;
        box-shadow:0 0 5px middle-gray(0.1);
        .select-scroll{
            position:relative;z-index:5;border-radius:5px;
        }
        &::before{
            position:absolute;width:$size;height:$size;display:inline-block;content:"";left:20px;top:-($size / 1.5) + 1;
            border: 1px solid #ddd {
                bottom:none;
                right:none;
            };
            z-index:10;
            transform:rotate(45deg);
            background-image:linear-gradient(135deg,#fff 50%,transparent 50%);background-size:100% 100%;
        }
    }
}
</style>