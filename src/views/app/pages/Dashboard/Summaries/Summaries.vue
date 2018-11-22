<template>
   <div>
        <div style="padding-top:15px;" class="uk-grid-small uk-child-width-expand@s" uk-grid>
          <div>
              <Summary
                name="INVITATIONS SENT"
                value=456
                icon="ios-paper-plane"
                color="#32D5AA"
                interpret="600 invitation has been sent this month"
              ></Summary>
          </div>
          <div>
              <Summary
                name="INVITEES ATTENDING"
                value=300
                icon="ios-paper"
                color="#48b0f7"
                interpret="724 invitation has been sent this month"
              ></Summary>
          </div>
          <div>
              <Summary
                name="TOTAL VIEWS"
                value=432
                icon="ios-eye"
                color="#926dde"
                interpret="724 invitation has been sent this month"
              ></Summary>
          </div>
          <div>
              <Summary
                name="AMOUNT SPENT"
                value=54
                icon="ios-card"
                color="#f96868"
                interpret="600 invitation has been sent this month"
              ></Summary>
          </div>
        </div>
   </div>
</template>
<script>
 import Summary from '@/views/app/pages/Dashboard/Summaries/Summary.vue'
 export default {
  name: "Summaries",
  components: {
     Summary
  }
 }
</script>
