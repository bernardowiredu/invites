<template>
   <div>
     <div class="uk-text-center holder">
          <img class="svg-holder" :src="'../img/'+ image +'.svg'">
          <div class="uk-hidden@m">
            <h5 class="uk-text-strong"><b>{{title}}</b></h5>
              <p style="padding-left:15px; padding-right:15px; margin-right:5px;">{{message}}</p><br>
          </div>
            <div class="uk-visible@m">
                <h4 class="uk-text-strong">Hi Bernard, {{title}}</h4>
                <p>{{message}}</p><br>
            </div>
            <Button @click="goTo(url)" size="large" class="uk-no-border uk-box-shadow-small" >{{label}}</Button>
          </div>
   </div>
</template>
<script>
  export default {
    name: "NullData",
    props:{
      image: String,
      title: String,
      label: String,
      url: String,
      message: String
    },
    methods: {
       goTo(url){
         this.$router.push({path: url})
       }
    }
  }
</script>
<style>
 .uk-no-border{
    border:none
 }
 .uk-text-strong{
   font-weight:600;
   color:#11253E;
   font-size:17px;
  }
  .small-heading{
    font-weight: bold;
    line-height: normal;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #9E9E9E;
  }
</style>


