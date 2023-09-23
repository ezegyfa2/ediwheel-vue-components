<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            first_number_infos: {
                type: Object
            },
            second_number_infos: {
                type: Object
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
