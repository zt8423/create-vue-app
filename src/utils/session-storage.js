/**
 * sessionStorage操作
 */
//保存数据到sessionStorage
export const SetToSessionStorage = (key,value) => {
    window.sessionStorage.setItem(key,value);
};
//从sessionStorage获取数据
export const GetFromSessionStorage = (key) => {
    return window.sessionStorage.getItem(key);
}
//清除sessionStorage数据
export const DeleteSessionStorage = (key) => {
    window.sessionStorage.removeItem(key);
}
//清除sessionStorage数据
export const ClearSessionStorage = () => {
    window.sessionStorage.clear();
}
