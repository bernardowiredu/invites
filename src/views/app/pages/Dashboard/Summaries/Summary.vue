<template>
  <div>
    <div class="uk-card-small uk-border-radius uk-card-body uk-box-shadow-hover-small">
      <div class="uk-flex uk-flex-center uk-flex-between padding-xxsmall">
          <div>
            <h6 class="uk-text-strong uk-text-name">{{name}}</h6>
              <span class="uk-text-large padding-bottom-small uk-text-muted">{{value}}</span>
          </div>
          <div>
            <Icon :type="icon" :color="color" size="50"/>
          </div>
      </div>
      <hr style="border:1px solid #f9f9f9;">
      <p class="text-small uk-text-muted padding-xxsmall"> <Icon type="md-trending-down" color="#48B0F7"/> {{interpret}}</p>
    </div>
  </div>
</template>
<script>
  export default {
     name: "Summary",
     props: {

       name: {
         type:String,
         required:true
       },

       value: {
         type:Number,
         required:true
       },

       icon: {
         type:String,
         required:true
       },

       interpret: {
        type:String,
        required:true
       },

       color: {
         type:String,
         required:true
       }

     }
  }
</script>
<style>
  .uk-card-body{
    background:#fff;
  }
 .uk-text-large{
    font-size:26px;
    font-weight:400;
  }
  .uk-text-name{
    font-size:14px;
  }
</style>
