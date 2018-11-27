<template>
    <div>
        <br>
        <div class="uk-flex uk-flex-center uk-flex-between">
           <div>
               <div class="padding-top-medium padding-bottom-medium">
                       <Options :filters="filters" :options="options" :disabled="disabled" @sorted="filterSorted"></Options>
               </div>
           </div>
            <div class="uk-visible@m">
                <Poptip v-model="poptip" class="uk-border-rounded" trigger="focus" content="content" placement="bottom">
                    <Input suffix="ios-search" class="margin-small uk-border-circle" v-model="filterText" placeholder="Search for events" size="large" style="width:300px;"/>
                    <div slot="title" class="uk-flex uk-flex-center uk-flex-between">
                        <div>Search Events</div>
                        <div><a @click="close">close</a></div>
                    </div>
                    <div class="api" slot="content" style="font-size:13px;">
                         <span>Searching for an event
                              try something like:
                         </span>
                        <ul>
                            <li class="table-fade">Enter the first 2-3 letters that start event name.</li>
                        </ul>
                    </div>
                </Poptip>
            </div>
        </div>
        <Header
             :runing="runing"
             :filteredCounter="filteredCounter"
             :filterTable="filterTable"
             @summary="change"
         ></Header>

        <div class="padding-top-small">
            <Spin v-if="spinShow"></Spin>
            <div class="uk-overflow-auto">
                <table class="uk-table uk-table-small uk-table-hover uk-table-middle">
                    <thead>
                    <tr>
                        <th><input type="checkbox" class="uk-checkbox" v-model="checkAll"></th>
                        <th>event</th>
                        <th>Date </th>
                        <th>invited</th>
                        <th>Status </th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>

                    <tr  class="list-item uk-box-shadow-small" v-for="(event, index) in filteredEvents" :key="index" @mouseover="display = index" @mouseleave="display = null" >
                        <td>
                        <input type="checkbox" class="uk-checkbox" v-model="checked" :value="event.id" size="large"></td>
                        <div v-if="!switch1">
                            <td style="padding-top:15px;">
                                <div class="uk-flex uk-flex-center uk-flex-between">
                                    <div>
                                        <Avatar :style="{backgroundColor: '#619FE8', color: '#ffffff'}">{{event.name | acronym}}</Avatar>
                                    </div>&emsp;
                                    <div>
                                        {{event.name}}<br>
                                        <span class="uk-text-small table-fade" style="margin-top: -5px;">{{event.category}}</span>
                                    </div>
                                </div>
                            </td>
                        </div>
                        <div v-else>
                            <Poptip
                                    trigger="hover" title="Event Stats" placement="right" width="300">
                                <td style="padding-top:15px;">
                                    <div class="uk-flex uk-flex-center uk-flex-between">
                                        <div>
                                            <Avatar :style="{backgroundColor: '#0088cc', color: '#ffffff'}">{{event.name | acronym}}</Avatar>
                                        </div>&emsp;
                                        <div>
                                            {{event.name}}<br>
                                            <span class="uk-text-small table-fade" style="margin-top: -5px;">{{event.category}}</span>
                                        </div>
                                    </div>
                                </td>
                                <div class="uk-flex uk-flex-center uk-flex-between" slot="title">
                                    <div>Event Stats</div>
                                    <div class="uk-text-muted">
                                        updated 2 minutes ago
                                    </div>
                                </div>
                                <div class="api" slot="content">
                                    <div>
                                        <Progress :percent="100" /><br>
                                        <span> Total invitation sent </span><br>
                                    </div>
                                    <div>
                                        <Progress :percent="25"  status="active"/><br>
                                        <span> Recent Views </span><br>
                                    </div>
                                    <div>
                                        <Progress :percent="35" /><br>
                                        <span> invitees attending event </span>
                                    </div>

                                </div>
                            </Poptip>
                        </div>

                        <td class="table-fade uk-text-capitalize">{{event.date}}</td>
                        <td class="table-fade">{{event.invite}}</td>

                        <td class="uk-text-success" v-if="event.active">
                            <Badge class="uk-visible@m" status="success" /> Active
                        </td>
                        <td class="uk-text-danger" v-else>
                            <Badge class="uk-visible@m" status="error" /> Pending
                        </td>

                        <td v-if="display === index">
                            <Dropdown trigger="click" >
                                <Button type="primary" class="uk-no-border uk-box-shadow-hover-small" icon="ios-more">
                                </Button>
                                <DropdownMenu slot="list">
                                    <DropdownItem><a class="option-dropdown" @click="onDelete(event)"> Delete</a></DropdownItem>
                                    <DropdownItem><router-link :to="'/event/'+'seminar'+ index" class="option-dropdown"> View</router-link></DropdownItem>
                                    <DropdownItem> Pause </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </td>
                        <td v-else>
                            <ButtonGroup>
                                <Button type="default" class="uk-no-border btn-primary-transparent" icon="ios-more"></Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="uk-text-center uk-padding-small" style="font-size:15px;" v-if="filteredEvents.length === 0">
                <Icon type="ios-alert-outline"/> No Match Found
            </div>
        </div>
        <br>
    </div>
</template>

<script>
    import Header from '@/views/app/pages/Events/plugins/TableHeader.vue'
    import Options from '@/views/app/pages/Events/plugins/TableOptions.vue'
    import Spin from '@/components/plugins/Spin.vue'
    export default {
        name: "event-table",
        components:{
            Header, Options, Spin
        },
        props: {
            events: {
                type: Array,
                required: true
            },
            filters:{
                type:Array,
                required:true
            }
        },
        data() {
            return {
                disabled:true,
                display: null,
                switch1: false,
                spinShow:false,
                checked: [],
                filterTable:'',
                filterText: '',
                poptip:false

            }
        },
        computed: {
            selected() {
                return this.checked.length // checking events selected
            },
            runing() {
                return this.events.filter(event => event.active).length // Number of active events
            },
            filteredEvents() {
                let events = this.events.filter((event) => {
                    return event.name.toLowerCase().includes(this.filterText.toLowerCase())
                })

                if (this.filterTable === "")
                    return events;
                else {
                    return events.filter(event => event.status === this.filterTable)
                }
            },
            filteredCounter() {
                if (this.filterTable === "") {
                    return 'All'
                } else {
                    return this.events.filter(event => event.status === this.filterTable).length
                }

            },
            options(){

                if(this.selected >= 1){
                    return !this.disabled
                }else{
                    return this.disabled
                }
            },
            checkAll: {
                get() {
                    return this.events ? this.selected === this.events.length : false
                },
                set(value) {
                    let checked = [];
                    if (value) {
                        this.events.forEach((event) =>
                            checked.push(event.id)
                        )
                    }
                    this.checked = checked
                }

            }
        },
        filters:{
           acronym(value){
               let matches = value.match(/\b(\w)/g)
               let acron = matches.join('')
               return acron

           }
        },
        methods: {
            onDelete(event) {
                this.$confirm('This will stop and erase your event. Contiune ? ', 'Warning', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    this.events.splice(this.events.indexOf(event), 1)
                    this.$Message.success('Event has been deleted');
                    this.spinShow = !this.spinShow
                    setTimeout(() => {
                        this.spinShow = false;
                    }, 1000);


                })
            },
            change(status) {
                if (status === true) {
                    this.$Message.info('Smart Summary is turned on')
                    this.switch1 = !this.switch1
                } else {
                    this.$Message.info('Smart Summary is turned off')
                    this.switch1 = false
                }

            },
            filterSorted(value){
                this.filterTable = value
            },
            close(){
                this.poptip = false;
            }
        }
    }
</script>

<style scoped>
.list-item{
    background:#ffffff;
    padding:10px;
    border-bottom:1px solid #f5f5f5;
}
.table-fade{
     color:#969aaa;
}
</style>