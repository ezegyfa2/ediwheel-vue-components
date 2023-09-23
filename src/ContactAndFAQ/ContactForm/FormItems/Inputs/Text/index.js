export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/Inputs/Text').default.install(Vue)

        registerVueComponent(
            'ediwheel-contact-text-input',
            require('./Component.vue').default,
            Vue
        )
    }
}