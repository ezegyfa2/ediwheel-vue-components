export default {
    install(Vue) {
        require('helper-vue-components/IconLinks/ButtonIconLink').default.install(Vue)

        registerVueComponent(
            'ediwheel-button-icon-link2',
            require('./Component.vue').default,
            Vue
        )
    }
}