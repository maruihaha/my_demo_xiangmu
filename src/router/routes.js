import Buying from '../pages/Buying/Buying'
import Classify from '../pages/Classify/Classify'
import Home from '../pages/Home/Home'
import Personage from '../pages/Personage/Personage'
import Trolley from '../pages/Trolley/Trolley'


export default [
    {
        path:'/home',// 首页
        component:Home
    },
    {
        path:'/classify',//分类
        component:Classify
    },
    {
        path:'/buying',//值得买
        component:Buying
    },
    {
        path:'/trolley',//购物车
        component:Trolley
    },
    {
        path:'/personage',//个人
        component:Personage
    },
    {
        path:'/',
        redirect:'home'
    }
]