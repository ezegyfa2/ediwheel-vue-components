export default {
    install(Vue) {
        require('description-vue-components/WhiteDescription').default.install(Vue)

        registerVueComponent(
            'ediwheel-description',
            require('./Component.vue').default,
            Vue
        )
    }
}