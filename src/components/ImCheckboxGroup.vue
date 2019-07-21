<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"ImCheckGroup",
        componentName:"ImCheckGroup",
        model:{
            prop:['checked_list'],
            event:"change"
        },
        props:{
            checked_list:{
                type:Array,
                default(){
                    return [];
                }
            },
            disabled:{
                type:Boolean,
                default:false
            }
        },
        mounted(){
            this.$on('changeCheckedList',function(data){
                
                let pos = -1;
                let isExist=this.checked_list.filter(function(item,index){
                    if(item===data){
                        pos=index;
                    }
                    return item===data;
                });

                if(isExist.length>0){
                    this.checked_list.splice(pos,1);
                }else{
                    this.checked_list.push(data);
                }
                 
                this.$emit('change',this.checked_list);
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>