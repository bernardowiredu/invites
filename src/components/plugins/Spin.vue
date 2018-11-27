<template>
    <div>
        <Spin fix size="large">
            <img class="demo-spin-icon-load" :src="'../img/Spinner.gif'" width="64" height="64">
            <div>refreshing table</div>
        </Spin>
    </div>
</template>

<script>
    export default {
        name: "spin",
        // props:{
        //     event:{
        //         type:String,
        //         required:true
        //     },
        //     // image:{
        //     //     type:String,
        //     //     required:true
        //     // }
        // }
    }
</script>

<style scoped>

</style>