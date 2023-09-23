export default {
    install(Vue) {
        registerVueComponent(
            'ediwheel-pitch-deck',
            require('./Component.vue').default,
            Vue
        )
    }
}