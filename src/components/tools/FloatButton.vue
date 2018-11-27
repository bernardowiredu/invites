<template>
    <div>
        <ul id="menu" class="mfb-component--br mfb-slidein" data-mfb-toggle="hover">
            <li class="mfb-component__wrap">
                <a href="#" class="mfb-component__button--main">
                    <Icon class="mfb-component__main-icon--resting icon-control" type="md-add" size="17"/>
                    <Icon class="mfb-component__main-icon--active icon-control" type="md-close-circle" />
                </a>
                <ul class="mfb-component__list">
                    <li>
                        <router-link to="/event/create" data-mfb-label="Create new event" class="mfb-component__button--child">
                            <Icon class="mfb-component__chile-icon icon-control-child" type="md-create" size="17"/>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="#" data-mfb-label="Report Errors" class="mfb-component__button--child">
                            <Icon class="mfb-component__chile-icon icon-control-child" type="md-bug" size="17" />
                        </router-link>
                    </li>

                    <li>
                        <router-link to="#" data-mfb-label="Help & Feedback" class="mfb-component__button--child">
                            <Icon class="mfb-component__chile-icon icon-control-child" type="md-help-circle" size="17"/>
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "float-button"
    }
</script>

<style scoped>
    .icon-control{
        margin-top:20px;
    }
    .icon-control-child{
        margin-left:20px;
        margin-top:20px;
    }
</style>