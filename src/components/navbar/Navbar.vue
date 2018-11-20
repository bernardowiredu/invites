<template>
  <div>
       <div uk-sticky="sel-target: .uk-con; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar" class="uk-visible@m">
        <nav class="uk-navbar-container uk-con" uk-navbar="mode: click">
            <div class="uk-navbar-left">
                 <a class="uk-navbar-item uk-logo uk-text-default uk-text-big" href="#">{{title}} </a>
            </div>
            <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <div class="uk-navbar-item">
                      <el-dropdown @command="handleCommand">
                        <el-button type="primary">
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
import '@/styles/pages/navbar.scss'
export default {
  name: 'Navbar.vue',
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
<style lang="scss" scoped>

</style>
