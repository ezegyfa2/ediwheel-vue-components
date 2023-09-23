export default {
    install(Vue) {
        require('helper-vue-components/NavigationBar/CollapsableNavigationBar').default.install(Vue)

        registerVueComponent(
            'ediwheel-navigation-bar',
            require('./Component.vue').default,
            Vue
        )
    }
}