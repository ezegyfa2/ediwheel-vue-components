<script>
    import TextContent from 'text-contents-vue-components/TextContent/Component.vue'

    export default {
        mixins: [
            TextContent,
        ],
        props: {
            added_classes: {
                type: Object,
                default () {
                    return {
                        '.title': 'h2',
                        '.content': 'h1'
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
