/**
 * Created by Administrator on 2016/12/16.
 */

import Vue from "vue";
import Vuex from "vuex";
import VueResource from 'vue-resource';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Global from "./global";

import './../css/common.css';

Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.use(Global);

import VueRouter from "vue-router";
Vue.use(VueRouter);
import {routerConfig} from './../config/RouterConfig';

import NavModule from './../store/modules/NavModule'
const store = new Vuex.Store({
    modules: {
        nav: NavModule,
    }
})

import PageNav from './../components/member/page-nav.vue';
Vue.component("page-nav",PageNav);

let app = new Vue({
    el: '.container',
    store,
    router:routerConfig   //设置路由
    /*components:{
        'page-nav':PageNav
    }*/
})

//console.log(Vue.functions2);      //写的多漂亮，
//console.log(app.functions2);







