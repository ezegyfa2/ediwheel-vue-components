<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            item_sections: {
                type: Array
            },
            title_section: {
                type: Object
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
