<template>
    <div>首页{{userType}}</div>
</template>

<script>
        import {mapState} from 'vuex';

        export default {
            computed: {
                ...mapState(['userType'])
            }
        }
</script>
