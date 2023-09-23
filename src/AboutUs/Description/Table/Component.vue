<template lang="pug">
    include Template.pug
</template>

<script>
    import Table from 'helper-vue-components/Tables/Table/Component.vue'

    export default {
        mixins: [
            Table,
        ],
        props: {
            title: {
                type: String
            },
            subtitle: {
                type: String
            },
            footer_texts: {
                type: Array
            }
        },
        computed: {
            footerTextClass() {
                return {
                    '.content': 'm-0'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
