<template>
  <div>
      <div class="uk-grid-small uk-child-width-expand@s" uk-grid>
        <div>
           <vue-content-loading :width="200" :height="100">
              <rect x="5" y="36.39" rx="4" ry="4" width="112.76" height="4.1" />
              <rect x="6" y="47.32" rx="3" ry="3" width="98.37" height="3.56" />
              <rect x="5" y="79.08" rx="3" ry="3" width="190.89" height="3.68" />
              <rect x="7" y="60.06" rx="3" ry="3" width="78.81" height="3.94" />
              <rect x="138.6" y="33.67" rx="0" ry="0" width="51.06" height="35.99" />
              <rect x="6" y="91.16" rx="3" ry="3" width="187.36" height="3.62" />
          </vue-content-loading>
        </div>
        <div>
           <vue-content-loading :width="200" :height="100">
              <rect x="5" y="36.39" rx="4" ry="4" width="112.76" height="4.1" />
              <rect x="6" y="47.32" rx="3" ry="3" width="98.37" height="3.56" />
              <rect x="5" y="79.08" rx="3" ry="3" width="190.89" height="3.68" />
              <rect x="7" y="60.06" rx="3" ry="3" width="78.81" height="3.94" />
              <rect x="138.6" y="33.67" rx="0" ry="0" width="51.06" height="35.99" />
              <rect x="6" y="91.16" rx="3" ry="3" width="187.36" height="3.62" />
          </vue-content-loading>
        </div>
        <div>
           <vue-content-loading :width="200" :height="100">
              <rect x="5" y="36.39" rx="4" ry="4" width="112.76" height="4.1" />
              <rect x="6" y="47.32" rx="3" ry="3" width="98.37" height="3.56" />
              <rect x="5" y="79.08" rx="3" ry="3" width="190.89" height="3.68" />
              <rect x="7" y="60.06" rx="3" ry="3" width="78.81" height="3.94" />
              <rect x="138.6" y="33.67" rx="0" ry="0" width="51.06" height="35.99" />
              <rect x="6" y="91.16" rx="3" ry="3" width="187.36" height="3.62" />
          </vue-content-loading>
        </div>
        <div>
           <vue-content-loading :width="200" :height="100">
              <rect x="5" y="36.39" rx="4" ry="4" width="112.76" height="4.1" />
              <rect x="6" y="47.32" rx="3" ry="3" width="98.37" height="3.56" />
              <rect x="5" y="79.08" rx="3" ry="3" width="190.89" height="3.68" />
              <rect x="7" y="60.06" rx="3" ry="3" width="78.81" height="3.94" />
              <rect x="138.6" y="33.67" rx="0" ry="0" width="51.06" height="35.99" />
              <rect x="6" y="91.16" rx="3" ry="3" width="187.36" height="3.62" />
          </vue-content-loading>
        </div>
      </div>

        <div class="uk-grid-small uk-grid-match uk-child-width-expand@s" uk-grid>
          <div>
             <vue-content-loading :width="370" :height="100">
                <rect x="2.13" y="1.67" rx="0" ry="0" width="402" height="149" />
             </vue-content-loading>
          </div>
        </div>
        <br>
        <div class="uk-grid-small uk-grid-match uk-child-width-expand@s" uk-grid>
          <div>
             <vue-content-loading :width="320" :height="140">
                <rect x="2.13" y="1.67" rx="0" ry="0" width="402" height="149" />
             </vue-content-loading>
          </div>
           <div>
             <vue-content-loading :width="320" :height="140">
                <rect x="2.13" y="1.67" rx="0" ry="0" width="402" height="149" />
             </vue-content-loading>
          </div>
        </div>
        <br>
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
