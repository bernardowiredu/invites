<template>
    <div>
        <div id="modal-sections" uk-modal>
            <div class="uk-modal-dialog" style="background:#ffffff;">
                <button class="uk-modal-close-default" type="button" uk-close></button>
                <div class="uk-modal-header" style="background:#ffffff;">
                    <h5 class="uk-modal-title">Add Group</h5>
                </div>
                <div class="uk-modal-body">
                    <Form label-position="top">
                        <FormItem label="Group Name">
                            <Input v-model="value" size="large" placeholder="Enter Group Name..."/>
                        </FormItem>
                        <FormItem label="Description">
                            <Input v-model="value" :rows="4" type="textarea" placeholder="Enter Description..." />
                        </FormItem>
                    </Form>
                </div>
                <div class="uk-modal-footer uk-text-right">
                    <Button class="uk-modal-close uk-no-border padding-right-small" type="button" size="large">Cancel</Button>
                    <Button type="success" class="uk-no-border" size="large" icon="md-add">Add Group</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "group-header",

    }
</script>

<style scoped>

</style>