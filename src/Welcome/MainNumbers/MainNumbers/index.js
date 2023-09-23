export default {
    install(Vue) {
        registerVueComponent(
            'ediwheel-main-numbers',
            require('./Component.vue').default,
            Vue
        )
    }
}