<template>
  <div>
      <div style="padding-top:15px;" class="uk-grid-small uk-child-width-expand@s" uk-grid>
        <div>
           <vue-content-loading :width="300" :height="100">
            <rect x="5" y="28.67" rx="4" ry="4" width="184.86" height="6.72" />
            <rect x="6" y="43.67" rx="3" ry="3" width="138.55" height="6.72" />
            <rect x="9" y="84.91" rx="3" ry="3" width="353.5" height="6.46" />
            <rect x="8" y="101" rx="3" ry="3" width="353.4" height="5.95" />
            <rect x="7" y="60.67" rx="3" ry="3" width="103.7" height="6.91" />
            <rect x="291.6" y="25.04" rx="0" ry="0" width="62.79" height="48.97" />
          </vue-content-loading>
        </div>
      </div>
  </div>
</template>
<script>
import VueContentLoading from 'vue-content-loading'
  export default {
    name: "Placeholder",
    components: {
        VueContentLoading,
      },
  }
</script>
