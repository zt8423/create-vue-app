/**
 * 同步操作store
 */
import {
    GetUserType,
    SetUserType
} from './mutations-type';

export default {
    //获取用户类型
    [GetUserType](state) {
        return state.userType;
    },
    //设置用户类型
    [SetUserType](state, {
        userType
    }) {
        state.userType = userType;
    }
}
