<template>
  <div class="home compare-box">
    <div class="el-content">
      <!-- 选中/禁用 -->
      <div class="title">选中/禁用</div>
      <el-radio 
      v-for="item in el_radio" 
      :key="item.label" 
      v-model="el_radio_selected" 
      :label='item.label'
      :disabled="item.disabled">选项{{item.label}}</el-radio>
      <!-- 单选组 -->
      <div class="title">单选组</div>
      <el-radio-group disabled v-model="el_radio_group_selected">
         <el-radio 
          v-for="item in el_radio_group" 
          :key="item.label" 
          :label='item.label'>选项{{item.label}}</el-radio>
      </el-radio-group>
    </div>
    <div class="im-content">
      <!-- 选中/禁用 -->
        <div class="title">选中/禁用</div>
        <im-radio  
        v-for="item in im_radio"
        :key="item.label"
        :disabled="item.disabled" 
        :label="item.label"
        @change="imRadioChange"
        v-model="im_radio_selected">选项{{item.label}}</im-radio>
        <p>显示选中选项的标签值：{{imradio_value}}</p>
        <!-- 单选组 -->
        <div class="title">单选组</div>

        <!-- 禁用属性在组标签上 -->
        <div class="title2" data-index="1">禁用属性在 组(父)标签上</div>
        <im-radio-group class="group-unit"
        v-model="im_radio_group_selected"
        name="'im-group1'">
          <im-checkbox>    <!-- 嵌套一个div,检测子组件在获取父的时候是否有影响-->
            <im-radio 
            v-for="item in im_radio_group"
            :key="item.label"
            :label="item.label">选项{{item.label}}</im-radio>
          </im-checkbox>
        </im-radio-group>
        <im-radio-group class="group-unit"
        v-model="im_radio_group_selected"
        :disabled="true"
        name="'im-group1'">
            <im-radio 
            v-for="item in im_radio_group"
            :key="item.label"
            :label="item.label">选项{{item.label}}</im-radio>
        </im-radio-group>

        <!-- 禁用属性在每个子标签上 -->
        <div class="title2" data-index="22">禁用属性在 子标签上</div>
        <im-radio-group
        v-model="im_radio_group_selected"
        @change="imRadioGroupChange"
        name="'im-group1'">
            <im-radio 
            v-for="item in im_radio_group"
            :key="item.label"
            :disabled="item.disabled"
            :label="item.label">选项{{item.label}}</im-radio>
        </im-radio-group>
        <p>显示选中选项的标签值：{{imradio_group_value}}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ImRadio from '@/components/ImRadio.vue'
import ImRadioGroup from '@/components/ImRadioGroup.vue'
import ImCheckbox from '@/components/ImCheckbox.vue'

export default {
  name: 'home',
  components: {
    ImRadio,
    ImRadioGroup,
    ImCheckbox
  },
  data(){
    return {
      // 单选框
      im_radio_selected:'4',
      im_radio:[
        {label:'4',disabled:true},
        {label:'5',disabled:false},
        {label:'6',disabled:true},
        {label:'7',disabled:false}

      ],
      el_radio_selected:1,
      el_radio:[
        {label:1,disabled:true},
        {label:2,disabled:false},
        {label:3,disabled:true}
      ],
      // 单选组
      el_radio_group_selected:1,
      el_radio_group:[
        {label:1,disabled:false},
        {label:2,disabled:false},
        {label:3,disabled:false}
      ],
      im_radio_group_selected:2,
      im_radio_group:[
        {label:1,disabled:true},
        {label:2,disabled:false},
        {label:3,disabled:false}
      ],
      // 存放已选中选项的值
      imradio_group_value:"",
      imradio_value:""
    }
  },
  mounted(){
    this.imradio_group_value = this.im_radio_group_selected;
    this.imradio_value = this.im_radio_selected;
  },
  methods:{
    imRadioChange(val){
      this.imradio_value = val;
      
    },
    imRadioGroupChange(val){
      this.imradio_group_value = val;
    }
  }
}
</script>
<style scoped lang='scss'>
.im-content{
  .im-radio{
    margin:5px;display:inline-block;
  }
}
.group-unit{
  box-shadow:0 0 3px rgba(125,125,125,0.15);margin:5px 0;padding:3px;
}
</style>

