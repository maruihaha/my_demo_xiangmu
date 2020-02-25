

import {
    QWERTY
  } from './mutations_type'

export default{
    qwerty (state, initData) { //设置参数
        state.initData = initData;
    },
    getcode (state, phonecell) { //设置参数
        state.phonecell = phonecell;
    }
}
