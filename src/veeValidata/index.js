// 表单验证的库
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)

VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  attributes: {
    phone: '手机号',
    pwd: '验证码'
  }
})
// 自定义验证规则
VeeValidate.Validator.extend('phone', {
    validate: value => {
      return /^1\d{10}$/.test(value)
    },
    getMessage: field => field + '必须是11位手机号码'
  })
  VeeValidate.Validator.extend('pwd', {
    validate: value => {
      return /^\d{4,6}$/.test(value)
    },
    getMessage: field => field + '4到6位验证码'
  })