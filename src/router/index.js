import app from '../app.vue';
import {appRootPath} from '../utils/path';
const home = r => require.ensure([], () => r(require('../home')), 'home');
const login = r => require.ensure([], () => r(require('../login')), 'login');

export default [{
    path: appRootPath(),
    component: app,
    children: [
        {
            path: '',
            component: login
        },
        {
            path: 'home',
            component: home
        }
    ]
}]
