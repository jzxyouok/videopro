/**
 * Created by ning on 2017/4/9.
 */

import VueRouter from "vue-router";
import memberindex from "./../components/member/index.vue";
import publish from "./../components/member/publish.vue";
import vlist from "./../components/member/vlist.vue";

const routes = [
    { path: '/', component:memberindex, name:"memberindex",
        children:[
            { 'path':'pub',component:publish,name:'publish'},
            { 'path':'vlist',component:vlist,name:'vlist'},
        ]
    },
]

export const routerConfig = new VueRouter({
    routes // （缩写）相当于 routes: routes
})


