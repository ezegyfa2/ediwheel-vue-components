<script>
    import LargeTextContent from 'text-contents-vue-components/LargeTextContent/Component.vue'

    export default {
        mixins: [
            LargeTextContent
        ],
        props: {
            added_classes: {
                type: Object,
                default () {
                    return {
                        '.content': 'text-uppercase'
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>