import Http from '@/utils/request'
// import Http from '@/utils/http'
 
export const config1 = (params: any) => {
    return Http.get('https://md.heng-tai.com.cn/m-staff-center/api/v1/role/pageList', params)
}

// export const config2 = (params: any) => {
//     return Http.post('接口地址', params)
// }