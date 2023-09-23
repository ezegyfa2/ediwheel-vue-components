export default {
    install(Vue) {
        require('helper-vue-components/Footer/Footer').default.install(Vue)

        registerVueComponent(
            'ediwheel-footer',
            require('./Component.vue').default,
            Vue
        )
    }
}
