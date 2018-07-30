<template>
    <div @click="goHome">登录</div>
</template>

<script>
    import {appRootPath} from '../utils/path';
    import {SetToSessionStorage} from '../utils/session-storage';
    import {IsLogin} from '../utils/session-storage-key';
    import {mapMutations} from 'vuex';
    import {SetUserType} from '../store/mutations-type';

    export default {
        methods: {
            //将this.SetUserType()映射为this.$store.commit('SetUserType')
            ...mapMutations(
                [SetUserType]
            ),
            goHome() {
                //本地存储登录状态
                SetToSessionStorage(IsLogin,true);
                //设置store的state.userType
                this.SetUserType({userType:'1'});
                //跳转到首页
                this.$router.push(appRootPath()+'/home');
            }
        }
    }
</script>
