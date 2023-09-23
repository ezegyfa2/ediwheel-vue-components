export default {
    install(Vue) {
        require('text-contents-vue-components/TextContent').default.install(Vue)

        registerVueComponent(
            'ediwheel-roadmap-two-title-text-content',
            require('./Component.vue').default,
            Vue
        )
    }
}