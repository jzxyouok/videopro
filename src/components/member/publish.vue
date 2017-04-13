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

                    <el-form-item label="封面" prop="v_pic">
                        <el-upload
                                class="upload-demo"
                                drag
                                action="http://localhost:9090/videos/upload"
                                name="Uploader[imageFile]"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-upload="handleBeforeUpload"
                                :on-success="handleSuccess"
                                :multiple="false"
                                :file-list="fileList"
                        >
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>

                    <el-form-item label="标签" prop="">
                        <input-tag :on-change="callbackMethod" :tags="tagsArray" placeholder="请输入标签，按回车结束"></input-tag>
                    </el-form-item>

                </el-form>

            </el-col>
            <el-col :span="12">

            </el-col>
        </el-row>

        <el-dialog title="图片预览" v-model="dialogVisible" size="small">
            <span>
                <img :src="video.v_pic.url"/>
            </span>
              <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
        </el-dialog>

    </div>
</template>
<style>
    h3{color:#5e6d82;margin-bottom: 10px}
    li.el-upload-list__item.is-success{height: 25px;}
</style>
<script>

    import InputTag from 'vue-input-tag';

    //这儿的css真心写不来啊，我个擦擦，直接 调整 node_modules中的样式内容吧
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
                    v_class:'',
                    v_pic:{
                        name:"",
                        url:""
                    }
                },
                dialogVisible: false,
                fileList: []
            };
        },
        methods:{
            alertClass(){
                //alert(this.video.v_class);
            },
            handlePreview(file){
                //console.log(file);
                //预览
                this.dialogVisible=true;
                //console.log(this.fileList);
            },
            handleRemove(file, fileList){
                //移除图片
                this.video.v_pic.url="";
                this.video.v_pic.name="";
            },
            handleBeforeUpload(file){   //上传文件之前，用来判断文件格式，大小等

            },
            handleSuccess(response, file, fileList){    //只要没报错，即使没得到结果，就都是成功的设置
                //console.log(response);
                //console.log(file.name);
                //响应成功
                if(response.status==1)
                {
                    this.video.v_pic.url=response.url;
                    this.video.v_pic.name=file.name;

                    this.fileList.splice(0, 1, this.video.v_pic);

                }
                else
                {
                    alert("上传失败，请稍后再试");
                }
            }
        }
    }
</script>