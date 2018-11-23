<template>
    <div>
        <div class=" uk-grid-small uk-child-width-expand@s" uk-grid>
            <div>
                <div class="uk-section-small uk-border-radius uk-padding-small padding-bottom-small   s">
                    <div class="uk-flex uk-flex-center uk-flex-between table-box padding-bottom-small">
                        <div><h5 class="small-heading">Active Events</h5></div>
                        <div> <Button type="text" class="uk-text-primary border-tn padding-bottom-small">View all <Icon type="ios-arrow-forward" /></Button></div>
                    </div>
                    <hr style="border:1px solid #f7f7f7">
                    <div class="uk-overflow-auto">
                        <table class="uk-table uk-table-striped">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Event</th>
                                <th>Ends in</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                             <tr>
                                 <td class="uk-text-muted">#E1243</td>
                                 <td> General Meeting </td>
                                 <td> 14 days </td>
                                 <td class="uk-text-success">Running</td>
                                 <td><router-link to="#"><Icon type="md-create" /></router-link></td>
                             </tr>
                             <tr>
                                 <td class="uk-text-muted">#E1245</td>
                                 <td> Counsel Meeting </td>
                                 <td> 2 days </td>
                                 <td class="uk-text-danger">Stopped</td>
                                 <td><router-link to="#"><Icon type="md-create" /></router-link></td>
                             </tr>
                             <tr>
                                 <td class="uk-text-muted">#E1233</td>
                                 <td> General Meeting </td>
                                 <td> 7 hours </td>
                                 <td class="uk-text-success">Running</td>
                                 <td><router-link to="#"><Icon type="md-create" /></router-link></td>
                             </tr>
                             <tr>
                                 <td class="uk-text-muted">#E1249</td>
                                 <td> Board Meeting </td>
                                 <td> 2 weeks </td>
                                 <td class="uk-text-warning"> Paused</td>
                                 <td><router-link to="#"><Icon type="md-create" /></router-link></td>
                             </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <div class="uk-section-small uk-border-radius uk-padding-small">
                    <div class="uk-flex uk-flex-center uk-flex-between table-box padding-bottom-small">
                        <div><h5 class="small-heading">Live Feedbacks</h5></div>
                        <div><Button type="text" class="uk-text-primary border-tn paddin-bottom-small">View reports <Icon type="ios-arrow-forward" /></Button></div>
                    </div>
                    <hr style="border:1px solid #f7f7f7">
                    <div class="uk-overflow-auto">
                        <table class="uk-table uk-table-striped">
                            <thead>
                            <tr>
                                <th>Event #</th>
                                <th>Invited</th>
                                <th>Views</th>
                                <th>Accepted</th>
                                <th>Updated</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td class="uk-text-muted"> #E1243 </td>
                                <td> 234 </td>
                                <td> 190 </td>
                                <td class="uk-text-success"> 89 </td>
                                <td class="uk-text-muted"><Icon type="md-sync" /> 2 seconds ago</td>
                            </tr>
                            <tr>
                                <td class="uk-text-muted"> #E1246 </td>
                                <td> 80 </td>
                                <td> 76 </td>
                                <td class="uk-text-success"> 12 </td>
                                <td class="uk-text-muted"><Icon type="md-sync" /> 52 seconds ago</td>
                            </tr>
                            <tr>
                                <td class="uk-text-muted"> #E1243 </td>
                                <td> 2400 </td>
                                <td> 1800 </td>
                                <td class="uk-text-success"> 700 </td>
                                <td class="uk-text-muted"><Icon type="md-sync" /> 25 minutes ago</td>
                            </tr>
                            <tr>
                                <td class="uk-text-muted"> #E1247 </td>
                                <td> 180 </td>
                                <td> 90 </td>
                                <td class="uk-text-success"> 70 </td>
                                <td class="uk-text-muted"><Icon type="md-sync" /> 2 days ago</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tables",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
    .small-heading{
        font-weight:300;
        font-size:17px;
        padding-top:5px;
    }
    .border-tn{
        border:1px solid #f5f5f5;
    }
    uk-border-radius{
        border-radius: 7px;
    }
</style>