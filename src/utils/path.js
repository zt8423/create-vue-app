//应用顶部路由地址
export const appRootPath = () => {
    if (process.env.NODE_ENV == 'dev') {
        return '/';
    }else {
        return '/create-vue-app/index.html/';
    }
}
