<template>
  <div>
       <div uk-sticky="sel-target: .uk-con; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar" class="uk-visible@s">
        <nav class="uk-navbar-container uk-con" uk-navbar="mode: click">
            <div class="uk-navbar-left">
                 <a class="uk-navbar-item uk-logo uk-text-default uk-text-big" href="#">{{title}} </a>
            </div>
            <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <div class="uk-navbar-item">
                      <el-dropdown @command="handleCommand" trigger="click">
                        <Button class="create-btn" size="large">
                           Create invite <Icon type="ios-arrow-down" />
                        </Button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="sms">SMS/Email invitation</el-dropdown-item>
                            <el-dropdown-item command="voice">Voice Invitation</el-dropdown-item>
                        </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                    <li>
                        <a href="#offcanvas-usage" uk-toggle>
                            <Badge dot>
                                <Icon type="md-notifications" size="30" color="#ffac33"/>
                            </Badge>
                        </a>
                        <div id="offcanvas-usage" uk-offcanvas="flip: true;">
                            <div class="uk-offcanvas-bar uk-box-shadow-small">
                                 <h4 class="notify-heading">🔔 Notifications <span class="uk-float-right" style="padding-top:-15px;"><button class="uk-offcanvas-close" type="button" uk-close></button></span></h4>
                                <hr>
                                <div class="notify-body">
                                    <p class="notify-title">🎉 New Announcement 🎉</p>
                                    <p class="notify-message">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                                <div class="notify-body">
                                    <p class="notify-title">🎉 New Announcement 🎉</p>
                                    <p class="notify-message uk-text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#"> <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNWAuvzXwqTcjTXDTQ6Q4155zQA6-IPwxR7SUVqxseWb5nsMo-" size="large" />
                            <Icon type="md-arrow-dropdown" color="#ffffff"/>
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
    title: {
        type:String,
        default:''
    }
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
        background: rgb(97, 159, 232);
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
        color: #ffffff;
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
        color:#ffffff;
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
    .icon-notify{
        margin-top:-3px;
    }
    .uk-offcanvas-bar{
        width:340px;
        padding:0;
        margin:0;
    }
    .notify-heading{
        padding:20px;
        padding-top:25px;
        font-weight:500;
    }
    .notify-body{
        border-bottom: 1px solid #f4f4f4;
    }
    .notify-title{
        padding-left:20px;
        padding-right:20px;
        padding-top:15px;
        font-weight:500;
        font-size: 15px;
    }
    .notify-message{
        padding-left:20px;
        padding-right:20px;
        padding-bottom:10px;
        padding-top:10px;
        font-size: 14px;
    }
    .create-btn{
        font-size:14px;
        background:rgba(0,0,0,0.18);
        border:none; color:white;
        font-weight:500
    }
</style>
