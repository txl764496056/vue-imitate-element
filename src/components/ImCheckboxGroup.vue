<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"ImCheckGroup",
        model:{
            prop:['checkedList'],
            event:"change"
        },
        props:{
            checked_list:{
                type:Array,
                default(){
                    return [];
                }
            }
        },
        mounted(){
            this.$on('change',function(data){
                this.checked_list.push(data);
                // this.$emit('change',this.checked_list);
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>