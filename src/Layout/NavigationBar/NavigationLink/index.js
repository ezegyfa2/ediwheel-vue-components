export default {
    install(Vue) {
        require('helper-vue-components/NavigationBar/NavigationLinks/NavigationLink').default.install(Vue)

        registerVueComponent(
            'ediwheel-navigation-link',
            require('./Component.vue').default,
            Vue
        )
    }
}