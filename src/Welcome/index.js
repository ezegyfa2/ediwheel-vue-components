export default {
    install(Vue) {
        window.templates.ediwheel_welcome = require('./Template').default
        require('ediwheel-vue-components/LayoutWithHeader').default.install(Vue)
        require('./Roadmap').default.install(Vue)
        require('./MainNumbers').default.install(Vue)
    }
}