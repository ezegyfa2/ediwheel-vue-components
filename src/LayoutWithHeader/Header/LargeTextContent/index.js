export default {
    install(Vue) {
        require('text-contents-vue-components/LargeTextContent').default.install(Vue)

        registerVueComponent(
            'ediwheel-large-text-content',
            require('./Component.vue').default,
            Vue
        )
    }
}