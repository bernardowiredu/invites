<template>
    <div>
        <div :id="modal" class="uk-modal-full" uk-modal>
            <div class="uk-modal-dialog">
                <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
                <div class="uk-flex-middle">
                    <div uk-height-viewport>
                        <div class="uk-container uk-padding">
                            <el-steps :space="200" :active="active" simple style="background:#ffffff;">
                                <el-step title="Step 1" icon="el-icon-edit"></el-step>
                                <el-step title="Step 2" icon="el-icon-upload"></el-step>
                            </el-steps>
                            <div class="uk-modal-header" style="background:rgb(97, 159, 232);">
                                <h6 class="uk-modal-title uk-text-center"><Icon type="md-download" /> Import Contacts from Excel</h6>
                            </div>
                            <div class="uk-modal-body">
                                <div v-show="active === 0">
                                    <div class="uk-alert-warning" uk-alert>
                                        <a class="uk-alert-close" uk-close></a>
                                        <ul class="padding-left-small">
                                            <li>DOWNLOAD EXCEL TEMPLATE to fill out with your contact details</li>
                                            <li>DO NOT DELETE COLUMN HEADERS (Name, number, email)</li>
                                            <li>Enter the name in the first column, followed by the number and email</li>
                                            <li>Save file and check to be sure it is in the microsoft excel format.</li>
                                            <li>Upload the file by clicking the browse button below</li>
                                        </ul>
                                    </div>
                                    <div class="uk-section uk-padding-small padding-bottom-small">
                                        <Upload
                                                type="drag"
                                                action="//jsonplaceholder.typicode.com/posts/">
                                            <div style="padding: 20px 0">
                                                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                                <p>Click or drag the Excel File here to upload</p>
                                            </div>
                                        </Upload>
                                    </div>
                                </div>
                                <div v-show="active === 1">
                                    <div class="uk-alert-warning" uk-alert>
                                        <a class="uk-alert-close" uk-close></a>
                                        <h5 class="uk-text-strong">Please read instructions carefully</h5>
                                        <ul class="padding-left-small">
                                            <li>Select the group(s) you want to add the contacts to. If you haven't created a group yet, Add a new group</li>
                                            <li>Click on the import contacts to complete importing contacts to your account</li>
                                        </ul>
                                    </div>
                                    <div class="uk-flex uk-flex-center uk-flex-between">
                                        <div><h5> Add contacts to a group </h5></div>
                                        <div><Button v-show="!addGroup" type="primary" icon="md-create" size="large" classs="uk-border-rounded" @click="addGroup = !addGroup">Create group</Button>
                                        </div>
                                    </div>
                                    <div v-if="addGroup" class="padding-medium">
                                        <div class="uk-section uk-padding-small">
                                            <h5 class="padding-bottom-small">Create New Group</h5>
                                            <Input v-model="value1" size="large" placeholder="Enter Group Name..."/><br><br>
                                            <Input v-model="value1" type="textarea" placeholder="Enter Description..." /><br><br>
                                            <Button type="success" size="large" icon="md-add" @click="add">Add Group</Button>
                                        </div>
                                    </div>
                                    <div class="padding-bottom-small">
                                        <p class="padding-bottom-small">Select Group to add contacts</p>
                                        <Select v-model="model1" size="large">
                                            <Option v-for="item in groups" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                            <div class="uk-modal-footer">
                                <div class="uk-flex uk-flex-center uk-flex-between" v-show="active === 0">
                                    <div><Button type="primary" size="large" icon="md-close" to="/contacts">Cancel</Button></div>
                                    <div><Button type="primary" size="large" icon="md-arrow-round-forward" @click="next">Contiune</Button></div>
                                </div>
                                <div class="uk-flex uk-flex-center uk-flex-between" v-show="active === 1">
                                    <div><Button type="primary" size="large" icon="md-arrow-round-back" @click="prev">Previous</Button></div>
                                    <div><Button type="success" size="large" icon="md-download" @click="add">Import Contacts</Button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end of modal -->
    </div>
</template>

<script>
    export default {
        name: "import",
        props:{
            modal:String
        },
        data(){
            return{
                active:0,
                addGroup:false,
                value1:'',
                model1:'',
                groups: [
                    {
                        value: 'Church Members',
                        label: 'Church Members'
                    },
                    {
                        value: 'Business Associates',
                        label: 'Business Associates'
                    },
                    {
                        value: 'Family',
                        label: 'Family'
                    },
                ]
            }
        },
        methods:{
            next() {
                if (this.active === 1) {
                    this.active = 0;
                } else {
                    this.active += 1;
                }
            },

            prev() {
                if (this.active === 0) {
                    this.active = 0;
                } else {
                    this.active--
                }

            },
            add(){
                this.addGroup = !this.addGroup
                this.$Message.success('Group has been added');
            }
        }
    }
</script>

<style scoped>
.uk-modal-title{
    color:#ffffff;
    font-size:16px;
}
.uk-modal-body{
   background:#ffffff;
}
.uk-modal-footer{
    background:#ffffff;
}
</style>