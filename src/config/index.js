/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod';
const EnvConfig={
    dev:{
        baseApi:"/",
        //mockApi:"https://www.fastmock.site/mock/13c674e133fbd03fb6e3690d5fbe14e8/api"
        mockApi:"https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api",
    },
    test:{
        baseApi:"",
       // mockApi:"https://www.fastmock.site/mock/13c674e133fbd03fb6e3690d5fbe14e8/api",
        mockApi:"https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api"
    },
    prod:{
        baseApi:"",
      // mockApi:"https://www.fastmock.site/mock/13c674e133fbd03fb6e3690d5fbe14e8/api",
        mockApi:"https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api"
    }
}

export default{
    env,
    mock:true,
    namespace:'manager',
    ...EnvConfig[env]
}