import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router';
import store from './store';
import FastClick from 'fastclick';
import {GetFromSessionStorage} from './utils/session-storage';
import {IsLogin} from './utils/session-storage-key';

Vue.use(VueRouter);

//移动端点击触发事件300ms延迟
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

const router = new VueRouter({
    routes,
    mode: 'history',
    strict: process.env.NODE_ENV !== 'production',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            if (from.meta.keepAlive) {
                from.meta.savedPosition = document.body.scrollTop;
            }
            return { x: 0, y: to.meta.savedPosition || 0 }
        }
    }
});

//登录验证，未登录时跳转到登录界面
router.beforeEach((to, from, next) => {
    let isLogin = GetFromSessionStorage(IsLogin);
    if (to.name=='login') {
        next();
        // if (isLogin) {
        //     next({name:'home'});
        // }else {
        //     next();
        // }
    }else {
        if (isLogin) {//登录状态
            next();
        }else {
            next({name:'login'});
        }
    }
});

new Vue({
    router,
    store,
}).$mount('#app');
