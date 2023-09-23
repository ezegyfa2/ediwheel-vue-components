export default {
    install(Vue) {
        window.templates.ediwheel_layout = require('./Template').default
        require('./NavigationBar').default.install(Vue)
        require('./Footer').default.install(Vue)
        require('./SessionMessage').default.install(Vue)
        require('helper-vue-components/Pages/Page').default.install(Vue)
    }
}