<template>
    <div>
        <el-row>
            <el-col :span="12">
                <h3>视频基本信息</h3>
                <el-form :model="video" ref="videoFrom" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="视频标题" prop="v_title">
                        <el-input v-model="video.v_title" placeholder="请输入视频标题"></el-input>
                    </el-form-item>

                    <el-form-item label="分类" prop="v_class">
                        <el-select v-model="video.v_class" placeholder="请选择" @change="alertClass">
                            <el-option
                                        v-for="item in this.$store.getters.navForVideoClass"
                                        :label="item.nav_text"
                                        :value="item.nav_id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>

                <el-upload
                        class="upload-demo"
                        drag
                        action="http://localhost:9090/videos/upload"
                        :thumbnail-mode="true"
                        >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>

            </el-col>
            <el-col :span="12">

            </el-col>
        </el-row>
    </div>
</template>
<style>
    h3{color:#5e6d82;margin-bottom: 10px}
</style>
<script>

    export default
    {
        mounted()
        {
            //console.log(this.$store.getters.navForVideoClass)
        },
        data() {
            return {
                video: {
                    v_id:0,
                    v_title:'',
                    v_class:''
                }
            };
        },
        methods:{
            alertClass(){
                //alert(this.video.v_class);
            }
        }
    }
</script>