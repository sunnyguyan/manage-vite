/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod';
const EnvConfig={
    dev:{
        baseApi:"/",
        mockApi:"https://www.fastmock.site/mock/13c674e133fbd03fb6e3690d5fbe14e8/api"
    },
    test:{
        baseApi:"",
        mockApi:"https://www.fastmock.site/mock/13c674e133fbd03fb6e3690d5fbe14e8/api"
    },
    prod:{
        baseApi:"",
        mockApi:"https://www.fastmock.site/mock/13c674e133fbd03fb6e3690d5fbe14e8/api"
    }
}

export default{
    env,
    mock:true,
    namespace:'manager',
    ...EnvConfig[env]
}