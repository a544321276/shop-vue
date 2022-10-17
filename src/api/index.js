import request from "./request";

//三级联动
//http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList
export const reqCategoryList = () => request({
    url: `/product/getBaseCategoryList`,
    method: 'get'
})