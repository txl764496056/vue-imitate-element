<template>
    <div>
        <div class="title">树形控件</div>
        <el-tree :data="data"></el-tree>
        <div class="title">树形控件-复选框版</div>
        <el-tree 
            show-checkbox 
            @check-change="handleCheckChange"  
            :data="data2"
            node-key="id"
            :default-checked-keys="[3]"
            :default-expanded-keys="[1,2]"></el-tree>
    </div>
</template>

<script>
    export default {
        name:'ElementTree',
        data() {
            return {
                data: [{
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                        label: '三级 1-1-1'
                        }]
                    }]
                    }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                        label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                        label: '三级 2-2-1'
                        }]
                    }]
                    }, {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                        label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                        label: '三级 3-2-1'
                        }]
                    }]
                }],

                data2: [{
                    id:1,
                    label: '一级 1',
                    children: [{
                        id:2,
                        label: '二级 1-1',
                        children: [{
                            id:3,
                            label: '三级 1-1-1',
                            disabled:true
                        },{
                            id:4,
                            label: '三级 1-1-2'
                        },{
                            id:5,
                            label: '三级 1-1-3',
                            disabled:true
                        },{
                            id:6,
                            label: '三级 1-1-3'
                        }]
                    }]
                    }, 
                //     {
                //     label: '一级 2',
                //     children: [{
                //         label: '二级 2-1',
                //         children: [{
                //         label: '三级 2-1-1'
                //         }]
                //     }, {
                //         label: '二级 2-2',
                //         children: [{
                //         label: '三级 2-2-1'
                //         }]
                //     }]
                //     }, {
                //     label: '一级 3',
                //     children: [{
                //         label: '二级 3-1',
                //         children: [{
                //         label: '三级 3-1-1'
                //         }]
                //     }, {
                //         label: '二级 3-2',
                //         children: [{
                //         label: '三级 3-2-1'
                //         }]
                //     }]
                // }
                ],
            }
        },
        methods:{
            handleCheckChange(data,evt){
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>