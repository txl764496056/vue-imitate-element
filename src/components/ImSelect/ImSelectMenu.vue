<template>
    <div class="option-list">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'ImSelectMenu',
        componentName:'ImSelectMenu',
        created(){
            this.$on('showOptionsChange',function(option){
                console.log(option);
                // if(option!=this.index){
                //     this.isShowOptions = false;
                // }
            })
        }
    }
</script>

<style lang="scss" scoped>
@import '@/scss/base.scss';
.option-list{
        $size:8px;
        position:absolute;top:100%;left:0;right:0;margin-top:$size;
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
</style>