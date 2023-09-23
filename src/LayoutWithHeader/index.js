export default {
    install(Vue) {
        window.templates.ediwheel_layout_with_header = require('./Template').default
        require('./Header').default.install(Vue)
        require('ediwheel-vue-components/Layout').default.install(Vue)
    }
}