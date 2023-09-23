export default {
    install(Vue) {
        registerVueComponent(
            'ediwheel-faq',
            require('./Component.vue').default,
            Vue
        )
    }
}