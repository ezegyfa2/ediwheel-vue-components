<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            title: {
                type: String
            },
            content: {
                type: String
            }
        },
        computed: {
            collapseId() {
                return 'collapse' + this._uid
            },
            headId() {
                return 'head' + this._uid
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
