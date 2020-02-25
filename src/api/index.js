import ajax from './ajax'

export const getCateNavList = ()=> ajax({
    url:'/api/getCateNavList'
})

export const getindexList = ()=> ajax({
    url:'/api/getindexList'
})

export const getCateNavDatas =() =>ajax({
    url:'/api/getCateNavDatas'
})

export const getCateLists = () => ajax({
    url:'/api/getCateLists'
})

export const getseek = () => ajax({
    url:'/foo/xhr/search/init.json'
})

export const getfalls = () => ajax({
    url:'/foo/topic/v1/find/recManual.json'
})
export const getdrawing = () => ajax({
    url:'/foo/topic/v1/know/navWap.json'
})

//m.you.163.com/topic/v1/find/recManual.json
//https://m.you.163.com/topic/v1/know/navWap.json