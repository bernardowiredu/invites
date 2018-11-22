<template>
    <div>
        <div class="uk-text-center holder">
            <img class="svg-holder" :src="'../images/dev-icons/'+ image">
            <div class="uk-hidden@m">
                <h5 class="uk-text-strong">{{title}}</h5>
                <p style="padding-left:15px; padding-right:15px; margin-right:5px;">{{message}}</p><br>
            </div>
            <div class="uk-visible@m">
                <h4 class="uk-text-strong" >{{title}}</h4>
                <p>{{message}}</p><br>
            </div>
            <Button :to="url" size="large"  class="uk-no-border uk-box-shadow-small" >{{text}}</Button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "helper",
        props: {
            title: String,
            message: String,
            image: String,
            label: String,
            url: String
        },
        data(){
            return{
                isActive: true
            }
        }
    }
</script>

<style scoped>

</style>