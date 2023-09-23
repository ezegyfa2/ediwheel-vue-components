export default {
    install(Vue) {
        registerVueComponent(
            'ediwheel-roadmap',
            require('./Component.vue').default,
            Vue
        )
    }
}