<template>
  <div>
       <div uk-sticky="sel-target: .uk-con; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar" class="uk-visible@s">
        <nav class="uk-navbar-container uk-box-shadow-small uk-con" uk-navbar="mode: click">
            <div class="uk-navbar-left">
                 <a class="uk-navbar-item uk-logo uk-text-default uk-text-big" href="#">{{title}} </a>
            </div>
            <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <div class="uk-navbar-item">
                      <el-dropdown @command="handleCommand">
                        <el-button type="default">
                           Create invite<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="sms">SMS/Email invitation</el-dropdown-item>
                            <el-dropdown-item command="voice">Voice Invitation</el-dropdown-item>
                        </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <li>
                        <a hre="#">
                            <Badge dot>
                                <Icon type="md-notifications" size="30" color="#515a6e"/>
                            </Badge>
                        </a>
                         <div class="uk-navbar-dropdown" style="width:350px;">
                            <ul class="uk-nav uk-navbar-dropdown-nav uk-list uk-list-divider" >
                                <li class="uk-active"><a href="#">Notification access can be used to display </a></li>
                                <li><router-link to="/notification">We have added phone calls to the delivery option</router-link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="#"> <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNWAuvzXwqTcjTXDTQ6Q4155zQA6-IPwxR7SUVqxseWb5nsMo-" size="large" />
                            <Icon type="md-arrow-dropdown" color="#515a6e"/>
                        </a>
                        <div class="uk-navbar-dropdown" style="background:white">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li class="uk-active"><a href="#">Bernard Kissi <span class="uk-float-right uk-text-muted">GHS 0.00</span></a></li>
                                <li><router-link to="/settings"><Icon type="md-settings" /> Settings</router-link></li>
                                <li><a href="#"><Icon type="md-card" /> Payments</a></li>
                                <li><a href="#"><Icon type="md-appstore" /> Apps integration</a></li><br>
                                <hr>
                                <li><router-link to="/login">Log out <span class="uk-float-right uk-text-primary"><Icon type="md-exit" size="15"/></span></router-link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
          </nav>
        </div>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  props: {
    title: String
  },
  data () {
    return {

    }
  },
  methods: {
    handleCommand (command) {
      this.$router.push({ path: '/event/create/' + command })
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
        color: #11253E;
    }
    .uk-nav-default li a{
        display:block;
        padding-bottom:15px;
    }
    .uk-navbar-dropdown{
        border-radius:5px;
    }
    .uk-parent a, .ps a{
        color:#11253E;
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
        color:#11253E;
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
