export default {
    install(Vue) {
        require('text-contents-vue-components/MediumTextContent').default.install(Vue)

        registerVueComponent(
            'ediwheel-description-text-content',
            require('./Component.vue').default,
            Vue
        )
    }
}
