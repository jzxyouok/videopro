<template>
    <div id="outbox">
        <el-row>
            <el-col :span="4">
                <index-menu></index-menu>
            </el-col>
            <el-col :span="20">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>
<style>
    #outbox{width:80%;margin: 50px auto}
</style>
<script>
    import menu from "./menu.vue";

    export default
    {
        components: {
            'index-menu': menu,
        }
    }
</script>