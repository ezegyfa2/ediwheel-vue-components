export default {
    install(Vue) {
        require('description-vue-components/Container').default.install(Vue)

        registerVueComponent(
            'ediwheel-description-container',
            require('./Component.vue').default,
            Vue
        )
    }
}