export default {
    install(Vue) {
        require('helper-vue-components/Tables/Table').default.install(Vue)
        require('ediwheel-vue-components/GlobalComponents/TextContents/SmallTextContent').default.install(Vue)
        require('ediwheel-vue-components/GlobalComponents/TextContents/TwoTitleTextContent').default.install(Vue)

        registerVueComponent(
            'ediwheel-table',
            require('./Component.vue').default,
            Vue
        )
    }
}