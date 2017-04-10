/**
 * Created by ning on 2017/4/8.
 */

import functions from "./js/functions"
import APIConfig from "./../config/APIConfig"

export default {
    install(Vue, options){

        //Vue.functions2 = functions;
        Vue.prototype.functions = functions;
        Vue.prototype.APIConfig = APIConfig;

        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
            // 逻辑...
        }
        // 2. 添加全局资源
        Vue.directive('my-directive', {
            bind (el, binding, vnode, oldVnode) {
                // 逻辑...
            }
        })
        // 3. 注入组件
        Vue.mixin({
            created: function () {
                // 逻辑...
            }
        })
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (options) {
            // 逻辑...
        }
    }
}
