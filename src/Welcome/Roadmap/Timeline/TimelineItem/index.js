export default {
    install(Vue) {
        registerVueComponent(
            'ediwheel-timeline-item',
            require('./Component.vue').default,
            Vue
        )
    }
}