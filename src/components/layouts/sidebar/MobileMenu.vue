<template>
  <div>
       <div uk-sticky="sel-target: .uk-con; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar" class="uk-hidden@l">
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
       name: "MobileMenu",
       props:{
           title: String
       },
       data(){
           return{

           }
       }
   }
</script>
