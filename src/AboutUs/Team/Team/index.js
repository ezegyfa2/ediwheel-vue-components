export default {
    install(Vue) {
        registerVueComponent(
            'ediwheel-team', 
            require('./Component.vue').default,
            Vue
        )
    }
}