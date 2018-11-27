<template>
    <div>
        <div :id="modal" uk-modal>
            <div class="uk-modal-dialog" style="background:#ffffff;">
                <button class="uk-modal-close-default" type="button" uk-close></button>
                <div class="uk-modal-header" style="background:#ffffff;">
                    <h5 class="uk-modal-title">Add Contact</h5>
                </div>
                <div class="uk-modal-body">
                    <Form label-position="top">
                        <FormItem label="Name">
                            <Input v-model="value1" size="large" placeholder="Enter Contact Name..."/>
                        </FormItem>
                        <FormItem label="Mobile Number">
                            <Input v-model="value1" size="large" placeholder="Enter Contact Number..."/>
                        </FormItem>
                        <FormItem label="Email">
                            <Input v-model="value1" size="large" placeholder="Enter Contact Email..."/>
                        </FormItem>
                        <FormItem label="Select Group">
                            <Select size="large">
                                <option>Business associates</option>
                                <option>Bankers</option>
                                <option>Keep Fit</option>
                            </Select>
                        </FormItem>
                    </Form>
                </div>
                <div class="uk-modal-footer uk-text-right">
                    <Button class="uk-modal-close uk-no-border padding-right-small" size="large">Cancel</Button>&emsp;
                    <Button type="success" class="uk-no-border" size="large" icon="md-add">Add Contact</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "modal",
        data(){
            return{
               value1:''
            }
        },
        props:{
            modal:String
        }
    }
</script>

<style scoped>

</style>