<template>
  <div>
       <div uk-sticky="sel-target: .uk-con; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar" class="uk-hidden@s">
        <nav class="uk-navbar-container uk-box-shadow-small uk-con" uk-navbar="mode: click">
            <div class="uk-navbar-left">
                 <a class="uk-navbar-toggle uk-text-default" uk-navbar-toggle-icon href="#offcanvas-usage" uk-toggle></a>
                 <a class="uk-navbar-item uk-logo uk-text-default" href="#">{{title}} </a>
            </div>
            <div class="uk-navbar-right">
               <ul class="uk-navbar-nav">
                  <li>
                      <a href="#">
                          <Badge dot>
                              <Icon type="md-notifications" size="30" color="#515a6e"/>
                          </Badge>
                      </a>
                      <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav uk-list uk-list-divider" >
                                <li class="uk-active"><a href="#">Notification access can be used to display </a></li>
                                <li><router-link to="/notification">We have added phone calls to the delivery option</router-link></li>
                            </ul>
                      </div>
                  </li>
                  <div id="offcanvas-usage" uk-offcanvas="overlay: true; bg-close: true;">
                        <div class="uk-offcanvas-bar">
                           <h5>sidebar links here !</h5>
                        </div>
                  </div>
               </ul>
            </div>
          </nav>
        </div>
  </div>
</template>
<script>
   export default {
       name: "MobileNav",
       props:{
           title: String
       },
       data(){
           return{

           }
       }
   }
</script>
<style scoped>
  .uk-navbar{
        background: #ffffff;
        padding-left:20px;
        padding-right:20px;
    }
    @media only screen and (max-width: 600px) {
        .uk-navbar {
            padding-left: 10px;
            padding-right:15px;
        }
    }
    .uk-text-default{
        color: #515a6e;
    }
    .uk-nav-default li a{
        display:block;
        padding-bottom:15px;
    }
    .uk-navbar-dropdown{
        border-radius:5px;
    }
    .uk-parent a, .ps a{
        color:#17233d;
    }
    .uk-list .uk-list-divider{
        border-bottom:1px solid #f9f9f9;
    }
     .navigation-header{
        margin:0;
        padding-bottom:10px;
    }
    .uk-text-big{
        font-size:26px;
        color:#515a6e;
    }
    .uk-no-border{
        border:none;
    }
    .btn-primary-transparent{
         background: #55A4EB;
         color: #ffffff;
         font-weight: 500
    }
    .btn-primary-transparent:hover{
        background: #7bbdf7;
    }
</style>
