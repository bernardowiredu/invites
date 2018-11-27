<template>
    <div>
        <div class="uk-overflow-auto">
            <table class="uk-table uk-table-small uk-table-striped  uk-table-middle">
                <thead>
                <tr>
                    <th><input type="checkbox" class="uk-checkbox" v-model="checkAll"></th>
                    <th>event </th>
                    <th>Date </th>
                    <th>invited</th>
                    <th>Status </th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>

                <tr v-for="(event, index) in filteredEvents" :key="index" @mouseover="display = index" @mouseleave="display = null" >
                    <td><input type="checkbox" class="uk-checkbox" v-model="checked" :value="event.id" size="large"></td>
                    <div v-if="!switch1">
                        <td style="padding-top:15px;">{{event.name}}</td>
                    </div>
                    <div v-else>
                        <Poptip
                                trigger="hover" title="Event Stats" placement="right" width="300">
                            <td style="padding-top:15px;">{{event.name}}</td>
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

                    <td>{{event.date}}</td>
                    <td>{{event.invite}}</td>

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
        <div class="controls padding-xsmall uk-float-left">
            <span class="uk-text-muted padding-xsmall padding-right-small"> Activate event summary on hover</span>
            <i-switch v-model="switch1" size="small" @on-change="change" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "event-table",
        props: {
            events: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                display: null,
                switch1: false,
                checked: [],
                ivents: this.events
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
            checkAll: {
                get() {
                    return this.events ? this.unactivated === this.events.length : false
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
        filters: {
            pluralize: function (n) {
                return n === 1 ? 'event' : 'events'
            },

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
                } else {
                    this.$Message.info('Smart Summary is turned off')
                }

            }
        }
    }
</script>

<style scoped>

</style>