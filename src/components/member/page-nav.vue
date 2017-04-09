<template>
    <div >
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item v-for="item in this.$store.state.nav.navbar" :index="item.nav_url" >{{item.nav_text}}</el-menu-item>
        </el-menu>
        <router-view></router-view>
    </div>
</template>
<style>

</style>
<script>
    export default {
        created(){
            //从数据库中获取数据，并储存到store中
            this.$store.dispatch('getNavbar', {url:this.APIConfig.API_Navbar, key:'navbar'})

            //console.log(this.functions);
            //alert(this.APIConfig.API_Navbar)

        },
        data() {
            return {
                activeIndex: '/'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>