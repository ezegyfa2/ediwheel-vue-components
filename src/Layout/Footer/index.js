export default {
    install(Vue) {
        window.templates.ediwheel_footer = require('./Template').default
        require('helper-vue-components/IconLinks/WerticallyIconLinks').default.install(Vue)
        require('./Footer').default.install(Vue)
        require('./Link').default.install(Vue)
        require('./ButtonLink').default.install(Vue)
    }
}