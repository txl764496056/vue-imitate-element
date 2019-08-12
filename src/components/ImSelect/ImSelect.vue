<template>
    <div class="im-select"
    @click.capture="handleClick">
        <im-input
        v-model='selectedLabel'
        placeholder="请选择"
        :readonly="true"
        ref="imSelectInput"
        @blur="handBlur"
        @focus="handFocus"></im-input>
        <i class="arrow"></i>
        <!-- <div class="option-list"
         v-if="isShowOptions">
            <im-scrollbar class="select-scroll">
                <slot></slot>
            </im-scrollbar>
        </div> -->
        <im-select-menu
        v-if="isShowOptions">
             <im-scrollbar class="select-scroll">
                <slot></slot>
            </im-scrollbar>
        </im-select-menu>
    </div>
</template>

<script>
import ImScrollbar from '@/components/ImScrollbar'
import ImInput from '@/components/ImInput/ImInput.vue'
import Emitter from '@/utils/emitter.js'
import imSelectMenu from './ImSelectMenu.vue'
    export default {
        mixins:[Emitter],

        name:"ImSelect",
        componentName:"ImSelect",
        components:{
            ImInput,
            ImScrollbar,
            imSelectMenu
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
                this.isShowOptions = !this.isShowOptions;
            },
            documentClick(){
                if(this.isShowOptions) 
                this.isShowOptions = false;
            },
            handBlur(){
                document.addEventListener('click',this.documentClick,true);
            },
            handFocus(){
                document.removeEventListener('click',this.documentClick);
            }
        },
        
    }
</script>

<style lang="scss" scoped>
@import '@/scss/base.scss';
.im-select{
    display:inline-block;position:relative;background-color:#fff;
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
}
</style>