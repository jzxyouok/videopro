/**
 * Created by ning on 2017/4/9.
 */

import Vue from "vue";
export default {
    state: {
        navbar: []
    },
    mutations: {
        getNavbar (state, {key, data}) {
            state[key] = data;
        }
    },
    actions: {
        getNavbar (context, {url, key}) {
            Vue.http.get(url).then(response => {
                context.commit('getNavbar', {key, data:response.body})

            }, response => {
                // error callback       //如果正常出错应该是加入日志的
            });
        }
    },
    getters: {
        navForVideoClass: state => {
            return state.navbar.filter(nav => {
               return nav.nav_text != 'index'

            })
        }
    }
}

