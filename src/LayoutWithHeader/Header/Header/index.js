export default {
    install(Vue) {
        require('helper-vue-components/Headers/VideoBackgroundHeader').default.install(Vue)

        registerVueComponent(
            'ediwheel-header',
            require('./Component.vue').default,
            Vue
        )
    }
}