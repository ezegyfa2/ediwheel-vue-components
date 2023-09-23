export default {
    install(Vue) {
        registerVueComponent(
            'ediwheel-faq-item',
            require('./Component.vue').default,
            Vue
        )
    }
}