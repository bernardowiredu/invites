<template>
  <div>
    <div class="about">
      <div class="uk-alert-primary" uk-alert>
        <a class="uk-alert-close" uk-close></a>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      </div>
    </div>
    <p>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
      <div style="background:#eee;padding: 20px">
          <Card :bordered="false">
              <p slot="title">No border title</p>
              <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          </Card>
      </div>
      <el-steps :active="1">
          <el-step title="Step 1" description="Some description"></el-step>
          <el-step title="Step 2" description="Some description"></el-step>
          <el-step title="Step 3" description="Some description"></el-step>
      </el-steps>

  </div>
</template>
<script>
  export default {
     name: 'about'
  }
</script>
