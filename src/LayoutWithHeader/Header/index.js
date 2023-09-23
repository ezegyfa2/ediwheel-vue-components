export default {
    install(Vue) {
        window.templates.ediwheel_header = require('./Template').default
        require('./Header').default.install(Vue)
        require('./LargeTextContent').default.install(Vue)
    }
}