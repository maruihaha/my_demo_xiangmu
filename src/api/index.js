import ajax from './ajax'

export const getCateNavList = ()=> ajax({
    url:'/getCateNavList'
})

export const getindexList = ()=> ajax({
    url:'/getindexList'
})

export const getCateNavDatas =() =>ajax({
    url:'/getCateNavDatas'
})

export const getCateLists = () => ajax({
    url:'/getCateLists'
})