export default {
    install(Vue) {
        require('helper-vue-components/Link').default.install(Vue)

        registerVueComponent(
            'ediwheel-button-icon-link',
            require('./Component.vue').default,
            Vue
        )
    }
}