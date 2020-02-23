import Buying from '../pages/Buying/Buying'
import Classify from '../pages/Classify/Classify'
import Home from '../pages/Home/Home'
import Personage from '../pages/Personage/Personage'
import Trolley from '../pages/Trolley/Trolley'
import Moduledata from '../pages/Moduledata/Moduledata'
import Login from '../pages/Login/Login'
import Classifyright from '../components/classifyRight/classifyRight'


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
        path: '/moduledata',
        component: Moduledata,
        meta:{
            isLogin:true
        }
      },
      {
        path: '/login',
        component: Login,
        meta:{
            isLogin:false
        }
      },
    {
        path:'/',
        redirect:'/home'
    }
]