import Buying from '../pages/Buying/Buying'
import Classify from '../pages/Classify/Classify'
import Home from '../pages/Home/Home'
import Personage from '../pages/Personage/Personage'
import Trolley from '../pages/Trolley/Trolley'
import Moduledata from '../pages/Moduledata/Moduledata'
import Login from '../pages/Login/Login'
import Classifyright from '../components/classifyRight/classifyRight'
import Explore from '../pages/Explore/Explore'
import Loginverify from '../pages/Loginverify/Loginverify'

export default [
    {
        path:'/home',// 首页
        component:Home,
        meta:{
            isLogin:true
        }
    },
    {
        path:'/classify',//分类
        component:Classify,
        meta:{
            isLogin:true
        },
        children:[
            {
                path:'/classify/classifyright/:id',
                component:Classifyright,
                meta:{
                    isLogin:true
                },
            },
        ]
    },
    {
        path:'/buying',//值得买
        component:Buying,
        meta:{
            isLogin:true
        }
    },
    {
        path:'/trolley',//购物车
        component:Trolley,
        meta:{
            isLogin:true
        }
    },
    {
        path:'/personage',//个人
        component:Personage,
        meta:{
            isLogin:true
        }
    },
    {
        path: '/moduledata/:id',
        component: Moduledata,
        meta:{
            isLogin:true
        }
      },
      {
        path: '/login', // 登录页面
        component: Login,
        meta:{
            isLogin:false
        },
      },
        {
            path: '/verify',
            component: Loginverify,
            meta:{
                isLogin:false
            }
        },
      {
        path: '/explore',
        component: Explore,
        meta:{
            isLogin:false
        }
      },
    {
        path:'/',
        redirect:'/home'
    }
]