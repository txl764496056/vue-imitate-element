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
      <el-radio-group v-model="el_radio_group_selected">
         <el-radio 
          v-for="item in el_radio_group" 
          :key="item.label" 
          :label='item.label'>选项{{item.label}}</el-radio>
      </el-radio-group>
    </div>


    <div class="im-content">
        <!-- 选中/禁用 -->
        <div class="title">选中/禁用</div>

        <div class="group-unit">
          <im-radio  
            v-for="item in im_radio"
            :key="item.label"
            :disabled="item.disabled" 
            :label="item.label"
            name='radio1'
            v-model="im_radio_selected">选项{{item.label}}</im-radio>
            <p class="remark">显示选中选项的标签值：<span>{{im_radio_selected}}</span></p>
        </div>

        <!-- 单选组 -->
        <div class="title">单选组</div>

        <div class="title2" data-index="1">禁用属性在 组(父im-radio-group)标签上</div>
        <div class="group-unit">
          <p class="tips">这组radio有2个父组件</p>
            <im-radio-group
            v-model="im_radio_group_selected1"
            name="'im-group1'">
                <im-radio 
                v-for="item in im_radio_group"
                :key="item.label"
                :label="item.label">选项{{item.label}}</im-radio>
            </im-radio-group>
            <p class="remark">显示选中选项的标签值：<span>{{im_radio_group_selected1}}</span></p>
        </div>

        <!-- 禁用属性在组标签上 -->
        <div class="title2" data-index="2">禁用属性在 组(父im-radio-group)标签上</div>
        <div class="group-unit">
          <p class="tips">这组radio有2个父组件</p>
            <im-radio-group
            v-model="im_radio_group_selected1"
            :disabled="true"
            :name="'im-group1'">
              <!-- 嵌套一个父组件,检测子组件在获取父的时候是否有影响 -->
              <empty-test> 
                <im-radio 
                v-for="item in im_radio_group"
                :key="item.label"
                :label="item.label">选项{{item.label}}</im-radio>
              </empty-test>
            </im-radio-group>
            <p class="remark">显示选中选项的标签值：<span>{{im_radio_group_selected1}}</span></p>
        </div>

        <div class="group-unit">
            <im-radio-group
            v-model="im_radio_group_selected2"
            :disabled="true"
            :name="'im-group2'">
                <im-radio 
                v-for="item in im_radio_group"
                :key="item.label"
                :label="item.label">选项{{item.label}}</im-radio>
            </im-radio-group>
            <p class="remark">显示选中选项的标签值：<span>{{im_radio_group_selected2}}</span></p>
        </div>

        <!-- 禁用属性在每个子标签上 -->
        <div class="title2" data-index="3">禁用属性在 子标签上</div>
        <div class="group-unit">
          <im-radio-group
          v-model="im_radio_group_selected3"
          :name="'im-group3'">
              <im-radio 
              v-for="item in im_radio_group"
              :key="item.label"
              :disabled="item.disabled"
              :label="item.label">选项{{item.label}}</im-radio>
          </im-radio-group>
          <p class="remark">显示选中选项的标签值：<span>{{im_radio_group_selected3}}</span></p>
        </div>

    </div> <!-- im-content end -->


  </div>
</template>

<script>
// @ is an alias to /src
import ImRadio from '@/components/ImRadio.vue'
import ImRadioGroup from '@/components/ImRadioGroup.vue'
import EmptyTest from '@/components/EmptyTest.vue'

export default {
  name: 'home',
  components: {
    ImRadio,
    ImRadioGroup,
    EmptyTest
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
      im_radio_group_selected1:1,
      im_radio_group_selected2:2,
      im_radio_group_selected3:3,
      im_radio_group:[
        {label:1,disabled:true},
        {label:2,disabled:false},
        {label:3,disabled:false}
      ],
    }
  },
  mounted(){
    this.imradio_group_value = this.im_radio_group_selected;
    this.imradio_value = this.im_radio_selected;
  },
  methods:{
    
  }
}
</script>
<style scoped lang='scss'>
.im-content{
  .im-radio{
    margin:5px;display:inline-block;
  }
}

</style>

