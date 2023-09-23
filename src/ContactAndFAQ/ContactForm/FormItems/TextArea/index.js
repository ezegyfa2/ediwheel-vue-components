export default {
    install(Vue) {
        require('helper-vue-components/Form/BootstrapFormItems/FormItemsWithoutLabel/TextArea').default.install(Vue)

        registerVueComponent(
            'ediwheel-contact-textarea',
            require('./Component.vue').default,
            Vue
        )
    }
}