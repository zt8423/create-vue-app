<template>
    <div @click="goHome">登录</div>
</template>

<script>
    import {appRootPath} from '../utils/path';

    export default {
        methods: {
            goHome() {
                this.$router.push(appRootPath()+'home');
            }
        }
    }
</script>
