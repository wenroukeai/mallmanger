<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4" class="left">
            <div class="grid-content bg-purple">
                <img width=200px height=60px  src="../../assets/img/icon.png" alt="无法显示图片" srcset="">
            </div>
        </el-col>
        <el-col :span="18" class="middle">
            <div class="grid-content bg-purple-light">
                <h3>电商后台管理系统</h3>
            </div>
        </el-col>
        <el-col :span="2" class="right">
            <div class="grid-content bg-purple">
                <a class="loginout" href="#">退出</a>
            </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container class="">
      <el-aside class="aside" width="200px">Aside</el-aside>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
</script>

<style scope>
.container {
  height: 100%;
}
.header {
  background-color: #b3c0d1;
}
.aside {
  background-color: #d3dce6;
}
.main {
  background-color: #e9eef3;
}

/* 头部样式 */
    .left{
        text-align: left;
    }
    .loginout{
        line-height: 60px;
        text-decoration: none;
    }
</style>
