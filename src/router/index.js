import app from '../app.vue';
import {appRootPath} from '../utils/path';
const home = r => require.ensure([], () => r(require('../home')), 'home');
const login = r => require.ensure([], () => r(require('../login')), 'login');

export default [{
    path: appRootPath(),
    component: app,
    children: [
        {
            path: '/', //默认页面
            redirect: {name: 'login'}
        },
        {
            name: 'login',
            path: 'login',
            component: login
        },
        {
            name: 'home',
            path: 'home',
            component: home
        }
    ]
}]
