<template>
    <div>
        <div class="title">基本用法-有禁用选项</div>
        <im-select class="select" v-model='im_select1'>
            <im-option
            v-for="item in options"
            :key="item.label"
            :value="item.value"
            :label="item.label"
            :disabled="item.disabled"></im-option>
        </im-select>
        <div class="title">基本用法-禁用</div>
        <im-select class="select" 
        v-model='im_select2'
        :disabled='true'>
            <im-option
            v-for="item in options"
            :key="item.label"
            :value="item.value"
            :label="item.label"
            :disabled="item.disabled"></im-option>
        </im-select>
    </div>
</template>

<script>
import ImSelect from '@/components/ImSelect/ImSelect.vue'
import ImOption from  '@/components/ImSelect/ImOption.vue'
    export default {
        name:"ImitateSelect",
        components:{
            ImSelect,
            ImOption
        },
        data(){
            return{
                options: [{
                    value: '选项1',
                    label: '黄金糕',
                    disabled:true
                    }, {
                    value: '选项2',
                    label: '双皮奶',
                    disabled:true
                    }, {
                    value: '选项3',
                    label: '蚵仔煎'
                    }, {
                    value: '选项4',
                    label: '龙须面'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                },{
                    value: '选项6',
                    label: '黄金糕6'
                    }, {
                    value: '选项7',
                    label: '双皮奶7'
                    }, {
                    value: '选项8',
                    label: '蚵仔煎8',
                    disabled:true
                    }, {
                    value: '选项9',
                    label: '龙须面9'
                    }, {
                    value: '选项10',
                    label: '北京烤鸭10'
                }],
                im_select1:"",
                im_select2:""
            }
        },
    }
</script>

<style lang="scss" scoped>
.select{
}
</style>