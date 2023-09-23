export default {
    install(Vue) {
        registerVueComponent(
            'ediwheel-timeline',
            require('./Component.vue').default,
            Vue
        )
    }
}