export default {
    install(Vue) {
        require('helper-vue-components/IconLinks/ButtonIconLink2').default.install(Vue)

        registerVueComponent(
            'ediwheel-button-icon-link',
            require('./Component.vue').default,
            Vue,
			'ediwheel-vue-components/Footer/ButtonLink/Component.vue'
        )
    }
}