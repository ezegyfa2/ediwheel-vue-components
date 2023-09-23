export default {
    install(Vue) {
        window.templates.ediwheel_about_us = require('./Template').default
        require('./Description').default.install(Vue)
        require('./Team').default.install(Vue)
        require('ediwheel-vue-components/Layout').default.install(Vue)
    }
}