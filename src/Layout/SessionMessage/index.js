export default {
    install(Vue) {
        require('helper-vue-components/SessionMessages/MessageBox').default.install(Vue)

        registerVueComponent(
            'ediwheel-session-message',
            require('./Component.vue').default,
            Vue
        )
    }
}