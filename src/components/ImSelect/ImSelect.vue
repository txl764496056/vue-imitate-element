<template>
    <div class="im-select">
        <im-input
        v-model='selected'
        placeholder="请选择"
        :readonly="true"></im-input>
        <i class="arrow"></i>
    </div>
</template>

<script>
import ImInput from '@/components/ImInput/ImInput.vue'
    export default {
        name:"ImSelect",
        components:{
            ImInput
        },
        data(){
            return {
                selected:""
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
        position:absolute;right:5px;top:50%;margin-top:-($size * 1.4142) /2;
        transform:rotate(45deg);
        border: 1px solid $color-bb {
            left:none;
            top:none;
        }
    }
}
</style>